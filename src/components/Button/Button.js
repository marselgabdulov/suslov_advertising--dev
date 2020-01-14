import React from "react"
import "./Button.scss"

function Button(props) {
  return (
    <button className={`button ${props.color}`} onClick={props.onClick}>
      {props.text}
    </button>
  )
}

export default Button
