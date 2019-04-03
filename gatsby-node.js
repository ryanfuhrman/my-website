// const axios = require("axios")
// const crypto = require("crypto")
// const convertToJson = require("xml-js")

// exports.sourceNodes = async ({ actions }) => {
//   const { createNode } = actions
//   const goodReadsKey = "55fwR0TWKwR7Q9ypEH3Xw"

//   // fetch raw data from the randomuser api
//   const fetchCurrentlyReading = () =>
//     axios({
//       url: `https://www.goodreads.com/review/list/17888634.xml?key=${goodReadsKey}&shelf=currently-reading`,
//     }).then(res => {
//       const bookData = convertToJson.xml2json(res.data, {
//         compact: true,
//         spaces: 4,
//       })

//       return JSON.parse(bookData)
//     })

//   const res = await fetchCurrentlyReading()

//   // console.log(res.GoodreadsResponse.books)
//   // map into these results and create nodes
//   const book = res.GoodreadsResponse.books
//   const convertedToArray = Object.keys(book).map(key => {
//     return [key, book[key]]
//   })

//   console.log(convertedToArray)

//   convertedToArray.map((book, i) => {
//     // Create your node object
//     const bookNode = {
//       // Required fields
//       id: `${i}`,
//       parent: `__SOURCE__`,
//       internal: {
//         type: `Book`, // name of the graphQL query --> allRandomUser {}
//         // contentDigest will be added just after
//         // but it is required
//       },
//       children: [],

//       // Other fields that you want to query with graphQl
//       book: {
//         title: book.title,
//         author: book.authors,
//         image: book.image_url,
//         isbn: book.isbn,
//       },
//     }

//     // Get content digest of node. (Required field)
//     const contentDigest = crypto
//       .createHash(`md5`)
//       .update(JSON.stringify(bookNode))
//       .digest(`hex`)
//     // add it to bookNode
//     bookNode.internal.contentDigest = contentDigest

//     // Create node with the gatsby createNode() API
//     createNode(bookNode)
//   })

//   return
// }
