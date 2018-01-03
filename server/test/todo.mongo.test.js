
let app = require('../app')

let chaiHttp = require('chai-http');
let chai = require('chai');
let expect = chai.expect;
chai.use(chaiHttp);

let mongoose = require('mongoose');

describe('The mongoose connection', () => {

	 let db ;

	beforeEach(() => {
		// establish pending connection to db
		mongoose.connect("mongodb://Tester:test2015@ds239117.mlab.com:39117/todo-test-db")
		db = mongoose.connection;
	});

	it('Connects successfully', () => { 
		// alert on success or errors
		db.on('error', console.error.bind(console, 'connection error:'));
		db.once('open', function() {
			console.log("we're connected!");
		});
	});
});





