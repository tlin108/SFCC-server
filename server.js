const express  = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const peopleController = require('./controllers/people');

// app config
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: true }));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  next();
});

// Router config
const peopleRouter = express.Router();
peopleController(peopleRouter, app);

// database config
const databaseUrl = process.env.DB;
const port = process.env.PORT || 5000;

//
// Launch the server
// -----------------------------------------------------------------------------
mongoose.connect(databaseUrl, (err) => {
  if (err) {
    console.log(`DB CONNECTION FAIL: ${err}`);
  } else {
    app.listen(port, () => {
      console.log(`The server is running at http://localhost:${port}/`);
    });
  }
});