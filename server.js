import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.static('./dist/'))

console.log(`process.env.PORT = ${process.env.PORT}`)

app.listen(PORT, function () {
  console.log(`App listening on port ${PORT}!`)
})
