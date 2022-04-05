import React from 'react'
import { Link } from 'gatsby'
import {
  navStyle,
  navLinks,
  navLinkItem,
  navLinkText,
} from './header.module.css'
import {
  footerText,
  footerAd,
} from './footer.module.css'

const Footer = () => {
  return (
    <footer>
      <div>
        <p className={footerAd}>
          <a href="https://rpx.a8.net/svt/ejp?a8mat=3N6E9C+DT4YWI+2HOM+6I9N5&rakuten=y&a8ejpredirect=http%3A%2F%2Fhb.afl.rakuten.co.jp%2Fhgc%2F0eb4779e.5d30c5ba.0eb4779f.b871e4e3%2Fa22032856216_3N6E9C_DT4YWI_2HOM_6I9N5%3Fpc%3Dhttp%253A%252F%252Ftravel.rakuten.co.jp%252F%26m%3Dhttp%253A%252F%252Ftravel.rakuten.co.jp%252F" rel="nofollow" target="_blank">
          <img src="http://hbb.afl.rakuten.co.jp/hsb/0ea7f9a4.79280dcb.0ea7f99d.1ac92fca/153145/" border="0"/></a>
          <img border="0" width="1" height="1" src="https://www16.a8.net/0.gif?a8mat=3N6E9C+DT4YWI+2HOM+6I9N5" alt=""></img>
        </p>
        <nav className={navStyle}>
          <ul className={navLinks}>
            <li className={navLinkItem}>
              <Link to="/" className={navLinkText}>
                Home
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/blog" className={navLinkText}>
                Blog
              </Link>
            </li>
          </ul>
        </nav>
        <p className={footerText}>
          We wish fruitful life, {(new Date()).getFullYear()}
        </p>
      </div>
    </footer>
  )
}

export default Footer