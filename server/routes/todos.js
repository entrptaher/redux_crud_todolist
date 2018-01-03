var express = require('express');
var router = express.Router();

/* GET todos listing. */
router.get('/', function(req, res, next) {
  res.json('respond with a resource of All todos');
});

module.exports = router;
