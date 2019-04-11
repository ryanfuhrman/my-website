import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Books from "../components/Books"
import CurrentlyBuilding from "../components/CurrentlyBuilding"

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
    <CurrentlyBuilding />
    <Books />
  </Layout>
)

export default IndexPage
