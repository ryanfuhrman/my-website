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

    .social-div {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      width: 210px;
    }

    .social-links {
    }

    .social-btn {
      border: none;
      background-color: transparent;
    }

    .social-img {
      height: 40px;
      width: 40px;
      fill: blue;
    }

    .codepen svg {
      fill: blue;
      color: blue;
    }
  }
`

export default StyledHeader
