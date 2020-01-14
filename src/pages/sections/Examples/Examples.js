import React from "react"
import "./Examples.scss"
import AudioControl from "../../../components/AudioControl/AudioControl"
import VideoControl from "../../../components/VideoControl/VideoControl"
import AudioOne from "./rostok1.mp3"
import AudioTwo from "./rostok2.mp3"
import VideoOne from "./angel8.mp4"
import VideoOneWebM from "./angel8.webm"

function Examples() {
  return (
    <section className="examples" id="examples">
      <h2 style={{ textAlign: "center" }}>Примеры работ</h2>
      <AudioControl srcMP3={AudioOne} id="audio-one" />
      <br />
      <AudioControl srcMP3={AudioTwo} id="audio-two" />
      <VideoControl srcMP4={VideoOne} srcWEBM={VideoOneWebM} id="video-one" />
    </section>
  )
}

export default Examples
