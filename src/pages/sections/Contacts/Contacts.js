import React from "react"
import "./Contacts.scss"
import fb from "./fb.svg"
import tg from "./tg.svg"
import vk from "./vk.svg"

function Contacts() {
  return (
    <section className="contacts" id="contacts">
      <div className="contacts__wrapper">
        <div className="contacts__form">
          <h2>Свяжитесь с нами</h2>
          <form
            id="fs-frm"
            name="simple-contact-form"
            acceptCharset="utf-8"
            action="https://formspree.io/YOUR_EMAIL_HERE"
            method="post"
          >
            <fieldset id="fs-frm-inputs">
              <input
                type="text"
                name="name"
                id="full-name"
                placeholder="Имя"
                required="required"
              />
              <input
                type="email"
                name="_replyto"
                id="email-address"
                placeholder="Email"
                pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
                required="required"
              />
              <input
                type="telephone"
                name="telephone"
                id="telephone"
                placeholder="Телефон"
                required="required"
              />
              <textarea
                rows="5"
                name="message"
                id="message"
                placeholder="Сообщение"
                required="required"
              ></textarea>
              <input
                type="hidden"
                name="_subject"
                id="email-subject"
                value="Contact Form Submission"
              />
            </fieldset>
            <input type="submit" value="Отправить" className="button" />
          </form>
        </div>
        <div className="contacts__info">
          <h2>Создайте рекламную кампанию вместе с нами</h2>
          <span className="contacts__phone">
            <a href="tel:+7-926-393-0652">8 926 393-06-52</a>
          </span>
          <span className="contacts__email">
            <a href="mailto:avsuslov@ya.ru">avsuslov@ya.ru</a>
          </span>
          <div className="contacts__social">
            <a href="#">
              <img src={fb} width="45" height="45" alt="Fb" />
            </a>
            <a href="#">
              <img src={vk} width="45" height="45" alt="VK" />
            </a>
            <a href="#">
              <img src={tg} width="45" height="45" alt="Telegram" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacts