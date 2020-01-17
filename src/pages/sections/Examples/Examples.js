import React from "react"
import "./Examples.scss"

function Examples() {
  return (
    <section className="examples" id="examples">
      <h2 style={{ textAlign: "center" }}>Примеры работ</h2>
      <iframe
        title="Росток новогодняя с музыкой"
        width="100%"
        height="23%"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/743937409&color=%2300aabb&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
      ></iframe>
      <br />
      <iframe
        title="Росток с музыкой"
        width="100%"
        height="23%"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/743938027&color=%2300aabb&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
      ></iframe>
      <br />
      <iframe
        title="Angel8"
        width="100%"
        height="53%%"
        src="https://www.youtube.com/embed/zVxlVbssCMk"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </section>
  )
}

export default Examples
