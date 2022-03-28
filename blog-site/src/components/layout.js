import React from "react"
// import Header from "./header"
// import Footer from "./footer"
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
  container,
  navStyle,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
  mainPart,
} from './layout.module.css'
import Seo from '../components/seo'

const Layout = ({ pageTitle, pageDescription, topPage, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteName
        }
      }
    }
  `)
  return(
    <div className={container}>
      <Seo
        pageTitle={pageTitle}
        pageDescription={pageDescription}
        topPage={topPage}
      />
      <header>
        <Link to="/" className={siteTitle}>{data.site.siteMetadata.siteName}</Link>
      </header>
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
      <main className={mainPart}>
          {children}
      </main>
    </div>
  )
}

// ページの名前を表示したいときに使う
// <h1 className={heading}>{pageTitle}</h1>
/* about pageを表示させるときに復活させる 
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              About
            </Link>
          </li>
*/

export default Layout