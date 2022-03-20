import React from 'react'
import { Link } from 'gatsby'

const ListLink = props => (
  <li>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Footer = () => {
  return (
    <footer>
      <div>
        <nav>
          <ul>
            <ListLink to="/">Home</ListLink>
            <ListLink to="/about">About</ListLink>
          </ul>
        </nav>
          <p>
            We wish fruitful life, {(new Date()).getFullYear()}
          </p>
      </div>
    </footer>
  )
}

export default Footer