/* eslint-env node, mocha */

let Todos = require('../models/todo.model')

let express = require('express');
let router = express.Router();

router.get('/', (req, res, next) => {
	// GET a list of all todos
	Todos.find((err, todos) => {
		if(err){
			res.status(500).send(err)
		} else {
			res.status(200).json
			(todos)
		}
	});

});

router.get('/new',(req, res, next) => {
	// Get a form for a new todo
	res.json('Hitting the Todos GET NEW route')
});

router.post('/',(req, res, next) => {
	// Post a new todo item
	res.json('Hitting the "/todos" POST route');
});

router.get('/:id',(req, res, next) => {
	// Get a specific todo
	res.json('Hitting the "/todos:id" GET route')
});

router.get('/:id/edit',(req, res, next) => {
	// return a pre-filled edit form
	res.json('Hitting the "/todos:id/edit" GET route')
});

router.put('/:id',(req, res, next) => {
	// Update an existing todo item
	res.json('Hitting the "/todos/:id" PUT route')
});

router.delete('/:id',(req, res, next) => {
	// Destroy an existing todo item
	res.json('Hitting the "/todos/:id" DELETE route')
});

module.exports = router;
