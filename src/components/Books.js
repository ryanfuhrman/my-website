import React, { Component } from "react"
import axios from "axios"
import convertToJson from "xml-js"

import Section from "./Section"
import { BooksContainer, BookStyled } from "./BooksStyles"

class Books extends Component {
  state = {
    previouslyRead: [],
  }

  componentDidMount() {
    const goodReadsKey = "Zi8QCRbyqwOEYG0CayaIw"

    axios({
      url: `https://cors-anywhere.herokuapp.com/https://www.goodreads.com/review/list/17888634.xml?key=${goodReadsKey}&shelf=read&per_page=5&sort=date_added`,
    }).then(res => {
      const bookData = convertToJson.xml2json(res.data, {
        compact: true,
        spaces: 4,
      })
      const bookDataJson = JSON.parse(bookData)
      const book = bookDataJson.GoodreadsResponse.books.book

      book.map(book => {
        const author = book.authors.author.name._text
        const title = book.title._text
        const image = book.image_url._text
        const isbn = book.isbn._text
        const link = book.link._text

        const bookInfo = {
          author,
          title,
          image,
          isbn,
          link,
        }

        return this.setState({
          previouslyRead: [...this.state.previouslyRead, bookInfo],
        })
      })
    })
  }

  render() {
    return (
      <Section header="Books" subheader="What I've been reading">
        <BooksContainer>
          {this.state.previouslyRead.map(book => (
            <React.Fragment key={book.isbn}>
              <BookStyled
                href={book.link}
                target="_blank"
                rel="noopener noreferrer"
                className="tooltip"
              >
                <img src={book.image} alt={`${book.title} by ${book.author}`} />
              </BookStyled>
            </React.Fragment>
          ))}
        </BooksContainer>
      </Section>
    )
  }
}

export default Books
