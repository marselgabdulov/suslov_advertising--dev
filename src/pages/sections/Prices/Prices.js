import React from "react"
import "./Prices.scss"
import PricesImage from "./nature-man.svg"

function Prices() {
  return (
    <section className="prices" id="prices">
      <div
        className="prices__image"
        style={{
          backgroundImage: `url(${PricesImage})`,
        }}
      ></div>
      <h2 style={{ textAlign: "center" }}>
        Почему стоит заказать настройку у нас
      </h2>
      <ul>
        <li>
          <b>Экономим деньги</b>
          <br />
          На этапе подготовки можем найти профессионального диктора, сами
          смонтировать аудиоролик и сделать видеоролик стоимостью от <b>
            1000
          </b>{" "}
          рублей!
        </li>
        <li>
          <b>Работаем с маленькими бюджетами</b>
          <br />
          Работаем с бюджетами на рекламу от <b>3000</b> рублей в месяц
        </li>
        <li>
          <b>Работаем по договору</b>
          <br />
          По вашему желанию можем оформить договор оказания услуг
        </li>
        <li>
          <b>Эксклюзивность данной рекламы</b>
          <br />
          Пока ещё мало людей, использующих для продвижения своего бизнеса
          аудио- и видеорекламу в ВК
        </li>
      </ul>
    </section>
  )
}

export default Prices
