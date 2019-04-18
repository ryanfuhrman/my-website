import styled from "styled-components"

const ProjectsContainer = styled.div`
  padding: 0;
  margin: 0;
  max-width: 1000px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    "div div"
    "div div";
`

const ProjectStyled = styled.div`
  border: 1px solid black;
  height: 150px;
  max-width: 400px;
  padding: 10px 15px;
  
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

    a img {
      width: 40px;
      height: auto;
    }
  }
`

export { ProjectsContainer, ProjectStyled }
