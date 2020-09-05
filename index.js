const express = require('express')
const bodyParser = require('body-parser')
const usersRouter = require('./routes/usersRoutes.js')
const app = express()
const port = process.env.PORT || 4000

app.use(bodyParser.json())

app.use('/users', usersRouter)

app.get('/', (req, res) => res.send('hey clayton, finally grading this huh? :P ')) 

app.listen(port, () => {
  console.log('app is listening on:', port)
})