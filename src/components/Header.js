import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import { throttle } from "throttle-debounce"

import StyledHeader from "./styles/HeaderStyles"
import Github from "../images/github.svg"
import LinkedIn from "../images/linkedin.svg"
import Email from "../images/email.svg"

export default function Header({ siteTitle }) {
  const [showHeaderShadow, setHeaderShadow] = useState(false)

  function handleScroll() {
    const headerShadowState = window && window.pageYOffset > 0
    setHeaderShadow(headerShadowState)
  }

  const throttleScroll = throttle(300, handleScroll)

  useEffect(() => {
    if (window) {
      window.addEventListener("scroll", throttleScroll)
    }
    return () => {
      if (window) {
        window.removeEventListener("scroll", throttleScroll)
      }
    }
  }, [])

  return (
    <StyledHeader showHeaderShadow={showHeaderShadow}>
      <div className="left">
        <h1>
          <Link to="#" className="home">
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
              <img
                src={LinkedIn}
                alt="linkedin"
                className="social-img linkedin"
              />
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
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
