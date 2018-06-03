var express = require('express')
var app = express()



app.set('view engine', 'pug')
app.set('views', __dirname + '/views');
//app.use(express.static(__dirname, 'public'));
app.use(express.static('public'))

app.get('/', function (req, res) {
  res.render('index.pug')
})

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})
