import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./index.scss"
import IntroImage from "../images/professor.svg"
import AudioImage from "../images/audio.svg"
import VideoImage from "../images/video.svg"
import StagesImage from "../images/stages.svg"
import PricesImage from "../images/wallet.svg"
import Audio from "../components/Audio/Audio"
import Video from "../components/Video/Video"
import AudioOne from "../audio/rostok1.mp3"
import AudioTwo from "../audio/rostok2.mp3"
import VideoOne from "../video/angel8.mp4"
import VideoOneWebM from "../video/angel8.webm"
import Request from "../components/Request/Request"

function IndexPage() {
  function scrollTo(element) {
    window.scroll({
      behavior: "smooth",
      left: 0,
      top: element.offsetTop - 100,
    })
  }
  return (
    <Layout>
      <SEO title="Home" />
      <section className="intro" id="intro">
        <div className="intro__text">
          <h1>Аудио и видео реклама в социальной сети ВКонтакте</h1>
          <p>
            Пройдите тест, чтобы узнать подходит ли данная реклама для вашего
            бизнеса
          </p>
          <div className="intro__buttons">
            <button className="button orange">Тест</button>
            <button
              className="button blue"
              onClick={() => scrollTo(document.getElementById("request"))}
            >
              Оставить заявку
            </button>
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
            &laquo;вау-эффект&raquo;.
          </li>
          <li>
            <b>Как реклама на радио, только дешевле в десятки раз</b>
          </li>
          <li>
            <b>Умещает много информации о вашем предложении</b>
            <br />
            Длительность до 30-ти секунд. Можно успеть донести очень много
            информации о вашем бизнесе, или актуальных акциях.
          </li>
          <li>
            <b>Тонкая и точечная настройка на вашу потенциальную аудиторию</b>
            <br />
            Можно настроиться именно на ту аудиторию которая вам нужно по: полу,
            возрасту, гео локации (дом, работа), уровню доходов, интересам и
            многому другому - или же можно настроиться на пользователей групп в
            ВК ваших конкурентов. Также по дням недели и времени когда вам это
            нужно.
          </li>
          <li>
            <b>Слушают всё ОТ и ДО</b>
            <br />
            Аудио рекламу не промотать - поэтому человек будет слушать ваше
            рекламное предложение от и до.
          </li>
          <li>
            <b>Без конкуренции. Только вы и ваше предложение</b>
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
            поэтому после просмотра вашего видео &laquo;вау-эффект&raquo;
            обеспечен.
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
            человек увидит все, что вы хотите ему показать.
          </li>
          <li>
            <b>30 секунд хватит, чтобы рассказать ВСЁ</b>
            <br />
            За 30 секунд можно успеть донести очень много информации о вашем
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
      <div className="attention">
        <p>
          В аудио и видео рекламе можно использовать музыкальное сопровождение
        </p>
        <p>
          Оба вида рекламы для большего эффекта можно озвучить голосами
          профессиональных дикторов
        </p>
        <button
          className="button blue"
          onClick={() => scrollTo(document.getElementById("request"))}
        >
          Оставить заявку
        </button>
      </div>

      <section className="stages" id="stages">
        <div
          className="stages__image"
          style={{
            backgroundImage: `url(${StagesImage})`,
          }}
        ></div>
        <br />
        <h2 style={{ textAlign: "center" }}>Работать с нами просто</h2>
        <ul>
          <li>
            <b>
              Анализируем ваш бизнес и вместе с вами выделяем самые сильные
              стороны
            </b>
          </li>
          <li>
            <b>Анализируем ваших клиентов</b>
          </li>
          <li>
            <b>Продумываем рекламное предложение или акцию</b>
          </li>
          <li>
            <b>Пишем сценарий для аудио или видео ролика</b>
          </li>
          <li>
            <b>Работаем с диктором, заказываем, монтируем</b>
          </li>
          <li>
            <b>
              По вашему желанию, можем создать простой видео ролик бесплатно
            </b>
          </li>
          <li>
            <b>Запускаем вашу рекламу</b>
          </li>
          <li>
            <b>Следим за показателями и корректируем их в течение месяца</b>
          </li>
        </ul>
      </section>
      <section className="prices" id="prices">
        <div
          className="prices__image"
          style={{
            backgroundImage: `url(${PricesImage})`,
          }}
        ></div>
        <h2 style={{ textAlign: "center" }}>Наши цены</h2>
        <ul>
          <li>
            <b>Экономим деньги</b>
            <br />
            На этапе подготовки можем найти диктора за <b>150 - 200</b> рублей,
            сами смонтировать аудио ролик и сделать видео ролик всего за{" "}
            <b>500 - 1000</b> рублей!
          </li>
          <li>
            <b>Работаем с маленькими бюджетами</b>
            <br />
            Работаем с бюджетами на рекламу от <b>3000</b> рублей в месяц
          </li>
          <li>
            <b>Работаем по договору</b>
            <br />
            Вы не просто перечисляете деньги, а именно по договору оказания
            услуг
          </li>
          <li>
            <b>Эксклюзивность данной рекламы</b>
            <br />
            Пока ещё мало людей, использующих для продвижения своего бизнеса
            аудио и видео рекламу в ВК
          </li>
        </ul>
      </section>
      <section className="examples" id="examples">
        <h2 style={{ textAlign: "center" }}>Примеры работ</h2>
        <Audio srcMP3={AudioOne} id="audio-one" />
        <br />
        <Audio srcMP3={AudioTwo} id="audio-two" />
        <Video srcMP4={VideoOne} srcWEBM={VideoOneWebM} id="video-one" />
      </section>
      <section className="request" id="request">
        <h2>Свяжитесь с нами</h2>
        <Request />
      </section>
      <section className="contacts" id="contacts">
        Контакты
      </section>
    </Layout>
  )
}

export default IndexPage
