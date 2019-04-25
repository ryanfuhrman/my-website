import styled from "styled-components"

const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "left right";
  position: fixed;
  height: 100px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  padding: 16px;
  background: rgb(246, 247, 248);

  .left {
    grid-area: left;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .left h1 {
    display: flex;
    align-items: center;
  }
  .left h1 link {
    color: black;
    text-decoration: none;
    font-size: 22px;
  }

  .right {
    grid-area: right;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;

    .social-links {
      display: flex;
      flex-direction: row;

      a button {
        border: none;
      }

      a button img {
        background-color: white;
        width: 30px;
        height: 30px;
      }
    }
  }
`

export default StyledHeader
