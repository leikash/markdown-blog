import React from "react"
import Header from "./header"
import Footer from "./footer"


const Layout = (props) => {
  return(
    <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
      <Header />
        <main className="container">{props.children}</main>
      <Footer />
    </div>
  )
}

export default Layout