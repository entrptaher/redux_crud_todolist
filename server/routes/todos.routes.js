/* eslint-env node, mocha */


let express = require('express');
let router = express.Router();

router.get('/', (req, res, next) => {
	// GET a list of all todos
	res.json('READ an index of all current todos');
});

router.get('/new',(req, res, next) => {
	// Get a form for a new todo
	res.send("The Todos GET NEW route")
});

router.post('/',(req, res, next) => {
	// Post a new todo item
	res.json('Hitting the "/todos" POST route');
});


// router.post('/',(req, res, next) => {
// 	// Post a new todo item
// 	res.send("The Todos POST route")
// });

// router.post('/',(req, res, next) => {
// 	// Post a new todo item
// 	res.send("The Todos POST route")
// });

// router.post('/',(req, res, next) => {
// 	// Post a new todo item
// 	res.send("The Todos POST route")
// });

// router.post('/',(req, res, next) => {
// 	// Post a new todo item
// 	res.send("The Todos POST route")
// });

// router.post('/',(req, res, next) => {
// 	// Post a new todo item
// 	res.send("The Todos POST route")
// });

module.exports = router;
