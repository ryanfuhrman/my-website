const fs = require("fs")
fs.writeFileSync("./.env", `API_KEY=${process.env.GOODREADS_KEY}\n`)
