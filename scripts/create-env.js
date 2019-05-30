const fs = require("fs")
fs.writeFileSync("./.env", `GOODREADS_KEY=${process.env.GOODREADS_KEY}\n`)
