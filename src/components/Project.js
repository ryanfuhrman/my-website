import React from "react"

import { ProjectStyled } from "./ProjectsStyles.js"
import GithubLogo from "../images/github.png"
import CodePen from "../images/codepen.png"

function Project(props) {
  return (
    <ProjectStyled>
      <p className="owner">{props.owner}</p>
      <p className="name">{props.name}</p>
      <p className="desc">{props.desc}</p>
      <div className="links">
        <a className="github" href={props.githubLink}>
          <img src={GithubLogo} alt="Github" />
        </a>
        {props.codepenLink && (
          <a className="codepen" href={props.codepenLink}>
            <img src={CodePen} alt="CodePen" />
          </a>
        )}
      </div>
    </ProjectStyled>
  )
}

export default Project
