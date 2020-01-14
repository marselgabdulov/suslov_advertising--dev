import React, { useContext } from "react"
import "./Intro.scss"
import IntroImage from "./social-feed.svg"
import Button from "../../../components/Button/Button"

function Intro(props) {
  return (
    <section className="intro" id="intro">
      <div className="intro__text">
        <h1>Аудио и видео реклама в социальной сети ВКонтакте</h1>
        <p>
          Пройдите тест, чтобы узнать подходит ли данная реклама для вашего
          бизнеса
        </p>
        <div className="intro__buttons">
          <Button color="orange" text="Тест" />
          <Button color="blue" text="Оставить заявку" onClick={props.onClick} />
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
