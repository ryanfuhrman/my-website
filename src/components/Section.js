import React from "react"

function Section(props) {
  return (
    <>
      <h2>{props.header}</h2>
      <h3>{props.subheader}</h3>
      <div>{props.children}</div>
    </>
  )
}

export default Section
