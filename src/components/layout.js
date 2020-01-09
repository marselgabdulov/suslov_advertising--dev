import React from "react"

import Nav from "./Nav/Nav"
import "./layout.scss"

const Layout = ({ children }) => {
  return (
    <>
      <div className="turn">
        <span>Пожалуйста переверните</span>
      </div>
      <Nav />
      <div>
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout

{
  /* <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer> */
}
