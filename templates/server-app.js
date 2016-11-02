'use strict'

var express = require('express')
var app = express()
var path = require('path')
app.use(express.static(path.join(__dirname, './public')))

var bodyParser = require('body-parser')
app.use(bodyParser.json())

var index = require('./routes/index')
app.use('/', index)

var server = app.listen(3000, function() {
  var port = server.address().port
  console.log('Listening on port: ', port)
})

module.exports = app
