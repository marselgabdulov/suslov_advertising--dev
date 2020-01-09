import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="section" id="intro">
      Интро
    </section>
    <section className="section" id="decisions">
      Решения
    </section>
    <section className="section" id="about">
      О компании
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

export default IndexPage
