import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import StyledHeader from "./styles/HeaderStyles"
import Github from "../images/github.svg"
import CodePen from "../images/codepen.svg"
import LinkedIn from "../images/linkedin.svg"
import Email from "../images/email.svg"

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
      <div className="social-div">
        <a
          href="https://www.linkedin.com/in/ryan-fuhrman-98897bb0/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-links"
        >
          <button className="social-btn">
            <img src={LinkedIn} alt="linkedin" className="social-img linkedin" />
          </button>
        </a>
        <a
          href="https://github.com/ryanfuhrman"
          target="_blank"
          rel="noopener noreferrer"
          className="social-links"
        >
          <button className="social-btn">
            <img src={Github} alt="GitHub" className="social-img github" />
          </button>
        </a>
        <a href="mailto:rsfuhrman10@gmail.com" className="social-links">
          <button className="social-btn">
            <img src={Email} alt="Email" className="social-img email" />
          </button>
        </a>
      </div>
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
