var express = require('express')
var main = require('./routes/main')
var app = express()


app.use(express.static(__dirname +"/public"));

app.use('/', main);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
