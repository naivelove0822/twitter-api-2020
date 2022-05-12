if(process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const express = require('express')
const routes = require('./routes')
const { getUser } = require('./_helpers')

const app = express()
const port = 3000

app.use(express.urlencoded({ extended: true }))

app.use((req, res, next) => {
  res.locals.loginUser = getUser(req)
  next()
})

app.use('/api', routes)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

module.exports = app
