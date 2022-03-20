import React from 'react'
import { Link } from 'gatsby'
import styled from "styled-components"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Footer = () => {
  return (
    <FooterWrapper style={{ marginBottom: `1.5rem` }}>
      <div>
        <nav>
          <ul style={{ listStyle: `none`, float: `right` }}>
            <ListLink to="/">Home</ListLink>
            <ListLink to="/about">About</ListLink>
          </ul>
        </nav>
          <p>
            We wish fruitful life, {(new Date()).getFullYear()}
          </p>
      </div>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
text-align: center;
`

export default Footer