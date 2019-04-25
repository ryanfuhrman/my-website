import styled from "styled-components"

const BooksContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 128px);
  grid-gap: 16px;
  max-width: 100%;
`

/* Tooltip container */
const BookStyled = styled.a`
  img {
    margin: 0;
    width: 128px;
    height: 196px;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 8px;
  }
`

export { BooksContainer, BookStyled }
