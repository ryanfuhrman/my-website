import styled from "styled-components"

const BooksContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 128px);
  grid-gap: 16px;
  max-width: 100%;
`

/* Tooltip container */
const BookStyled = styled.a`
  position: relative;
  width: 128px;
  height: 196px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 8px 16px;

  img {
    margin: 0;
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }

  :hover {
    box-shadow: rgba(0, 0, 0, 0.3) 0px 10px 25px;
    transition: box-shadow 0.3s ease-out;
    transform: scale(1.01);
  }
`

export { BooksContainer, BookStyled }
