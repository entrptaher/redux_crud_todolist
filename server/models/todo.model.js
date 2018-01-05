var mongoose = require('mongoose');

var Schema = mongoose.Schema;
// create a Schema

var TodoSchema = new Schema({

	id: String,
	
	// validation: using `required`
	task: {
		type: String,
		required: [true, "Please add a Task"]
	},
	description: String,
	complete: Boolean,
	rank: String,
	date: Date,
	owner: String,

});

// create a Model

module.exports = mongoose.models.Todos || mongoose.model('Todos', TodoSchema);