import React from "react"
import styled from "styled-components"

const StyledDiv = styled.div`
  width: 775px;
  margin-bottom: 75px;

  h2 {
    margin-bottom: 10px;
  }

  h3 {
    margin-bottom: 25px;
    font-size: 20px;
    color: lightslategray;
  }

  div {
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
