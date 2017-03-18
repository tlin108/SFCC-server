const express  = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: true }));

const people = [{
  "id": 1,
  "name": "Antonio",
  "favoriteCity": "Néa Ionía"
}, {
  "id": 2,
  "name": "Sandra",
  "favoriteCity": "New York"
}, {
  "id": 3,
  "name": "Harry",
  "favoriteCity": "Bom Jesus da Lapa"
}, {
  "id": 4,
  "name": "Helen",
  "favoriteCity": "New York"
}, {
  "id": 5,
  "name": "Robin",
  "favoriteCity": "Čelopek"
}, {
  "id": 6,
  "name": "Johnny",
  "favoriteCity": "New York"
}, {
  "id": 7,
  "name": "Diane",
  "favoriteCity": "Benhong"
}, {
  "id": 8,
  "name": "Victor",
  "favoriteCity": "New York"
}, {
  "id": 9,
  "name": "Ernest",
  "favoriteCity": "New York"
}, {
  "id": 10,
  "name": "Shirley",
  "favoriteCity": "New York"
}]

app.get('/', function (req, res) {
  res.send('Hello Tom!')
})

app.get('/people', function (req, res) {
  res.send(people);
})

const port = process.env.PORT || 5000;
app.listen(port, function() {
 console.log("Listening on " + port);
});