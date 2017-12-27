var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/api', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.send("Welcome to the React-Redux Todo experiment API")
});

module.exports = router;
