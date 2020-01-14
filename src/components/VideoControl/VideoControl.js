import React, { useEffect } from "react"
import "./VideoControl.scss"

function VideoControl(props) {
  useEffect(() => {
    let video = document.getElementById(props.id)
    video.volume = 0.5
  }, [])
  return (
    <video
      controls
      id={props.id}
      width="320"
      height="240"
      className="video-controls"
    >
      <source src={props.srcMP4} type="video/mp4" />
      <source src={props.srcWEBM} type="video/webm" />
    </video>
  )
}

export default VideoControl
