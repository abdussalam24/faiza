import React from 'react';
import { Link } from 'react-router-dom';

/** Visible breadcrumb trail. items: [{ name, path? }] — last item is the current page. */
const Breadcrumbs = ({ items }) => (
  <nav className="breadcrumb" aria-label="Breadcrumb">
    <ol>
      <li><Link to="/">Home</Link></li>
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <li key={item.name}>
            {isLast || !item.path ? (
              <span aria-current={isLast ? 'page' : undefined}>{item.name}</span>
            ) : (
              <Link to={item.path}>{item.name}</Link>
            )}
          </li>
        );
      })}
    </ol>
  </nav>
);

export default Breadcrumbs;
