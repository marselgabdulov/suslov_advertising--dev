import React from "react"
import "./Nav.scss"
import Logo from "../Logo/Logo"

function Nav() {
  function scrollTo(element) {
    window.scroll({
      behavior: "smooth",
      left: 0,
      top: element.offsetTop - 100,
    })
  }
  return (
    <div className="nav">
      <div className="nav__wrapper">
        <Logo />
        <div className="nav__links">
          <span
            className="nav__link"
            onClick={() => scrollTo(document.getElementById("audio"))}
          >
            Аудио реклама
          </span>
          <span
            className="nav__link"
            onClick={() => scrollTo(document.getElementById("video"))}
          >
            Видео реклама
          </span>
          <span
            className="nav__link"
            onClick={() => scrollTo(document.getElementById("stages"))}
          >
            Этапы работ
          </span>
          <span
            className="nav__link"
            onClick={() => scrollTo(document.getElementById("prices"))}
          >
            Цены
          </span>
          <span
            className="nav__link"
            onClick={() => scrollTo(document.getElementById("examples"))}
          >
            Примеры
          </span>
          <span
            className="nav__link"
            onClick={() => scrollTo(document.getElementById("contacts"))}
          >
            Контакты
          </span>
        </div>
      </div>
    </div>
  )
}

export default Nav
