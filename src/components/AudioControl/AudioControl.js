import React, { useEffect } from "react"

function AudioControl(props) {
  useEffect(() => {
    let audio = document.getElementById(props.id)
    audio.volume = 0.5
  }, [])
  return (
    <audio controls id={props.id}>
      <source src={props.srcMP3} type="audio/mp3" />
    </audio>
  )
}

export default AudioControl
