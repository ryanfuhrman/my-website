import styled from "styled-components"

const ProjectsContainer = styled.div`
  max-width: 1000px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    "div div"
    "div div";
`

const ProjectStyled = styled.div`
  max-width: 400px;
  display: grid;
  grid-template-columns: 1fr 1fr 50px;
  grid-template-rows: auto;
  grid-template-areas:
    "owner owner links"
    "name name links"
    "desc desc desc"
  }

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
  }
`

export { ProjectsContainer, ProjectStyled }
