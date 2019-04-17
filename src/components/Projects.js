import React from "react"

import { ProjectsContainer, ProjectStyled } from "./ProjectsStyles"

function Projects() {
  return (
    <div>
      <h2>Projects</h2>
      <h3>What I've been building</h3>
      <ProjectsContainer>
        <ProjectStyled>
          <p className="owner">ryanfuhrman</p>
          <p className="name">twitch-app</p>
          <p className="desc">An app to play with the Twitch API</p>
          <div className="links">
            <a
              className="github"
              href="https://github.com/ryanfuhrman/twitch-app"
            >
              github
            </a>
          </div>
        </ProjectStyled>
        <ProjectStyled>
          <p className="owner">ryanfuhrman</p>
          <p className="name">markdown-viewer</p>
          <p className="desc">A markdown playground built with React</p>
          <div className="links">
            <a
              className="github"
              href="https://github.com/ryanfuhrman/markdown-viewer"
            >
              github
            </a>
          </div>
        </ProjectStyled>
        <ProjectStyled>
          <p className="owner">ryanfuhrman</p>
          <p className="name">flexboxTechnicalDocs</p>
          <p className="desc">Technical Documentation for Flexbox</p>
          <div className="links">
            <a
              className="github"
              href="https://github.com/ryanfuhrman/flexboxTechnicalDocs"
            >
              github
            </a>
            <a
              className="codepen"
              href="https://codepen.io/ryanfuhrman/full/YjpZyp"
            >
              codepen
            </a>
          </div>
        </ProjectStyled>
        <ProjectStyled>
          <p className="owner">ryanfuhrman</p>
          <p className="name">calculator</p>
          <p className="desc">A javascript calculator</p>
          <div className="links">
            <a
              className="github"
              href="https://github.com/ryanfuhrman/calculator"
            >
              github
            </a>
            <a
              className="codepen"
              href="https://codepen.io/ryanfuhrman/full/jZzooK"
            >
              codepen
            </a>
          </div>
        </ProjectStyled>
      </ProjectsContainer>
    </div>
  )
}

export default Projects
