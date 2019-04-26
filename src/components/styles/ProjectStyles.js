import styled from 'styled-components'

const ProjectStyled = styled.div`
  width: 100%;
  max-width: 344px;
  height: 115px;
  padding: 16px;
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 8px;
  border-radius: 8px;

  display: grid;
  grid-template-columns: 1fr 1fr 100px;
  grid-template-areas:
    "owner owner links"
    "name name links"
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
      margin-left: 5px;
    }
  }
`

export default ProjectStyled