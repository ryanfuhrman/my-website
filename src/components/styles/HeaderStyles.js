import styled from "styled-components"

const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "left right";
  position: fixed;
  height: 65px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 3;
  padding: 16px;
  font-size: 22px;

  background: ${props => (props.showHeaderShadow ? "#FFF" : "#F6F7F8")};
  box-shadow: ${props =>
    props.showHeaderShadow ? "0 4px 8px rgba(0,0,0,0.04)" : "none"};
  transition: all 0.2s ease-in-out;

  .left {
    grid-area: left;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    h1 {
      display: flex;
      align-items: center;
    }

    .home {
      color: black;
      text-decoration: none;
      font-size: 24px;
    }
  }

  .right {
    grid-area: right;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    .social-div {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;
      width: 175px;
    }

    .social-btn {
      display: flex;
      border: none;
      height: 30px;
      background-color: transparent;
      :hover {
        cursor: pointer;
      }
    }

    .social-img {
      height: 30px;
      width: 30px;

      :hover {
        transform: scale(1.08);
        transition: transform 0.3s ease-in-out;
      }
    }

    .linkedin {
      :hover {
        filter: invert(0.5) sepia(1) saturate(50) hue-rotate(180deg);
      }
    }

    .github {
      :hover {
        filter: invert(0.5) sepia(1) saturate(50) hue-rotate(250deg);
      }
    }

    .email {
      :hover {
        filter: invert(0.6) sepia(1) saturate(100) hue-rotate(15deg);
      }
    }
  }

  @media (max-width: 600px) {
    height: 60px;
    padding: 14px;

    .left .home {
      font-size: 20px;
    }
    .right {
      .social-div {
        width: 125px;
      }
      .social-btn,
      .social-links {
        height: 25px;
      }
      .social-img {
        height: 25px;
        width: 25px;
      }
    }
  }
`

export default StyledHeader
