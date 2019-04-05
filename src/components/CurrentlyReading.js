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
  }

  componentDidMount() {
    const goodReadsKey = "55fwR0TWKwR7Q9ypEH3Xw"

    axios({
      url: `https://cors-anywhere.herokuapp.com/https://www.goodreads.com/review/list/17888634.xml?key=${goodReadsKey}&shelf=currently-reading`,
    }).then(res => {
      const bookData = convertToJson.xml2json(res.data, {
        compact: true,
        spaces: 4,
      })
      const bookDataJson = JSON.parse(bookData)
      console.log(bookDataJson.GoodreadsResponse.books)
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

      if (image === "") this.updateCover(isbn)
    })
  }

  updateCover(isbn) {
    axios({
      url: `https://www.googleapis.com/books/v1/volumes?q=isbn:038553504X&key=AIzaSyDWUdACh9Aq_mCkbCoDxQalF4DAlXkGjPc`,
    }).then(res => {
      if (res.data.items[0].volumeInfo.imageLinks.thumbnail) {
        this.setState({
          image: res.data.items[0].volumeInfo.imageLinks.thumbnail,
          imageFromGoogle: true,
        })
      }
    })
  }

  render() {
    return (
      <div>
        <h2>Currently Reading</h2>
        <a href={this.state.link} target="_blank" rel="noopener noreferrer">
          <img
            style={{ width: "100px", height: "auto" }}
            src={this.state.image}
            alt={`${this.state.title} by ${this.state.author}`}
          />
        </a>
        <p>
          {this.state.title} by {this.state.author}
        </p>
      </div>
    )
  }
}

export default CurrentlyReading
