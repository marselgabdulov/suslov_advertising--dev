import React from "react"
import "./Video.scss"
import VideoImage from "./video.svg"

function Video() {
  return (
    <section className="video" id="video">
      <div
        className="video__image"
        style={{
          backgroundImage: `url(${VideoImage})`,
        }}
      ></div>
      <div className="video__text">
        <h2>Видео реклама в ВК</h2>
        <p>
          это видеоролик, который запускается перед тем, как человек хочет
          посмотреть интересующее его видео. И не важно где, на компьютере,
          телефоне или планшете
        </p>
      </div>
    </section>
  )
}

export default Video
