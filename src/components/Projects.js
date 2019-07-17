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
          className="todo project"
          owner="ryanfuhrman"
          name="todo"
          desc="A todo list built with React"
          liveLink="https://todo.ryanfuhrman.me"
          githubProjectLink="https://github.com/ryanfuhrman/react-todo"
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
      </div>

      <a
        href="https://github.com/ryanfuhrman"
        className="link"
        target="_blank"
        without
        rel="noopener noreferrer"
      >
        <button className="more-btn">Check Out the Rest</button>
      </a>
    </ProjectsStyled>
  );
}

export default Projects;
