import React, { useEffect } from "react"
import "./Navbar.scss"
import Logo from "../Logo/Logo"

function Navbar() {
  function scrollTo(element) {
    window.scroll({
      behavior: "smooth",
      left: 0,
      top: element.offsetTop - 100,
    })
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <nav className="navbar">
      <div className="navbar__wrapper">
        <Logo />
        <div className="navbar__links">
          <span
            className="navbar__link"
            onClick={() => scrollTo(document.getElementById("audio"))}
          >
            Аудио реклама
          </span>
          <span
            className="navbar__link"
            onClick={() => scrollTo(document.getElementById("video"))}
          >
            Видео реклама
          </span>
          <span
            className="navbar__link"
            onClick={() => scrollTo(document.getElementById("stages"))}
          >
            Этапы работ
          </span>
          <span
            className="navbar__link"
            onClick={() => scrollTo(document.getElementById("prices"))}
          >
            Цены
          </span>
          <span
            className="navbar__link"
            onClick={() => scrollTo(document.getElementById("examples"))}
          >
            Примеры
          </span>
          <span
            className="navbar__link"
            onClick={() => scrollTo(document.getElementById("contacts"))}
          >
            Контакты
          </span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
