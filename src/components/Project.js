import React from "react"

import { ProjectStyled } from "./styles/ProjectsStyles.js"
import Github from "../images/github.svg"
import CodePen from "../images/codepen.svg"

function Project(props) {
  return (
    <ProjectStyled>
      <p className="owner">{props.owner}</p>
      <p className="name">{props.name}</p>
      <p className="desc">{props.desc}</p>
      <div className="links">
        {props.codepenLink && (
          <a className="codepen" href={props.codepenLink}>
            <img src={CodePen} alt="CodePen" />
          </a>
        )}
        <a className="github" href={props.githubLink}>
          <img src={Github} alt="Github" />
        </a>
      </div>
    </ProjectStyled>
  )
}

export default Project
