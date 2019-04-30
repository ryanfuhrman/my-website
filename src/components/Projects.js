import React from "react"

import Section from "./Section"
import Project from "./Project"
import ProjectsStyled from "./styles/ProjectsStyles"

function Projects() {
  return (
    <ProjectsStyled header="Projects" subheader="What I've been building">
      <div className="project-container">
        <Project
          className="twitch-app"
          owner="ryanfuhrman"
          name="twitch-app"
          desc="An app to play with the Twitch API"
          githubLink="https://github.com/ryanfuhrman/twitch-app"
          codepenLink=""
        />
        <Project
          className="markdown-viewer"
          owner="ryanfuhrman"
          name="markdown-viewer"
          desc="A markdown playground built with React"
          githubLink="https://github.com/ryanfuhrman/markdown-viewer"
          codepenLink=""
        />
        <Project
          className="my-website"
          owner="ryanfuhrman"
          name="my-website"
          desc="Hey, that's this website! 🚀"
          githubLink="https://github.com/ryanfuhrman/my-website"
          codepenLink=""
        />
        <Project
          className="calculator"
          owner="ryanfuhrman"
          name="calculator"
          desc="A javascript calculator"
          githubLink="https://github.com/ryanfuhrman/calculator"
          codepenLink="https://codepen.io/ryanfuhrman/full/jZzooK"
        />
      </div>
    </ProjectsStyled>
  )
}

export default Projects
