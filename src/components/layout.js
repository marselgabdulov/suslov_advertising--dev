import React, { useEffect } from "react"
import Navbar from "./Navbar/Navbar"
import Footer from "./Footer/Footer"
import "./layout.scss"

function Layout({ children }) {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:400,600,900&display=swap"
        rel="stylesheet"
      ></link>
      <Navbar />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
