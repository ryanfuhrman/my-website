import styled from "styled-components"

const BooksContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  max-width: 800px;
`

/* Tooltip container */
const BookStyled = styled.a`
  /* position: relative;
  display: inline-block;
  padding: 5px;
  margin: 0; */
  img {
    margin: 0;
    width: 128px;
    height: 196px;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 8px;
  }
`

export { BooksContainer, BookStyled }
