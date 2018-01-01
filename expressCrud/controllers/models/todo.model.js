let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let TodoItemSchema = new Todo(
	{
		id: String,
		task: {
			type: String,
			required: {true, "Please add a Task"} // validation
		},

		complete: Boolean,
		rank: String,
		date: Date,
		owner: String,
	}
);

// Sets the createdAt parameter equal to the current time
TodoItemSchema.pre('save', next => {
  now = new Date();
  if(!this.createdAt) {
    this.createdAt = now;
  }
  next();
});

// create a Model

module.exports = mongoose.model('todo', TodoItemSchema)