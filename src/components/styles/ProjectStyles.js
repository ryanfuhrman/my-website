import styled from "styled-components"

const ProjectStyled = styled.div`
  width: 100%;
  max-width: 344px;
  height: 115px;
  padding: 16px;
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 8px;
  border-radius: 8px;
  position: relative;

  display: grid;
  grid-template-columns: 1fr 1fr 100px;
  grid-template-areas:
    "owner owner links"
    "name name links"
    "desc desc desc";

  :hover {
    box-shadow: rgba(0, 0, 0, 0.15) 0px 8px 16px;
    transition: box-shadow 0.3s ease-out;
    transform: scale(1.01);
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
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    a {
      width: 30px;
      height: 30px;
      margin-left: 10px;
    }
    .icon {
      width: 100%;
      height: 100%;
    }

    a:hover {
      transform: scale(1.02);
      .icon {
        transform: scale(1.05);
        transition: transform 0.3s ease-in-out;
      }
      .github {
        filter: invert(0.5) sepia(1) saturate(50) hue-rotate(250deg);
      }
    }
  }

  @media (max-width: 600px) {
    margin-bottom: 15px;
  }
`

export default ProjectStyled
