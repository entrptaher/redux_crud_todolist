/* eslint-env node, mocha */

let server = require('../app');
let mongoose = require('mongoose');

let chaiHttp = require('chai-http');
let chai = require('chai');
let expect = chai.expect;

let Todo = require('../models/todo.model')

const _task = {
			id: "2018",
			task: "Hitting that POST route, yo!",
			owner: "Walker",
			complete: true
		}

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
			expect(res.status, err).to.eql(200);
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
			expect(res.status, err).to.eql(200);
			done();
		});
	});
});

// =========== CREATE a new todo item
xdescribe('===> THE TODOS "/todos" POST ROUTE', () => {

	let http

	beforeEach(() => {
		// start with a clear database
		Todo.remove({},(err) => {
			err ? console.error.bind(console) : console.log('DB cleared');
		});

		http = chai.request(server)
			.post('/todos')
			.send(_task)
	});

	afterEach(() => {
		// Clear the database
		http = '';
		Todo.remove({},(err) => {
			err ? console.error.bind(console) : console.log('DB cleared')
		});
	});

	it('...successfully connects to the "/todos" POST route', (done) => {
		http
			.end((err, res) => {
			expect(res.status, err).to.eql(200);
			done();
		});
	});

	it('... creates a new todo item', (done) => {
		http.end((err, res) => {
			let todo = 	res.body;
			let id 	 = 	todo.id ;
			expect(todo).to.be.an('object');
			expect(id).to.exist;
			expect(id).to.be.a('string');
		done();
		});
	})
});

// =========== SETTING UP find a todo
describe.only('===> SETTING UP the new find route', () => {

	let http

	// start with a clear database
	before((done) => {
		Todo.remove({},(err) => {
			err ? console.error.bind(console) : console.log('DB cleared');
		});

		body = {
			id: 2018,
			task: "Hitting that POST route, yo!",
			owner: "Walker",
			complete: true
		}

		chai.request(server)
			.post('/todos')
			.send(body)
			.end((err, res) => {
				done()
			});
	});

	after(() => {
		// Clear the database
		http = '';
		Todo.remove({},(err) => {
			err ? console.error.bind(console) : console.log('DB cleared')
		});
	});

	describe('_ _ builds a new db item', () => {

		let id = _task.id
		let testUrl = '/todos/' + id

		it('..test can construct the url, "/todos/2018', () => {
			expect(id).to.be.a('string');
			// brittle..
			expect(testUrl).to.eql('/todos/2018')
		})

		it.only('successfully connects to the "/todos/id" GET route', (done) => {
			chai.request(server)
				.get('/todos/'+ id)

				.end((err, res) => {
				expect(res.status, err).to.eql(200);
				done();
			});
		});

		it('... creates a new todo item', (done) => {

			http = chai.request(server)
				.get('/todos')

				.end((err, res) => {
					let todos = res.body
		    	expect(todos).to.be.an('array');
		    	expect(todos.length).to.be.above(0);
		    	expect(todos[0].owner).to.eql('Walker');
					expect(res.status, err).to.eql(200);
					done();
						// expect(body).to.be.an('object');
						// expect(body._id).to.exist;
				})
		})

	});

// ========= 
	it('... configures ', () => {

	})

	it('... connects to the "/todos/:id" route', () => {

		expect('/todos/' + body.id).to.eql('/todos/2018')
		let httpFind = chai.request(server)
			// .get('/todos/' + body.id)

	})

});



// ========= ========= ========= ========= ========= 



// ========= ========= ========= ========= ========= 



// =========  READ a specific todo  
describe('===> THE TODOS "/todos/:id" GET ROUTE', () => {

	let http, body, todo, id 

	beforeEach(() => {
		// start with a clear database
		Todo.remove({},(err) => {
			err ? console.error.bind(console) : console.log('DB cleared');
		});

		body = {
			id: 2018,
			task: "Hitting that POST route, yo!",
			owner: "Walker",
			complete: true
		}

		todo = new Todo(body);

		chai.request(server)
			.post('/todos/')
			.send(body)
			.end()

		http = chai.request(server)
			.get('/todos/'+ body.id)
	});

	/*after(() => {
		// Clear the database
		http = '';
		Todo.remove({},(err) => {
			err ? console.error.bind(console) : console.log('DB cleared')
		});
	});*/

// ========= 

	it('...successfully connects to the "/todos/:id" GET route', (done) => {
			http.end((err, res) => {
			expect(res.status, err).to.eql(200);
			done();
		});
	});

	it('...can find a specific item', (done) => {
		http.end((err,res) => {
			console.log(res.toArray())
			expect(res).to.be.an("string")
			done();
		});

	})
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
			expect(res.status, err).to.eql(200);
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
			expect(res.status, err).to.eql(200);
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
			expect(res.status, err).to.eql(200);
			done();
		});
	});
});

