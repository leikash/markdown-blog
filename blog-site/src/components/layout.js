import React from "react"
import Header from "./header"
import Footer from "./footer"
import { useStaticQuery, graphql } from 'gatsby'
import SideBar from "./sideBar"
import AuthorProfile from "./authorProfile"
import {
  container,
  mainPart,
  setSideBar,
  sideBar,
} from './layout.module.css'
import Seo from '../components/seo'

const isSmartPhone = () => {
  if (navigator.userAgent.match(/iPhone|Android.+Mobile/)) {
    return true;
  } else {
    return false;
  }
}
console.log('isSmartPhone;', isSmartPhone())

const Layout = ({ pageTitle, pageDescription, topPage, children }) => {
  return(
    <div className={container}>
      <Seo
        pageTitle={pageTitle}
        pageDescription={pageDescription}
        topPage={topPage}
      />
      <Header/>
      {isSmartPhone() ?
        <div>
          <main className={mainPart}>
            {children}
          </main>
          <AuthorProfile/>
        </div>
        :
        <div className={setSideBar}>
          <main className={mainPart}>
            {children}
          </main>
          <SideBar/>
        </div>
      }
      <Footer/>
    </div>
  )
}

export default Layout