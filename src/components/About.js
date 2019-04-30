import React from "react"
import styled from "styled-components"

import Section from "./Section"

const AboutStyled = styled.div`
  p {
    font-size: 18px;
    line-height: 1.5;
    margin: 10px 0;
  }
`

const About = () => (
  <Section header="About Me">
    <AboutStyled>
      <p>
        Hi{" "}
        <span role="img" aria-label="Wave">
          👋
        </span>
        , I'm a self-taught front-end developer looking an opportunity to join a
        team and continue to grow my skills.
      </p>
      <p>
        I really enjoy building things with React, but I'm willing and hungry to
        learn new things.
      </p>
      <p>
        I'd love to hear from you! Please feel free to shoot me an{" "}
        <a href="mailto:rsfuhrman10@gmail.com">email</a> or message me on{" "}
        <a href="https://www.linkedin.com/in/ryan-fuhrman-98897bb0/">
          linkedin
        </a>
        .
      </p>
    </AboutStyled>
  </Section>
)

export default About
