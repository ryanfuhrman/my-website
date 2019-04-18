import React from "react"

import Project from "./Project"
import { ProjectsContainer } from "./ProjectsStyles"

function Projects() {
  return (
    <div>
      <h2>Projects</h2>
      <h3>What I've been building</h3>
      <ProjectsContainer>
        <Project
          owner="ryanfuhrman"
          name="twitch-app"
          desc="An app to play with the Twitch API"
          githubLink="https://github.com/ryanfuhrman/twitch-app"
          codepenLink=""
        />
        <Project
          owner="ryanfuhrman"
          name="markdown-viewer"
          desc="A markdown playground built with React"
          githubLink="https://github.com/ryanfuhrman/markdown-viewer"
          codepenLink=""
        />
        <Project
          owner="ryanfuhrman"
          name="flexboxTechnicalDocs"
          desc="Technical Documentation for Flexbox"
          githubLink="https://github.com/ryanfuhrman/flexboxTechnicalDocs"
          codepenLink="https://codepen.io/ryanfuhrman/full/YjpZyp"
        />
        <Project
          owner="ryanfuhrman"
          name="calculator"
          desc="A javascript calculator"
          githubLink="https://github.com/ryanfuhrman/calculator"
          codepenLink="https://codepen.io/ryanfuhrman/full/jZzooK"
        />
      </ProjectsContainer>
    </div>
  )
}

export default Projects
