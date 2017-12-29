var mongoose = require('mongoose');

// create a Schema
var Schema = mongoose.Schema;

var TodoItemSchema = new Todo({

	id: String,
	
	// validation: using `required`
	task: {
		type: String,
		required: {true, "Please add a Task"},
	},

	complete: Boolean,
	rank: String,
	date: Date,
	owner: String,

});

// create a Model

var TodoItem = mongoose.model('TodoItem', TodoItemSchema)