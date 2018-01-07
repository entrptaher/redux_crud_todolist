
let mongoose = require('mongoose');

let mongoDB = 'mongodb://Tester:test2015@ds239117.mlab.com:39117/todo-test-db';

// establish pending connection to db
mongoose.connect(mongoDB);
// use the global Promise library
mongoose.Promise = global.Promise;
// default connection
let db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

// ========= The Seed Module

const Seed = () => {

	let Todo = require('../models/todo.model');

	const _task = {
		task: 'Hitting that route, yo!',
		owner: 'Walker',
		comp: true
	};

	let todo = new Todo(_task)

	todo.save((err, todo) => {
		console.log("**********", todo);
	})

}


module.exports = Seed;



