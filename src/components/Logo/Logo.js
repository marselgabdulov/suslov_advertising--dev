import React from "react"
import "./Logo.scss"

function Logo() {
  return (
    <div
      className="logo"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <span style={{ color: "#231d9b" }}>релама</span>
      <span style={{ color: "#e0761f" }}>ДА</span>
    </div>
  )
}

export default Logo
