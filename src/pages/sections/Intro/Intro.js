import React from "react"
import "./Intro.scss"
import IntroImage from "./professor.svg"

function Intro() {
  return (
    <section className="intro" id="intro">
      <div className="intro__text">
        <h1>Аудио и видео реклама в социальной сети ВКонтакте</h1>
        <p>
          Пройдите тест, чтобы узнать подходит ли данная реклама для вашего
          бизнеса
        </p>
        <div className="intro__buttons">
          <button className="button orange">Тест</button>
          <button className="button blue">Оставить заявку</button>
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
