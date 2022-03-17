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
      <StaticImage 
          src="../images/logo_browser_772201.png" 
          alt="${data.site.siteMetadata.title}" 
      />
      <nav>
        <ul>
          <li><Link className="underline" to="/">top</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header