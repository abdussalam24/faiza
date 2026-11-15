/**
 * Brand asset generator — run with `npm run assets`.
 *
 * Reads the original artwork in /assets-src (exported from www.fabzhr.com)
 * and writes every derived logo, icon, social image and WebP photo into /public.
 * Outputs are committed, so this only needs re-running when the source art changes.
 */
import sharp from 'sharp';
import { mkdir, writeFile, copyFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const src = (f) => path.join(root, 'assets-src', f);
const out = (f) => path.join(root, 'public', f);

const NAVY = { r: 0x0b, g: 0x20, b: 0x30 };
const CREAM = { r: 0xf4, g: 0xf6, b: 0xf2 };
const LIME = '#b4e35c';

/**
 * Reverse the full-colour logo for navy surfaces: the emerald and charcoal
 * parts become cream, the gold stays gold. Shading is kept by mixing toward
 * cream in proportion to how "green/grey" a pixel is.
 */
async function reverseForDark(file) {
  const { data, info } = await sharp(file).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i], g = data[i + 1], b = data[i + 2];
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    const sat = max === 0 ? 0 : (max - min) / max;
    const isGold = r >= g && g > b && r > 120 && sat > 0.18;
    let t;
    if (isGold) {
      t = 0; // keep the gold accents
    } else if (g > r) {
      t = 1; // emerald greens
    } else {
      // neutral/dark greys (wordmark "INTERNATIONAL INC.") -> cream; light neutrals stay
      t = max < 170 ? 1 : Math.max(0, (215 - max) / 45);
    }
    data[i] = Math.round(r + (CREAM.r - r) * t);
    data[i + 1] = Math.round(g + (CREAM.g - g) * t);
    data[i + 2] = Math.round(b + (CREAM.b - b) * t);
  }
  return sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } }).png().toBuffer();
}

/** Minimal ICO writer that embeds PNG frames (supported by every modern browser). */
function buildIco(pngs) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(pngs.length, 4);
  const dir = Buffer.alloc(16 * pngs.length);
  let offset = 6 + dir.length;
  pngs.forEach(({ size, buf }, i) => {
    const o = i * 16;
    dir.writeUInt8(size >= 256 ? 0 : size, o);
    dir.writeUInt8(size >= 256 ? 0 : size, o + 1);
    dir.writeUInt8(0, o + 2);
    dir.writeUInt8(0, o + 3);
    dir.writeUInt16LE(1, o + 4);
    dir.writeUInt16LE(32, o + 6);
    dir.writeUInt32LE(buf.length, o + 8);
    dir.writeUInt32LE(offset, o + 12);
    offset += buf.length;
  });
  return Buffer.concat([header, dir, ...pngs.map((p) => p.buf)]);
}

/** Door symbol centred on a rounded navy tile — used for favicons and app icons. */
async function doorTile(size, doorReversed) {
  const pad = Math.round(size * 0.12);
  const door = await sharp(doorReversed)
    .resize(size - pad * 2, size - pad * 2, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();
  const radius = Math.round(size * 0.2);
  const mask = Buffer.from(
    `<svg width="${size}" height="${size}"><rect width="${size}" height="${size}" rx="${radius}" ry="${radius}" fill="#fff"/></svg>`
  );
  return sharp({ create: { width: size, height: size, channels: 4, background: { ...NAVY, alpha: 1 } } })
    .composite([{ input: door, gravity: 'center' }, { input: mask, blend: 'dest-in' }])
    .png()
    .toBuffer();
}

async function main() {
  await mkdir(out('images/services'), { recursive: true });

  // 1. Logos ---------------------------------------------------------------
  const logoSrc = src('fabz-logo-source.png');
  await sharp(logoSrc).png({ compressionLevel: 9 }).toFile(out('logo.png'));
  await sharp(logoSrc).resize(420).webp({ quality: 82, alphaQuality: 90 }).toFile(out('logo.webp'));

  const logoReversed = await reverseForDark(logoSrc);
  await sharp(logoReversed).png({ compressionLevel: 9 }).toFile(out('logo-white.png'));
  await sharp(logoReversed).resize(420).webp({ quality: 82, alphaQuality: 90 }).toFile(out('logo-white.webp'));

  // 2. Door / opportunity symbol --------------------------------------------
  const doorSrc = src('fabz-door-source.png');
  await sharp(doorSrc).resize(560).webp({ quality: 85 }).toFile(out('images/fabz-door.webp'));
  await sharp(doorSrc).resize(560).png({ compressionLevel: 9 }).toFile(out('images/fabz-door.png'));
  const doorReversed = await reverseForDark(doorSrc);

  // 3. Favicons ---------------------------------------------------------------
  const icoFrames = [];
  for (const size of [16, 32, 48]) icoFrames.push({ size, buf: await doorTile(size, doorReversed) });
  await writeFile(out('favicon.ico'), buildIco(icoFrames));
  await writeFile(out('favicon-32.png'), icoFrames[1].buf);
  await writeFile(out('apple-touch-icon.png'), await doorTile(180, doorReversed));
  await writeFile(out('icon-512.png'), await doorTile(512, doorReversed));

  // 4. Open Graph image (1200x630, navy, logo + tagline) -----------------------
  const ogLogo = await sharp(logoReversed).resize(860).toBuffer();
  const ogText = Buffer.from(`
    <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
      <rect x="170" y="452" width="96" height="6" rx="3" fill="${LIME}"/>
      <text x="170" y="510" font-family="Manrope, 'DM Sans', Arial, sans-serif" font-size="30" font-weight="700" fill="#f4f6f2">
        Recruitment · Fractional HR · Global Mobility · Career Services
      </text>
      <text x="170" y="556" font-family="'DM Sans', Arial, sans-serif" font-size="24" fill="${LIME}">
        Ontario, Canada  ·  fabzhr.com
      </text>
    </svg>`);
  await sharp({ create: { width: 1200, height: 630, channels: 4, background: { ...NAVY, alpha: 1 } } })
    .composite([
      { input: ogLogo, top: 96, left: 170 },
      { input: ogText, top: 0, left: 0 },
    ])
    .png({ compressionLevel: 9 })
    .toFile(out('og-image.png'));

  // 5. Photography --------------------------------------------------------------
  await sharp(src('faiza-source.png')).resize(720, 720).webp({ quality: 80 }).toFile(out('faiza.webp'));
  await sharp(src('faiza-source.png')).resize(160, 160).webp({ quality: 80 }).toFile(out('faiza-avatar.webp'));
  for (const f of ['service-recruiter', 'service-hr-advisor', 'service-career-coach', 'service-global-move']) {
    await copyFile(src(`${f}.webp`), out(`images/services/${f}.webp`));
  }

  console.log('Brand assets written to /public');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
