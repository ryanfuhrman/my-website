import React, { Component } from "react"

import { BooksContainer, BookStyled } from "./BooksStyles"

class BookList extends Component {
  state = {
    books: [],
  }

  componentDidMount() {
    this.setState({
      books: this.props.previouslyRead,
    })
    window.addEventListener("resize", this.updateBookList)
  }

  updateBookList = () => {
    if (window.innerWidth < 710) {
      this.setState({
        books: this.state.previouslyRead.slice(0, 3),
      })
    } else {
      this.setState({
        books: this.state.previouslyRead,
      })
    }
  }

  render() {
    return (
      <div>
        <h2>Currently Reading</h2>
        <BooksContainer>
          <BookStyled
            href={this.props.booklist.link}
            target="_blank"
            rel="noopener noreferrer"
            className="tooltip"
          >
            <span className="tooltiptext">
              {this.props.booklist.title} by {this.props.booklist.author}
            </span>
            <img
              src={this.props.booklist.image}
              alt={`${this.props.title} by ${this.props.booklist.author}`}
            />
          </BookStyled>
          {/* <div>
            {this.state.books.map(book => (
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
                  <img
                    src={book.image}
                    alt={`${book.title} by ${book.author}`}
                  />
                </BookStyled>
              </React.Fragment>
            ))}
          </div> */}
        </BooksContainer>
      </div>
    )
  }
}

export default BookList
