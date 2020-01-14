import React, { Component } from "react"
import "./Nav.scss"
import Logo from "../Logo/Logo"

class Navbar extends Component {
  state = {
    prevScrollpos: window.pageYOffset,
    visible: true,
  }

  // Adds an event listener when the component is mount.
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  // Remove the event listener when the component is unmount.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
  }

  // Hide or show the menu.
  handleScroll = () => {
    const { prevScrollpos } = this.state

    const currentScrollPos = window.pageYOffset
    const visible = prevScrollpos > currentScrollPos

    this.setState({
      prevScrollpos: currentScrollPos,
      visible,
    })
  }

  scrollTo = element => {
    window.scroll({
      behavior: "smooth",
      left: 0,
      top: element.offsetTop - 100,
    })
  }
  render() {
    return (
      <nav className={this.state.visible ? "navbar" : "navbar--hidden"}>
        <div className="navbar__wrapper">
          <Logo />
          <div className="navbar__links">
            <span
              className="navbar__link"
              onClick={() => this.scrollTo(document.getElementById("audio"))}
            >
              Аудио реклама
            </span>
            <span
              className="navbar__link"
              onClick={() => this.scrollTo(document.getElementById("video"))}
            >
              Видео реклама
            </span>
            <span
              className="navbar__link"
              onClick={() => this.scrollTo(document.getElementById("stages"))}
            >
              Этапы работ
            </span>
            <span
              className="navbar__link"
              onClick={() => this.scrollTo(document.getElementById("prices"))}
            >
              Цены
            </span>
            <span
              className="navbar__link"
              onClick={() => this.scrollTo(document.getElementById("examples"))}
            >
              Примеры
            </span>
            <span
              className="navbar__link"
              onClick={() => this.scrollTo(document.getElementById("contacts"))}
            >
              Контакты
            </span>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
