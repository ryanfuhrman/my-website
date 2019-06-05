import React from 'react';

import Project from './Project';
import ProjectsStyled from './styles/ProjectsStyles';

function Projects() {
  return (
    <ProjectsStyled
      className="projects"
      link="projects"
      header="Projects"
      subheader="What I've been building"
    >
      <div className="project-container">
        <Project
          className="twitch-browser project"
          owner="ryanfuhrman"
          name="twitch-browser"
          desc="An app to play with the Twitch API"
          liveLink="https://twitch-browser.ryanfuhrman.me"
          githubProjectLink="https://github.com/ryanfuhrman/twitch-browser"
          codepenLink=""
        />
        <Project
          className="markdown-viewer project"
          owner="ryanfuhrman"
          name="markdown-viewer"
          desc="A markdown playground built with React"
          githubProjectLink="https://github.com/ryanfuhrman/markdown-viewer"
          codepenLink=""
        />
        <Project
          className="my-website project"
          owner="ryanfuhrman"
          name="my-website"
          desc="Hey, that's this website! 🚀"
          githubProjectLink="https://github.com/ryanfuhrman/my-website"
          codepenLink=""
        />
        <Project
          className="calculator project"
          owner="ryanfuhrman"
          name="calculator"
          desc="A javascript calculator"
          githubProjectLink="https://github.com/ryanfuhrman/calculator"
          codepenLink="https://codepen.io/ryanfuhrman/full/jZzooK"
        />
      </div>
      <button className="more-btn">
        <a
          href="https://github.com/ryanfuhrman"
          className="link"
          target="_blank"
          without
          rel="noopener noreferrer"
        >
          Check Out the Rest
        </a>
      </button>
    </ProjectsStyled>
  );
}

export default Projects;
