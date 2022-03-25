import React from "react"
// import Header from "./header"
// import Footer from "./footer"
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
  container,
  heading,
  navPosition,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
  mainPart,
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return(
    <div className={container}>
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      <header className={siteTitle}>{data.site.siteMetadata.title}</header>
      <nav className={navPosition}>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              About
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
          <h1 className={heading}>{pageTitle}</h1>
          {children}
      </main>
    </div>
  )
}

export default Layout