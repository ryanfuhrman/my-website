import React from "react"
import styled from "styled-components"

import Section from "./Section"

const AboutStyled = styled(Section)`
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  h2 {
    animation: fadeIn 1.5s;
  }

  p {
    font-size: 18px;
    line-height: 1.5;
    margin: 10px 0;
    animation: fadeIn 1.5s 0.25s backwards;
  }
`

const About = () => (
  <AboutStyled header="About Me" className="about-styled">
    <p>
      Hi{" "}
      <span role="img" aria-label="Wave">
        👋
      </span>
      , I'm a self-taught front-end developer looking for an opportunity to join
      a team and continue to grow my skills.
    </p>
    <p>
      I really enjoy building things with React, but I'm willing and hungry to
      learn new things.
    </p>
    <p>
      I'd love to hear from you! Please feel free to shoot me an{" "}
      <a href="mailto:rsfuhrman10@gmail.com">email</a> or message me on{" "}
      <a href="https://www.linkedin.com/in/ryan-fuhrman-98897bb0/">linkedin</a>.
    </p>
  </AboutStyled>
)

export default About
