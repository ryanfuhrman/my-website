import styled from "styled-components"

const BooksContainer = styled.div`
  display: flex;
  flex-direction: row;
`

/* Tooltip container */
const BookStyled = styled.a`
  position: relative;
  display: inline-block;
  padding: 5px;
  margin: 0;

  /* Tooltip text */
  .tooltiptext {
    visibility: hidden;
    width: 120px;
    background-color: #555;
    color: #fff;
    text-align: center;
    padding: 5px 0;
    border-radius: 6px;

    /* Position the tooltip text */
    position: absolute;
    z-index: 1;
    bottom: 103%;
    left: 50%;
    margin-left: -60px;

    /* Fade in tooltip */
    opacity: 0;
    transition: opacity 0.3s;
  }

  /* Tooltip arrow */
  .tooltiptext::after {
    /* content: ""; */
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #555 transparent transparent transparent;
  }

  /* Show the tooltip text when you mouse over the tooltip container */
  :hover .tooltiptext {
    visibility: visible;
    opacity: 1;
  }

  img {
    margin: 0;
    width: 120px;
    height: 181.22px;
    border-radius: 5px;
  }
`

export { BooksContainer, BookStyled }
