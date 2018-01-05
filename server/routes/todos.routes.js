/* eslint-env node, mocha */
let Todo = require('../models/todo.model')

let express = require('express');
let router = express.Router();


// ========== * GET a list of all todos
router.get('/', (req, res, next) => {
	Todo.find((err, todos) => {
		if(err){
			res.status(500).send(err)
		} else {
			res.status(200).send(todos)
		}
	});
});

// ========== Get a form for a new todo
router.get('/new',(req, res, next) => {
	res.json('Hitting the Todos GET NEW route')
});

// ========= * Post a new todo item
router.post('/',(req, res, next) => {
	
	let todo = new Todo(req.body);

	todo.save((err, createdTodoObject) => {
		if(err) {
			res.status(500).send(err);
		} else {
			res.status(200).send(createdTodoObject)
		}
	});
});

// ========= Get a specific todo item
router.get('/id',(req, res, next) => {
	// let id = req.id;
	console.log("******", req)
	/*Todo.findById(id, (err, todo) => {
		if(err) {
			res.status(500).send(err)
		} 
		if(todo) {
			res.status(200).send(todo)
		} else {
			res.status(404).send("No item found")
		}*/
	// });

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
