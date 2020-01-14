import React from "react"
import "./Stages.scss"
import StagesImage from "./notes.svg"

function Stages() {
  return (
    <section className="stages" id="stages">
      <div
        className="stages__image"
        style={{
          backgroundImage: `url(${StagesImage})`,
        }}
      ></div>
      <br />
      <h2 style={{ textAlign: "center" }}>Как мы настраиваем рекламу</h2>
      <ol>
        <li>
          <b>
            Анализируем ваш бизнес и вместе с вами выделяем самые сильные
            стороны
          </b>
        </li>
        <li>
          <b>Анализируем ваших клиентов</b>
        </li>
        <li>
          <b>Продумываем рекламное предложение или акцию</b>
        </li>
        <li>
          <b>Пишем сценарий для аудио или видео ролика</b>
        </li>
        <li>
          <b>Работаем с диктором, заказываем, монтируем</b>
        </li>
        <li>
          <b>По вашему желанию, можем создать простой видео ролик бесплатно</b>
        </li>
        <li>
          <b>Запускаем вашу рекламу</b>
        </li>
        <li>
          <b>Следим за показателями и корректируем их в течение месяца</b>
        </li>
      </ol>
    </section>
  )
}

export default Stages
