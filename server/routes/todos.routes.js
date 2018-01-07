/* eslint-env node, mocha */
let Todo = require('../models/todo.model');

let express = require('express');
let router = express.Router();


// ========== * GET a list of all todos
router.get('/', (req, res,) => {
	// res.send('the GET/ rte');
	Todo.find({},(err, todos) => {
		if(err){
			res.status(500).send(err);
		} else {
			res.status(200).send(todos);
		}
	});
});

// ========= * Post a new todo item
router.post('/',(req, res,) => {
	
	let todo = new Todo(req.body);

	todo.save((err, newTodo) => {
		if(err) {
			res.status(500).send(err);
		} else {
			res.status(201).send(newTodo);
		}
	});
});

// ========= Get a specific todo item
router.get('/:id',(req, res,) => {

	let id = req.params.id;

	Todo.findById({ "_id": id }, (err, todo) => {
		if(err) {
			res.status(500).send(err);
		} else {
			res.status(200).send(todo);
		}
	});
});


/*router.put('/:id',(req, res,) => {
	// Update an existing todo item

	let id = req.params.id;

	Todo.findById({'_id':id}, (err, todo) => {
		if(err) {
			res.status(500).send(err);
		} else {
			todo.task		 = req.body.task 	 	|| todo.task;
			todo.details = req.body.details	|| todo.details;
			todo.done 	 = req.body.done		|| todo.done;
			todo.rank 	 = req.body.rank		|| todo.rank;
			todo.date 	 = req.body.date		|| todo.date;
			todo.owner 	 = req.body.owner	 	|| todo.owner;

			todo.save((err, todo) => {
				if(err) {
					res.status(500).send('No item found');
				} else {
					res.status(200).send(todo);
				}
			});
		}
	});

	});

	res.json('Hitting the "/todos/:id" PUT route');
});*/

router.delete('/:id',(req, res,) => {
	// Destroy an existing todo item
	res.json('Hitting the "/todos/:id" DELETE route');
});

module.exports = router;
