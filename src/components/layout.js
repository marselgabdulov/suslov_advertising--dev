import React from "react"
import Nav from "./Nav/Nav"
import Footer from "./Footer/Footer"
import "./layout.scss"

function Layout({ children }) {
  return (
    <>
      <Nav />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
