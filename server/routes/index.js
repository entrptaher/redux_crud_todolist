var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/api', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  var Todo = new Todo({task:"test task"})
  console.log(Todo)
  // res.send("Welcome to MY React-Redux Todo experiment API")
});

module.exports = router;
