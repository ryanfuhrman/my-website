import React, { Component } from "react"
import axios from "axios"
import convertToJson from "xml-js"

import { BooksContainer, BookStyled } from "./BooksStyles"

class Books extends Component {
  state = {
    previouslyRead: [],
  }

  componentDidMount() {
    const goodReadsKey = "Zi8QCRbyqwOEYG0CayaIw"

    axios({
      url: `https://cors-anywhere.herokuapp.com/https://www.goodreads.com/review/list/17888634.xml?key=${goodReadsKey}&shelf=read&per_page=4&sort=date_read`,
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
          previouslyRead: [bookInfo, ...this.state.previouslyRead],
        })
      })
    })
  }

  render() {
    return (
      <div>
        <h2>Books</h2>
        <h3>What I've been reading</h3>
        <BooksContainer>
          {this.state.previouslyRead.map(book => (
            <React.Fragment key={book.isbn}>
              <BookStyled
                href={book.link}
                target="_blank"
                rel="noopener noreferrer"
                className="tooltip"
              >
                <span className="tooltiptext">
                  {book.title} by {book.author}
                </span>
                <img src={book.image} alt={`${book.title} by ${book.author}`} />
              </BookStyled>
            </React.Fragment>
          ))}
        </BooksContainer>
      </div>
    )
  }
}

export default Books
