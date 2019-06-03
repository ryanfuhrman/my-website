/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import Header from './Header';
import './styles/layout.css';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 50px);

  main {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding-top: 65px;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 50px;
    width: 100%;
    max-width: 768px;
  }
`;

const Footer = styled.footer`
  height: 50px;
  display: flex;
  align-items: center;
  padding-left: 20px;
`;

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <MainContainer>
          <main>{children}</main>
        </MainContainer>
        <Footer>{new Date().getFullYear()}, No Copyright :)</Footer>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
