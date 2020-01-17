import React from "react"
import "./Audio.scss"
import AudioImage from "./headphones.svg"

function Audio() {
  return (
    <section className="audio" id="audio">
      <div
        className="audio__image"
        style={{
          backgroundImage: `url(${AudioImage})`,
        }}
      ></div>
      <div className="audio__text">
        <h2>Аудиореклама в ВК</h2>
        <p>
          это аудиозапись длинной до 30 секунд, которая запускается между
          треками в тот момент, когда человек слушает музыку на любом из
          устройств (компьютере, смартфоне или планшете).
        </p>
      </div>
    </section>
  )
}

export default Audio
