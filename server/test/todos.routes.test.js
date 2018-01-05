/* eslint-env node, mocha */

let server = require('../app');
let mongoose = require('mongoose');

let chaiHttp = require('chai-http');
let chai = require('chai');
let expect = chai.expect;

let Todo = require('../models/todo.model')

chai.use(chaiHttp);

// =========== READ an index of all current todos
xdescribe('===> THE TODOS "/todos" GET ROUTE', () => {

	let http;

	beforeEach((done) => {

		Todo.remove({}, (err) => {
			done();
		});

		http = chai.request(server)
			.get('/todos');

	});

	after(() => {
		mongoose.connection.close();
		http = '';
	});

	it('...successfully connects to the "/todos" GET route', (done) => {
		http.end((err, res) => {
			expect(res.status,'*** route not connected ***').to.eql(200);
			done();
		});
	});

	it('...returns an array', (done) => {
		http.end((err, res) => {
			expect(res.body).to.be.an('array');
			done();
		});
	});

	it('returns a list of all todos', () => {
		 //Query the DB and if no errors, send all the todos
    http.end((err, res) => {
    	expect(res.body).to.be.an('array');
	  });

	})

});

// =========== Return a FORM to CREATE a new todo item
describe('===> THE TODOS "/todos/new" GET ROUTE', () => {

	let http;

	beforeEach(() => {
		http = chai.request(server).get('/todos/new');
	});

	after(() => {
		http = '';
	});

	it('...successfully connects to the "/todos/new" GET route', (done) => {
		http.end((err, res) => {
			expect(res.status,'*** route not connected ***').to.eql(200);
			done();
		});
	});

});

// =========== CREATE a new todo
describe('===> THE TODOS "/todos" POST ROUTE', () => {

	let http;
	let body = {
		task: "Hitting that POST route, yo!",
		owner: "Walker",
		complete: true
	}

	before(() => {
		// start with a clear database
		Todo.remove({},(err) => {
			err ? console.error.bind(console) : console.log('DB cleared')
		});

		body = {
			task: "Hitting that POST route, yo!",
			owner: "Walker",
			complete: true
		}

		http = chai.request(server)
			.post('/todos')
			.send(body)
	});

	after(() => {
		// Cleat the database
		http = '';
		Todo.remove({},(err) => {
			err ? console.error.bind(console) : console.log('DB cleared')
		});
	});

	it('...successfully connects to the "/todos" POST route', (done) => {
		http
			.end((err, res) => {
			expect(res.status,'*** route not connected ***').to.eql(200);
			done();
		});
	});

	it('... creates a new todo item', (done) => {
		http.end((err, res) => {
			expect(res.body).to.be.an('object')
			expect(res.body._id).to.exist
		done();
		});
	})

});

// =========== READ a specific todo  
describe('===> THE TODOS "/todos/:id" GET ROUTE', () => {

	let http;
	let _id = "1jasmine"

	beforeEach(() => {
		http = chai.request(server).get('/todos/'+_id);
	});

	after(() => {
		http = '';
		_id = '';
	});

	it('...successfully connects to the "/todos/:id" GET route', (done) => {
		http.end((err, res) => {
			expect(res.status,'*** route not connected ***').to.eql(200);
			done();
		});
	});

});

// =========== Return a FORM to EDIT a specific todo item
describe('===> THE TODOS "/todos/:id/edit" GET ROUTE', () => {

	let http;
	let _id = "1jasmine"

	beforeEach(() => {
		http = chai.request(server).get('/todos/'+ _id + '/edit');
	});

	after(() => {
		http = '';
		_id = '';
	});

	it('...successfully connects to the "/todos/:id/edit" GET route', (done) => {
		http.end((err, res) => {
			expect(res.status,'*** route not connected ***').to.eql(200);
			done();
		});
	});

});

// =========== UPDATE a specific todo  
describe('===> THE TODOS "/todos/:id" PUT ROUTE', () => {

	let http;
	let _id = "1jasmine"

	beforeEach(() => {
		http = chai.request(server).put('/todos/'+ _id);
	});

	after(() => {
		http = '';
		_id = '';
	});

	it('...successfully connects to the "/todos/:id" PUT route', (done) => {
		http.end((err, res) => {
			expect(res.status,'*** route not connected ***').to.eql(200);
			done();
		});
	});

});

// =========== DELETE a specific todo  
describe('===> THE TODOS "/todos/:id" DELETE ROUTE', () => {

	let http;
	let _id = "1jasmine"

	beforeEach(() => {
		http = chai.request(server).delete('/todos/'+ _id);
	});

	after(() => {
		http = '';
		_id = '';
	});

	it('...successfully connects to the "/todos/:id" DELETE route', (done) => {
		http.end((err, res) => {
			expect(res.status,'*** route not connected ***').to.eql(200);
			done();
		});
	});

});

