import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

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
    <HeaderWrapper>
      <Link to="/">
            <div className="logo">
              <StaticImage 
                src="../images/logo_browser_772201.png" 
                alt="${data.site.siteMetadata.title}" 
                />
            </div>
            <div className='subtitle'>
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
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  .container {
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .logo {
    padding: 5px;
    font-size: 18px;
    margin: 1;
    font-weight: normal;
    a {
      text-decoration: none;
      color: var(--black);
    }
  }
  .subtitle {
    color: gray;
    padding:5px;
    font-size: 14px;
    margin: 0;
    font-weight: normal;
    text-align: right;
    a {
      text-decoration: none;
      color: var(--black);
    }

  }
  nav ul {
    margin: 0;
    list-style: none;
    display: flex;
    li {
      padding: 0 0 0 20px;
      a {
        text-decoration: none;
        color: var(--black);
        font-weight: lighter;
      }
      a:hober{
        text-decoration: underline;
        font-weight: bold;
        color: darkgreen;
      }
    }
  }
`

export default Header
