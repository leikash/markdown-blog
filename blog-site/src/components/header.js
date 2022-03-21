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
      <Link to="/">
            <h1>
              header, {data.site.siteMetadata.title}
            </h1>
            <div>
              We wish fruitful life
            </div>
      </Link>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
      <br/>
    </header>
  )
}

export default Header

/*ロゴの画像を表示したいときに使う
            <div>
              <StaticImage 
                src="../images/logo_browser_772201.png" 
                alt="${data.site.siteMetadata.title}" 
                />
            </div>
*/