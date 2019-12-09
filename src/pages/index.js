import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Coffee from '../components/coffee';
import Weather from '../components/weather';
import News from '../components/news';

import './index.scss';

const IndexPage = () => (
  <Layout className="home">
    <SEO title="The Loft - 823 Francis" />
    <div className="column home__left">
      <div className="home__left__coffee">
        <Coffee />
      </div>
      <div className="home__left__weather">
        <Weather />
      </div>
    </div>
    <div className="column home__right">
      <News />
    </div>
  </Layout>
)

export default IndexPage
