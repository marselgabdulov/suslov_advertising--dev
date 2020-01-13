import React from "react"
import "./Request.scss"
import RequestImage from "../../images/agreement.svg"

function Request() {
  return (
    <div className="request-inner">
      <form
        className="request-form"
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
        <input type="submit" value="Оставить заявку" className="button blue" />
      </form>
      <div
        className="request__image"
        style={{
          backgroundImage: `url(${RequestImage})`,
        }}
      ></div>
    </div>
  )
}

export default Request
