/* eslint-env node, mocha */
let Todo = require('../models/todo.model')

let express = require('express');
let router = express.Router();

router.get('/', (req, res, next) => {
	// GET a list of all todos
	Todo.find((err, todos) => {
		if(err){
			res.status(500).send(err)
		} else {
			res.status(200).send(todos)
		}
	});
});

router.get('/new',(req, res, next) => {
	// Get a form for a new todo
	res.json('Hitting the Todos GET NEW route')
});

router.post('/',(req, res, next) => {
	// Post a new todo item
	
	let todo = new Todo(req.body);

	todo.save((err, createdTodoObject) => {
		if(err) {
			res.status(500).send(err, "could not save new item");
		} else {
			res.status(200).send(createdTodoObject)
		}
	});
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
