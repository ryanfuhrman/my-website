import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import StyledHeader from "./styles/HeaderStyles"
import Github from "../images/github.svg"
import CodePen from "../images/codepen.svg"
import LinkedIn from "../images/linkedin.png"

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
      <div className="social-links">
        <a href="">
          <button>
            <img src={LinkedIn} alt="linkedin" />
          </button>
        </a>
        <a href="">
          <button>
            <img src={CodePen} alt="CodePen" />
          </button>
        </a>
        <a href="">
          <button>
            <img src={Github} alt="GitHub" />
          </button>
        </a>
      </div>
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
