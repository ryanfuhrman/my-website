import React, { Component } from "react"
// import axios from "axios"
// import convertToJson from "xml-js"

class CurrentlyReading extends Component {
  state = {
    author: "",
    title: "",
    image: "",
    isbn: 0,
  }

  componentDidMount() {
    // const goodReadsKey = "55fwR0TWKwR7Q9ypEH3Xw"
    // // const googleKey = "AIzaSyDWUdACh9Aq_mCkbCoDxQalF4DAlXkGjPc"
    // axios({
    //   url: `https://cors-anywhere.herokuapp.com/https://www.goodreads.com/review/list/17888634.xml?key=${goodReadsKey}&shelf=currently-reading`,
    // }).then(res => {
    //   const bookData = convertToJson.xml2json(res.data, {
    //     compact: true,
    //     spaces: 4,
    //   })
    //   const bookDataJson = JSON.parse(bookData)
    //   console.log(bookDataJson.GoodreadsResponse.books)
    //   const book = bookDataJson.GoodreadsResponse.books.book
    //   const author = book.authors.author.name._text
    //   const title = book.title._text
    //   const image = book.image_url._text
    //   const isbn = book.isbn._text
    //   console.log(isbn)
    //   this.setState({
    //     author: author,
    //     title: title,
    //     image: image,
    //     isbn: isbn,
    //   })
    // })
    // .then(getBookCover(this.state.isbn))
    // const getBookCover = function(isbn) {
    //   axios({
    //     url: `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}&key=${googleKey}`,
    //   }).then(res => {
    //     // const bookCoverData = convertToJson.xml2json(res.data, {
    //     //   compact: true,
    //     //   spaces: 4,
    //     // })
    //     // const bookCoverDataJson = JSON.parse(bookCoverData)
    //     console.log(`getBookCover: `, res)
    //   })
    // }
  }
  render() {
    return (
      <div>
        <img
          src={this.state.image}
          alt={`${this.state.title} by ${this.state.author}`}
        />
        <p>
          {this.state.title} by {this.state.author}
        </p>
      </div>
    )
  }
}

export default CurrentlyReading
