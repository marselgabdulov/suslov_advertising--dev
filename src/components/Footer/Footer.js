import React from "react"
import "./Footer.scss"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <span className="footer__copy">
          © {new Date().getFullYear()}, реклама-да
        </span>
        <span className="footer__author">
          Разработано &nbsp;
          <a
            href="https://marselgabdulov.github.io/personal/"
            target="_blank"
            rel="noopener noreferrer"
            title="контакты разработчика"
          >
            MG
          </a>
        </span>
      </div>
    </footer>
  )
}

export default Footer
