import React from 'react'
import { Link } from 'gatsby'

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Top</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header