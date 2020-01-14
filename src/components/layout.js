import React from "react"
import Navbar from "./Navbar/Navbar"
import Footer from "./Footer/Footer"
import QuizState from "../context/Quiz/QuizState"
import "./layout.scss"

function Layout({ children }) {
  return (
    <QuizState>
      <Navbar />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </QuizState>
  )
}

export default Layout
