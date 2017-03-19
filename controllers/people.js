var Peoples = require('../models/people');

module.exports = function(router, app) {

  router.get('/', function (req, res) {
    res.send('Hello Tom!')
  });

  // display the list of people
  router.get('/people', function (req, res) {
    Peoples.find({}).
      sort({ createdAt: -1 }).
      exec(function(err, people){
        if(err)
          throw err;
        res.json(people);
      });  
  });

  // add new person to the list of people
  router.post('/people', function (req, res) {
    var newPeople = new Peoples({
      name: req.body.name,
      favoriteCity: req.body.favoriteCity
    });
    newPeople.save(function(err){
      if(err)
        throw err;
      res.json(newPeople);    
    });
  });

  // update the person with given ID from the list of people
  router.put('/people', function (req, res) {
    Peoples.update({
      _id: req.body._id
    }, {
      favoriteCity: req.body.favoriteCity
    }, function(err){
      if(err)
        throw err;
      res.send('Updated User with Id ' + req.body._id);
    })
  });

  // get a person's info with given id
  router.get('/people/:id', function (req, res) {
    Peoples.findById({
      _id: req.params.id
    }, function (err, people){
      if(err)
        throw err;
      res.json(people);
    }) 
  });

  // delete a person's info with given id
  router.delete('/people/:id', function (req, res) {
    Peoples.remove({
      _id: req.params.id
    }, function(err){
      if(err)
        throw err;
      res.send("Delete People with Id " + req.params.id);
    })
  });

  app.use('/api', router);
}