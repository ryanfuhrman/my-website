import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import About from '../components/About';
import Books from '../components/Books';
import Projects from '../components/Projects';

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
    <About />
    <Projects />
    <Books />
  </Layout>
);

export default IndexPage;
