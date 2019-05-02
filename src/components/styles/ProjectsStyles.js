import styled from "styled-components"
import Section from "../Section"

const ProjectsStyled = styled(Section)`
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  h2 {
    animation: fadeIn 1.5s 0.75s backwards;
  }

  h3 {
    animation: fadeIn 1.5s 1s backwards;
  }

  .project-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 16px;
    grid-template-areas:
      "twitch-app markdown-viewer"
      "my-website calculator";
    width: 100%;
    animation: fadeIn 1.5s 1.25s backwards;

    .twitch-app {
      grid-area: twitch-app;
    }
    .markdown-viewer {
      grid-area: markdown-viewer;
    }
    .my-website {
      grid-area: my-website;
    }
    .calculator {
      grid-area: calculator;
    }
  }

  @media (max-width: 600px) {
    .project-container {
      display: flex;
      flex-direction: column;
    }
  }
`

export default ProjectsStyled
