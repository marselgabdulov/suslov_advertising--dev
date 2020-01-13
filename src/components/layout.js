import React from "react"
import Nav from "./Nav/Nav"
import "./layout.scss"

function Layout({ children }) {
  return (
    <>
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
