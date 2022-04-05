import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import {
  navStyle,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
  headerPosition,
} from './header.module.css'

const Header = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteName
          }
        }
      }
    `
  );
  return (
    <header>
      <div className={headerPosition}>
        <Link to="/" className={siteTitle}>{data.site.siteMetadata.siteName}</Link>
      <nav className={navStyle}>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/blog" className={navLinkText}>
              Blog
            </Link>
          </li>
        </ul>
      </nav>
      </div>
    </header>
  )
}

export default Header

/*ロゴの画像を表示したいときに使う
            <div>
              <StaticImage 
                src="../images/logo_browser_772201.png" 
                alt="${data.site.siteMetadata.siteName}" 
                />
            </div>
*/