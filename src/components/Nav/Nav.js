import React from "react"
import "./Nav.scss"

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
      <span
        className="nav__logo"
        onClick={() => scrollTo(document.getElementById("intro"))}
      >
        Logo
      </span>
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
          onClick={() => scrollTo(document.getElementById("responses"))}
        >
          Отзывы
        </span>
        <span
          className="nav__link"
          onClick={() => scrollTo(document.getElementById("stages"))}
        >
          Этапы работ
        </span>
        <span
          className="nav__link"
          onClick={() => scrollTo(document.getElementById("contacts"))}
        >
          Контакты
        </span>
      </div>
    </div>
  )
}

export default Nav
