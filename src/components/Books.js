import React, { Component } from "react"
import axios from "axios"
import convertToJson from "xml-js"

import BookList from "./BookList"

class Books extends Component {
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
      url: `https://cors-anywhere.herokuapp.com/https://www.goodreads.com/review/list/17888634.xml?key=${goodReadsKey}&shelf=read&per_page=4&sort=date_read`,
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
          previouslyRead: [bookInfo, ...this.state.previouslyRead],
        })
      })
    })
  }

  render() {
    return (
      <BookList
        booklist={this.state}
        previouslyRead={this.state.previouslyRead}
      />
    )
  }
}

export default Books
