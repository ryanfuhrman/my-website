import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Books from "../components/Books"
import Projects from "../components/Projects"

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
    <Projects />
    <Books />
  </Layout>
)

export default IndexPage
