const express  = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const peopleController = require('./controllers/people');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: true }));

const peopleRouter = express.Router();

peopleController(peopleRouter, app);

// database config
const databaseUrl = process.env.DB;
mongoose.Promise = global.Promise;

const port = process.env.PORT || 5000;

//
// Launch the server
// -----------------------------------------------------------------------------
/* eslint-disable no-console */
mongoose.connect(databaseUrl, (err) => {
  if (err) {
    console.log(`DB CONNECTION FAIL: ${err}`);
  } else {
    app.listen(port, () => {
      console.log(`The server is running at http://localhost:${port}/`);
    });
  }
});
/* eslint-enable no-console */