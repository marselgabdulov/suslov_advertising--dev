import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import IntroImage from "../images/professor.svg"

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <section className="intro" id="intro">
        <div className="intro__text">
          <h1>Аудио и видео реклама в социальной сети ВКонтакте</h1>
          <p>
            Пройдите тест, чтобы узнать подходит ли данная реклама для Вашего
            бизнеса
          </p>
          <div className="intro__buttons">
            <a className="button">Тест</a>
            <a className="button">Оставить заявку</a>
          </div>
        </div>
        <div
          className="intro__image"
          style={{
            backgroundImage: `url(${IntroImage})`,
          }}
        ></div>
      </section>
      <section className="section" id="audio">
        <p>
          <b>Аудио реклама в ВК</b> это аудио запись длинной до 30 секунд,
          которое запускается между треками в момент, когда человек слушает
          музыку на любом из устройств (компьютере, смартфоне или планшете).
        </p>
      </section>
      <section className="section" id="video">
        Видео
      </section>
      <section className="section" id="responses">
        Отзывы
      </section>
      <section className="section" id="stages">
        Этапы работ
      </section>
      <section className="section" id="contacts">
        Контакты
      </section>
    </Layout>
  )
}

export default IndexPage
