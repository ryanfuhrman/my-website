import React from "react"
import styled from "styled-components"

const StyledDiv = styled.div`
  max-width: 704px;
  margin-top: 40px;
  margin-bottom: 35px;
  width: 100%;

  h2 {
    margin-bottom: 10px;
    font-size: 24px;
  }

  h3 {
    margin-bottom: 25px;
    font-size: 18px;
    color: slategray;
    font-weight: normal;
  }
`

function Section(props) {
  return (
    <StyledDiv>
      <h2>{props.header}</h2>
      <h3>{props.subheader}</h3>
      <div>{props.children}</div>
    </StyledDiv>
  )
}

export default Section
