import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

// Style
const container = {
  margin: 'auto',
  maxWidth: '500px',
  fontFamily: 'sans-serif',
};

const heading = {
  color: 'rebeccapurple',
};

const navLinks = {
  display: 'flex',
  listStyle: 'none',
  paddingLeft: '0',
};

const navLinkItem = {
  paddingRight: '2rem',
};

const navLinkText = {
  color: 'black',
};

const siteTitle = {
  fontSize: '3rem',
  color: 'gray',
  fontWeight: '700',
  margin: '3rem 0',
};

const Layout = ({ pageTitle, children }) => {
  // GraphQL syntax
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div style={container}>
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>
      <header style={siteTitle}>{data.site.siteMetadata.title}</header>
      <nav>
        <ul style={navLinks}>
          <li style={navLinkItem}>
            <Link to='/' style={navLinkText}>
              Home
            </Link>
          </li>
          <li style={navLinkItem}>
            <Link to='/about' style={navLinkText}>
              About
            </Link>
          </li>
          <li style={navLinkItem}>
            <Link to='/blog' style={navLinkText}>
              Blog
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 style={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};
export default Layout;
