import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"

const Header = () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );
  return (
    <header>
      <StaticImage src='../images/logo_browser_772201.png' alt="Leikash Blog"></StaticImage>
      <h2>{data.site.siteMetadata.title}</h2>
      <nav>
        <ul>
          <li><Link className="underline" to="/">top</Link></li>
          <li><Link className="underline" to="/about">about</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header