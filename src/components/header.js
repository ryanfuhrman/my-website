import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "left right";
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 2;
  padding: 16px;
  background: rgb(246, 247, 248);

  .left {
    grid-area: left;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .left h1 {
    display: flex;
    align-items: center;
  }
  .left h1 link {
    color: black;
    text-decoration: none;
    font-size: 22px;
  }

  .right {
    grid-area: right;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <div className="left">
      <h1>
        <Link
          to="/"
          style={{
            color: `black`,
            textDecoration: `none`,
            fontSize: `22px`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    <div className="right">
      <a href="mailto:rsfuhrman10@gmail.com">
        <button>Email</button>
      </a>
    </div>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
