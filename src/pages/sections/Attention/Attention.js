import React from "react"
import "./Attention.scss"

function Attention(props) {
  return (
    <div className="attention">
      <p>
        В аудио и видео рекламе можно использовать музыкальное сопровождение
      </p>
      <p>
        Оба вида рекламы для большего эффекта можно озвучить голосами
        профессиональных дикторов
      </p>
      <form action="mailto:mreklama-da@ya.ru" className="attention__mail">
        <input
          type="submit"
          name="submit"
          value="напишите нам"
          className="attention__button"
        />
      </form>
    </div>
  )
}

export default Attention
