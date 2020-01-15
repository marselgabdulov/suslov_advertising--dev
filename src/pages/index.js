import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./index.scss"
// Sections
import Intro from "./sections/Intro/Intro"
import Audio from "./sections/Audio/Audio"
import AudioAdvantages from "./sections/AudioAdvantages/AudioAdvantages"
import Video from "./sections/Video/Video"
import VideoAdvantages from "./sections/VideoAdvantages/VideoAdvantages"
import Attention from "./sections/Attention/Attention"
import Stages from "./sections/Stages/Stages"
import Prices from "./sections/Prices/Prices"
import Examples from "./sections/Examples/Examples"
import Contacts from "./sections/Contacts/Contacts"

function IndexPage() {
  return (
    <Layout>
      <SEO title="Главная" />
      <Intro />
      <Audio />
      <AudioAdvantages />
      <Video />
      <VideoAdvantages />
      <Attention />
      <Stages />
      <Prices />
      <Examples />
      <Contacts />
    </Layout>
  )
}

export default IndexPage
