const express  = require('express');
const bodyParser = require('body-parser');

const peopleController = require('./controllers/people');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: true }));

const peopleRouter = express.Router();

peopleController(peopleRouter, app);

const port = process.env.PORT || 5000;
app.listen(port, function() {
 console.log("Listening on " + port);
});