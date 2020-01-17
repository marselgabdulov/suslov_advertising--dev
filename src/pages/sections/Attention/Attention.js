import React from "react"
import "./Attention.scss"

function Attention(props) {
  return (
    <div className="attention">
      <p>
        В аудио- и видеорекламе можно использовать музыкальное сопровождение.
      </p>
      <p>
        Оба вида рекламы для большего эффекта будут озвучены голосами
        профессиональных дикторов.
      </p>
      <div className="attention__mail">
        <a className="attention__button" href="mailto:mreklama-da@ya.ru">
          напишите нам
        </a>
      </div>
    </div>
  )
}

export default Attention
