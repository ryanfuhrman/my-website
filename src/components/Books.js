import React, { Component } from "react"
import axios from "axios"
import convertToJson from "xml-js"

class CurrentlyReading extends Component {
  state = {
    author: "",
    title: "",
    image: "",
    isbn: 0,
    link: "",
    previouslyRead: [],
  }

  componentDidMount() {
    const goodReadsKey = "Zi8QCRbyqwOEYG0CayaIw"

    axios({
      url: `https://cors-anywhere.herokuapp.com/https://www.goodreads.com/review/list/17888634.xml?key=${goodReadsKey}&shelf=currently-reading`,
    }).then(res => {
      const bookData = convertToJson.xml2json(res.data, {
        compact: true,
        spaces: 4,
      })
      const bookDataJson = JSON.parse(bookData)
      // console.log(bookDataJson)
      const book = bookDataJson.GoodreadsResponse.books.book
      const author = book.authors.author.name._text
      const title = book.title._text
      const image = book.image_url._text
      const isbn = book.isbn._text
      const link = book.link._text
      // console.log(isbn)
      this.setState({
        author: author,
        title: title,
        image: image,
        isbn: isbn,
        link: link,
      })
    })

    axios({
      url: `https://cors-anywhere.herokuapp.com/https://www.goodreads.com/review/list/17888634.xml?key=${goodReadsKey}&shelf=read&per_page=4`,
    }).then(res => {
      const bookData = convertToJson.xml2json(res.data, {
        compact: true,
        spaces: 4,
      })
      const bookDataJson = JSON.parse(bookData)
      console.log(bookDataJson)
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
      <div>
        <h2>Currently Reading</h2>
        <div>
          <div>
            <a href={this.state.link} target="_blank" rel="noopener noreferrer">
              <img
                style={{ width: "125px", height: "auto" }}
                src={this.state.image}
                alt={`${this.state.title} by ${this.state.author}`}
              />
            </a>
            <p>
              {this.state.title} by {this.state.author}
            </p>
            <div>
              {this.state.previouslyRead.map(book => (
                <React.Fragment>
                  <a href={book.link} target="_blank" rel="noopener noreferrer">
                    <img
                      style={{ width: "125px", height: "auto" }}
                      src={book.image}
                      alt={`${book.title} by ${book.author}`}
                    />
                  </a>
                  <p>
                    {book.title} by {book.author}
                  </p>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CurrentlyReading
