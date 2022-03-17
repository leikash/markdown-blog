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
  const ListLink = props => (
    <li style={{ display: `inline-block`, marginRight: `1rem` }}>
      <Link to={props.to}>{props.children}</Link>
    </li>
  )
  return (
    <header style={{ marginBottom: `1.5rem` }}>

      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h3 style={{ display: `inline` }}>
            <StaticImage 
              src="../images/logo_browser_772201.png" 
              alt="${data.site.siteMetadata.title}" 
            />
            <p>We wish fruitful life</p>
          </h3>
      </Link>
      <nav>
        <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about">About</ListLink>
        </ul>
      </nav>
    </header>
  )
}

export default Header