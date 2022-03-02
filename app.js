const express = require('express')
const path = require('path')
const { db } = require('./DB')
// const dataFromDBFile = require('./DB')
// const db = dataFromDBFile.db

const PORT = 3000

const server = express()

server.set('view engine', 'hbs')
server.set('views', path.join(__dirname, 'src', 'views'))


server.use(express.urlencoded({ extended: true }))

server.get('/', (request, response) => {
  
  if (usersQuery.limit !== undefined && Number.isNaN(+usersQuery.limit) === false) {
    photosForRender = db.photos.slice(0, usersQuery.limit)
  }

  response.render('main', { listOfPhotos: photosForRender })
})
const usersQuery = request.query // = { limit: '1' }
  let photosForRender = db.photos

  if (usersQuery.limit !== undefined && Number.isNaN(+usersQuery.limit) === false) {
    photosForRender = db.photos.slice(0, usersQuery.limit)
  }

  response.render('main', { listOfPhotos: photosForRender })
})

const usersQuery = request.query // = { reverse: '1' }
  let photosForRender = db.photos

  if (usersQuery.reverse !== undefined && Number.isNaN(+usersQuery.reverse) === true) {
    photosForRender = db.photos.slice(0, usersQuery.reverce)
  }

  response.redirect("main", {listOfPhotos : photosForRender + photosForRender})
})
server.post('/addressbook', (req, res) => {
  const dataFromForm = req.body

  db.photos.push(dataFromForm)

  res.redirect('/')
})

server.get('*', (req, res) => {
  res.render('404')
})

server.listen(PORT, () => {
  console.log(`Server has been started on port: ${PORT}`)
})
