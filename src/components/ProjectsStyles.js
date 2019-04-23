import styled from "styled-components"

const ProjectsContainer = styled.div`
  max-width: 100%;

  display: grid;
  grid-template-rows: auto;
  grid-gap: 16px;
  grid-template-areas:
    "twitch-app markdown-viewer"
    "my-website calculator";

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

const ProjectStyled = styled.div`
  height: 125px;
  width: 380px;
  padding: 16px;
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 8px;
  border-radius: 8px;

  display: grid;
  grid-template-columns: 1fr 1fr 100px;
  grid-template-rows: auto;
  grid-template-areas:
    "owner owner links"
    "name name name"
    "desc desc desc";

  .owner {
    grid-area: owner;
  }

  .name {
    grid-area: name;
    font-weight: bold;
  }

  .desc {
    grid-area: desc;
  }

  .links {
    grid-area: links;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    a img {
      width: 40px;
      /* height: auto; */
      margin-left: 5px;
    }
  }
`

export { ProjectsContainer, ProjectStyled }
