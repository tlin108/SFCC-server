var Peoples = require('../models/people');

module.exports = function(router, app) {

  router.route('/people')
    // return the list of people
    .get(function (req, res) {
      Peoples.find({}).
        sort({ createdAt: -1 }).
        exec(function(err, people){
          if(err)
            throw err;
          res.json(people);
        }); 
    })
    // add new person to the list of people
    .post(function (req, res) {
      var newPeople = new Peoples({
        name: req.body.name,
        favoriteCity: req.body.favoriteCity
      });
      newPeople.save(function(err){
        if(err)
          throw err;
        res.json(newPeople);    
      });
    })
    // update the person with given ID
    .put(function (req, res) {
      Peoples.update({
        _id: req.body._id
      }, {
        favoriteCity: req.body.favoriteCity
      }, function(err){
        if(err)
          throw err;
        res.send('Updated Person with Id ' + req.body._id);
      })
    });

  router.route('/people/:id')
    // return the person with given id
    .get(function (req, res) {
      Peoples.findById({
        _id: req.params.id
      }, function (err, people){
        if(err)
          throw err;
        res.json(people);
      })
    })
    // delete the person with given id
    .delete(function (req, res) {
      Peoples.remove({
        _id: req.params.id
      }, function(err){
        if(err)
          throw err;
        res.send("Deleted Person with Id " + req.params.id);
      })
    });

  app.use('/api', router);

  // error route handling
  app.get('*', function (req, res) {
    res.send('You got the wrong route, please check again!');
  });
}