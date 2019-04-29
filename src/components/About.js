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
    </AboutStyled>
  </Section>
)

export default About
