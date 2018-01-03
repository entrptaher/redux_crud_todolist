/* eslint-env node, mocha */

let app = require('../app');

let chaiHttp = require('chai-http');
let chai = require('chai');
let expect = chai.expect;

chai.use(chaiHttp);



describe('===> THE MONGOOSE DB CONNECTION', () => {
	
	let db
	beforeEach(() => {
		// =========================== Connect database
		let mongoose = require('mongoose');
		let mongoDB = 'mongodb://Tester:test2015@ds239117.mlab.com:39117/todo-test-db';
		// establish pending connection to db
		mongoose.connect(mongoDB);
		// use the global Promise library
		// mongoose.Promise = global.Promise;
		// default connection
		 db = mongoose.connection;

	});

	it('Connects successfully', () => {
	// alert on success or errors
		db.on('error', console.error.bind(console, 'connection error:'));
		db.once('open', function() {
		// console.log(db)
		console.log("The test db is connected!");
		});
	});

	xit('can create a todo item', () => {
		// console.log('build a test here!');
	});





});





