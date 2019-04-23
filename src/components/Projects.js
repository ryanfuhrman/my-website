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
      </ProjectsContainer>
    </div>
  )
}

export default Projects
