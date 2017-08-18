const path = require('path')
const cors = require('cors')
const express = require('express')
const bodyParser = require('body-parser')

const server = express()

server.use(cors())
server.use(bodyParser.urlencoded({ extended: true}));
server.use(bodyParser.json());
server.use('/images', express.static(path.join(__dirname, 'images')))
server.use('/products', (req, res) => res.json(require('./db.json')))

server.listen(3636)
