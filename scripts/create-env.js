const fs = require("fs")
fs.writeFileSync(
  "./.env",
  `GATSBY_GOODREADS_KEY=${process.env.GATSBY_GOODREADS_KEY}\n`
)
