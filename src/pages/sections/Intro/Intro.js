import React from "react"
import "./Intro.scss"
import IntroImage from "./social-feed.svg"

function Intro() {
  return (
    <section className="intro" id="intro">
      <div className="intro__text">
        <h1>Новое слово в продвижении бренда в ВК</h1>
        <p>
          Создаем и настраиваем аудио и видео рекламу в социальной сети
          ВКонтакте. О вас услышат, вас увидят.
        </p>
        <div className="intro__links">
          <a href="mailto:mreklama-da@ya.ru" className="intro__email">
            mreklama-da@ya.ru
          </a>
          <a href="tel:+7-926-393-0652" className="intro__phone">
            8 926 393-06-52
          </a>
        </div>
      </div>
      <div
        className="intro__image"
        style={{
          backgroundImage: `url(${IntroImage})`,
        }}
      ></div>
    </section>
  )
}

export default Intro
