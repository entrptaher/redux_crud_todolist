var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a Schema
var TodoSchema = new Schema({

	// validation: using `required`

	owner: String,
	task: {
		type: String,
		required: [true, "Please add a Task"]
	},
	details: String,
	rank: String,
	date: Date,
	completed: {
		type: Boolean,
		default: false
	}

});

// create a Model
module.exports = mongoose.models.Todos || mongoose.model('Todos', TodoSchema);