import React from "react"
import "./Contacts.scss"
import Telegram from "../../../images/telegram.svg"
import Whatsapp from "../../../images/whatsapp.svg"

function Contacts() {
  return (
    <section className="contacts" id="contacts">
      <div className="contacts__wrapper">
        <div className="contacts__info">
          <h2>Создайте рекламную кампанию вместе с нами</h2>
          <span className="contacts__phone">
            <a href="tel:+7-926-393-0652">8 926 393-06-52</a>
          </span>
          <span className="contacts__email">
            <a href="mailto:mreklama-da@ya.ru">mreklama-da@ya.ru</a>
          </span>
          <div className="contacts__messengers">
            <a href="https://wa.me/79263930652">
              <Whatsapp />
            </a>
            <a href="tg://resolve?domain=@mreklamada">
              <Telegram />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacts
