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

var People = require('../models/people');

module.exports = function(router, app) {

  router.get('/', function (req, res) {
    res.send('Hello Tom!')
  });

  // display the list of people
  router.get('/people', function (req, res) {
    People.find({}).
      sort({ createdAt: -1 }).
      exec(function(err, posts){
        if(err)
          throw err;
        res.json(posts);
      });  
  });

  // add new person to the list of people
  router.post('/people', function (req, res) {
    var newPerson = new People({
      name: req.body.name,
      favoriteCity: req.body.favoriteCity
    });
    newPerson.save(function(err){
      if(err)
        throw err;
      res.send('Success');    
    });
  });

  // get a person's info with given id
  router.get('/people/:id', function (req, res) {
    People.findById({
      _id: req.params.id
    }, function (err, people){
      if(err)
        throw err;
      res.json(people);
    }) 
  });

  // delete a person's info with given id
  router.delete('/people/:id', function (req, res) {
    People.remove({
      _id: req.params.id
    }, function(err,post){
      if(err)
        throw err;
      res.json('Deleted!')
    })
  });

  app.use('/api', router);
}