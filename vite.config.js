import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { marked } from 'marked'

/**
 * Turns src/content/posts/*.md into JS modules at build time:
 * front matter → fields, Markdown body → HTML. Keeps the Markdown parser out of the browser bundle.
 */
function markdownPosts() {
  return {
    name: 'fabz-markdown-posts',
    transform(code, id) {
      if (!id.endsWith('.md')) return null
      const raw = code.replace(/\r\n/g, '\n')
      const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/)
      const meta = {}
      const body = match ? match[2] : raw
      if (match) {
        match[1].split('\n').forEach((line) => {
          const m = line.match(/^([A-Za-z]+):\s*(.*)$/)
          if (m) meta[m[1]] = m[2].replace(/\s+#.*$/, '').replace(/^["']|["']$/g, '').trim()
        })
      }
      const words = body.split(/\s+/).filter(Boolean).length
      const post = {
        ...meta,
        html: marked.parse(body, { gfm: true }),
        readingMinutes: Math.max(1, Math.round(words / 200)),
      }
      return { code: `export default ${JSON.stringify(post)};`, map: null }
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [markdownPosts(), react()],
  ssr: {
    // CommonJS package — bundle it into the prerender build so named imports work in Node.
    noExternal: ['react-helmet-async'],
  },
})
