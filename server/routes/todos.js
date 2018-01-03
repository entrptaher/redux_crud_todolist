let express = require('express');
let router = express.Router();

router.get('/', (req, res, next) => {
	// GET a list of all todos
  res.json('The Todos GET route');
});


router.post('/',(req, res, next) => {
	// Post a new todo item
	res.json("The Todos POST route")

});

module.exports = router;
