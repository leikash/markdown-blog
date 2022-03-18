import React from 'react'
import { Link } from 'gatsby'

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Footer = () => {
  return (
    <footer  style={{ marginBottom: `1.5rem` }}>
      <div>
        <nav>
          <ul style={{ listStyle: `none`, float: `right` }}>
            <ListLink to="/">Home</ListLink>
            <ListLink to="/about">About</ListLink>
          </ul>
        </nav>
          <p className='text-pink-300'>
            We wish fruitful life, {(new Date()).getFullYear()}
          </p>
      </div>
    </footer>
  )
}

export default Footer