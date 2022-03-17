import React from 'react'
import { Link } from 'gatsby'

const Footer = () => {
  return (
    <footer>
      <div>
      <nav>
        <ul>
          <li><Link className="underline" to="/">top</Link></li>
          <li><Link className="underline" to="/about">about</Link></li>
        </ul>
      </nav>
        <p className='text-gray-300'>
          We wish fruitful life, {(new Date()).getFullYear()}
        </p>
      </div>
    </footer>
  )
}

export default Footer