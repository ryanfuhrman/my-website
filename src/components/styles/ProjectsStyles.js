import styled from "styled-components"

const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 16px;
  grid-template-areas:
    "twitch-app markdown-viewer"
    "my-website calculator";
  width: 100%;

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
`

export default ProjectsContainer
