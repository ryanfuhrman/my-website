import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CurrentlyReading from "../components/CurrentlyReading"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[
        `ryan`,
        `fuhrman`,
        `ryan fuhrman`,
        `front-end`,
        `react developer`,
        `react`,
      ]}
    />
    <CurrentlyReading />
  </Layout>
)

export default IndexPage
