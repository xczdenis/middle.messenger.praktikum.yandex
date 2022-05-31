const express = require('express')
const dotenv = require('dotenv')
const path = require('path')

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.static('./dist/'))
app.use((req, res) => {
  res.sendFile(path.join(__dirname, '.', 'dist', 'index.html'))
})

console.log(`process.env.PORT = ${process.env.PORT}`)

app.listen(PORT, function () {
  console.log(`App listening on port ${PORT}!`)
})
