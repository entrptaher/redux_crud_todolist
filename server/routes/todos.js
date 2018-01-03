var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	// GET a list of all todos
  res.json('respond with a resource of All todos');
});

module.exports = router;
