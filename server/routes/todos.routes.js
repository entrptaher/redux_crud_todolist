/* eslint-env node, mocha */
let Todo = require('../models/todo.model');

let express = require('express');
let router = express.Router();

// ========== * READ a list of all todos
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

// ========= * CREATE a new todo item
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

// ========= * READ a specific todo item
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

// ========= * UPDATE a specific ite
router.put('/:id',(req, res,) => {
	// Update an existing todo item

	let id = req.params.id;

	Todo.findById({"_id":id}, (err, todo) => {

		if(err) {
			res.status(500).send(err);
		} else {

			todo.comp 	 = req.body.comp		|| todo.comp;
			todo.task		 = req.body.task 	 	|| todo.task;
			todo.details = req.body.details	|| todo.details;
			todo.rank 	 = req.body.rank		|| todo.rank;
			todo.date 	 = req.body.date		|| todo.date;
			todo.owner 	 = req.body.owner	 	|| todo.owner;

			todo.save((err, todo) => {

				if(err) {
					res.status(500).send(err);
				} 
					res.status(200).send(todo);
			});
		}
	});
}); 

// ========= DELETE an existing todo item
router.delete('/:id',(req, res,) => {

	let id = req.params.id;

	Todo.remove({ "_id": id }, (err, todo) => {

		if(err) {
			res.status(500).send(err);
		} else {
			let response = {
				ok: 1,
				message: "Successfully deleted todo item with id: " + id
			}
			res.status(200).send(response);
		}
	})
});

module.exports = router;
