var express  = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: true }));

app.get('/', function (req, res) {
  res.send('Hello Tom!')
})

var port = process.env.PORT || 5000;
app.listen(port, function() {
 console.log("Listening on " + port);
});