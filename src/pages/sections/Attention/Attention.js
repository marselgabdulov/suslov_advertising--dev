import React from "react"
import "./Attention.scss"
import Button from "../../../components/Button/Button"

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
      <Button color="blue" text="Оставить заявку" onClick={props.onClick} />
    </div>
  )
}

export default Attention
