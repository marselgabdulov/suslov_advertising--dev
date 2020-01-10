import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import IntroImage from "../images/professor.svg"
import AudioImage from "../images/audio.svg"
import VideoImage from "../images/video.svg"

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <section className="intro" id="intro">
        <div className="intro__text">
          <h1>Аудио и видео реклама в социальной сети ВКонтакте</h1>
          <p>
            Пройдите тест, чтобы узнать подходит ли данная реклама для Вашего
            бизнеса
          </p>
          <div className="intro__buttons">
            <a className="button">Тест</a>
            <a className="button">Оставить заявку</a>
          </div>
        </div>
        <div
          className="intro__image"
          style={{
            backgroundImage: `url(${IntroImage})`,
          }}
        ></div>
      </section>
      <section className="audio" id="audio">
        <div
          className="audio__image"
          style={{
            backgroundImage: `url(${AudioImage})`,
          }}
        ></div>
        <div className="audio__text">
          <h2>Аудио реклама в ВК</h2>
          <p>
            это аудио запись длинной до 30 секунд, которое запускается между
            треками в момент, когда человек слушает музыку на любом из устройств
            (компьютере, смартфоне или планшете).
          </p>
        </div>
      </section>
      <section className="audio__advantages">
        <h2>Плюсы аудио рекламы</h2>
        <ul>
          <li>
            <b>Выделяет среди конкурентов</b>
            <br />
            Аудио рекламой пользуются крупные бренды, поэтому слушатель будет
            удивлен, услышав вашу рекламу, чем будет достигнут
            &laquo;Вау-эффект&raquo;.
          </li>
          <li>
            <b>Как реклама на радио, только дешевле в десятки раз</b>
          </li>
          <li>
            <b>Умещает много информации о вашем предложении</b>
            <br />
            Длительность до 30-ти секунд. Можно успеть донести очень много
            информации о Вашем бизнесе, или актуальных акциях.
          </li>
          <li>
            <b>Тонкая и точечная настройка на Вашу потенциальную аудиторию</b>
            <br />
            Можно настроиться именно на ту аудиторию которая Вам нужно по: полу,
            возрасту, гео локации (дом, работа), уровню доходов, интересам и
            многому другому - или же можно настроиться на пользователей групп в
            ВК Ваших конкурентов. Также по дням недели и времени когда Вам это
            нужно.
          </li>
          <li>
            <b>Слушают всё ОТ и ДО</b>
            <br />
            Аудио Рекламу не промотать - поэтому человек будет слушать Ваше
            рекламное предложение от и до.
          </li>
          <li>
            <b>Без конкуренции. Только Вы и Ваше предложение</b>
            <br />
            Новый формат, в котором пока нет конкуренции. Ваши конкуренты с
            вероятностью 95% пока не используют этот формат рекламы.
          </li>
        </ul>
      </section>
      <section className="video" id="video">
        <div
          className="video__image"
          style={{
            backgroundImage: `url(${VideoImage})`,
          }}
        ></div>
        <div className="video__text">
          <h2>Видео реклама в ВК</h2>
          <p>
            это видео, которое запускается перед тем, как человек хочет
            посмотреть интересующего его видео. И не важно где, на компьютере,
            телефоне или планшете
          </p>
        </div>
      </section>
      <section className="video__advantages">
        <h2>Плюсы видео рекламы</h2>
        <ul>
          <li>
            <b>Рядом с крупными брендами</b>
            <br />В видео рекламе в ВК также рекламируются крупные бренды -
            поэтому &laquo;Вау-эффект&raquo; обеспечен после просмотра Вашего
            видео.
          </li>
          <li>
            <b>Дешевле рекламы на ТВ</b>
            <br />
            Видео реклама дешевле рекламы на телевизоре в несколько десятков
            раз.
          </li>

          <li>
            <b>Точечная настройка на ваших потенциальных клиентов</b>
            <br />
            Точечная настройка, то есть можно настроиться именно на ту
            аудиторию, которая вам нужно по: полу, возрасту, гео локации (дом,
            работа), уровню доходов, интересам и многое другое - или же, можно
            настроиться на на пользователей групп в ВК Ваших конкурентов. Также
            по конкретным датам и времени, когда вам это нужно.
          </li>
          <li>
            <b>Ваше видео будут смотреть полностью</b>
            <br />
            Видео реклама показывается либо 5 секунд без промотки, либо
            полностью ролик без промотки в зависимости от настроек. Поэтому
            человек увидит все, что Вы хотите ему показать.
          </li>
          <li>
            <b>30 секунд хватит, чтобы рассказать ВСЁ</b>
            <br />
            За 30 секунд можно успеть донести очень много информации о Вашем
            бизнесе, или актуальных акциях.
          </li>
          <li>
            <b>Самый популярный формат</b>
            <br />
            Видео - это самый простой способ для восприятия информации. С каждым
            годом люди предпочитают смотреть, нежели читать. Видео реклама -
            новый формат, в котором пока нет конкуренции, Ваши конкуренты с
            вероятностью 95% пока не используют этот формат рекламы.
          </li>
          <li>
            <b>Сильное воздействие на клиента</b>
            <br />
            Видео воздействует на человека в несколько раз мощнее, чем любые
            картинки и текст.
          </li>
        </ul>
      </section>
      <section className="section" id="responses">
        Отзывы
      </section>
      <section className="section" id="stages">
        Этапы работ
      </section>
      <section className="section" id="contacts">
        Контакты
      </section>
    </Layout>
  )
}

export default IndexPage
