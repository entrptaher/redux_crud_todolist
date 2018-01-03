var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a Schema

var todoSchema = new Schema({

	id: String,
	
	// validation: using `required`
	task: {
		type: String,
		required: [true, "Please add a Task"]
	},

	complete: Boolean,
	rank: String,
	date: Date,
	owner: String,

});

// create a Model

module.exports = mongoose.model('todo', todoSchema);