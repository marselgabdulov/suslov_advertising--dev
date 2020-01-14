import React from "react"
import Navbar from "./Navbar/Navbar"
import Footer from "./Footer/Footer"
import "./layout.scss"

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
