import React from "react"
import "./Logo.scss"

function Logo() {
  return (
    <div
      className="logo"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <span>РЕКЛАМА-</span>
      <span>ДА</span>
    </div>
  )
}

export default Logo
