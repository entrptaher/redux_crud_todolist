let  mongoose	= require('mongoose');
let Todo = require('../models/todo.model')

const getTodos = () => {
	let query = Todo.find({});
	query.exec((err, todos) => {
		if(errr) res.send(err);
		res.json(todos);
	});
};


module.exports = {
 getTodos,

}

// Railsy routes
/*app.get('/todos', (req, res, err) => {
	// show all photos
	console.log("GET all todos route")
});

app.get('/todos/new', (req, res, err) => {
	// return form for creating a new task
});

app.post('/todos', (req, res) => {
	// create a new todo
	console.log("POST route ")
});

app.get('/todos/id', (req, res, err) => {
	// show one todo
	console.log("GET all todos route")
});

app.get('/todos/id/edit', (req, res) => { 
	// get a specific todo in a form for editing
});

app.put('/todos/id/', (req, res) => {
	// edit a single todo
});

app.delete('/todos/id', (req, res) => {
	// destroy a specific todo
});*/
