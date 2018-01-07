/* eslint-env node, mocha */

let server = require('../app');
let mongoose = require('mongoose');

let chaiHttp = require('chai-http');
let chai = require('chai');
let expect = chai.expect;
let should = chai.should();

let Todo = require('../models/todo.model');

const _task = {
	task: 'Hitting that route, yo!',
	owner: 'Walker',
	comp: true
};

chai.use(chaiHttp);

describe('Routes for /todos resources', () => {

	beforeEach((done) => {
		Todo.remove({ },(err) => {
			err ? console.error.bind(console) : console.log('DB cleared');
			done();
		});
	}); 

	// =========== READ an index of all current todos
	describe('===> THE TODOS "/todos" GET ROUTE', () => {

		it('... returns a list of all current todos', (done) => {

			chai.request(server)
				.get('/todos')
				.end((err, res) => {
					expect(res.status).to.eql(200);
					expect(res.body).to.be.an('array');
					expect(res.body.length).to.eql(0);
					done();
				});
		});
	});

	// =========== CREATE a new todo item
	describe('===> THE TODOS "/todos" POST ROUTE', () => {

		it('...can create a new todo item', (done) => {

			chai.request(server)
				.post('/todos/')
				.send(_task)
				.end((err, res) => {
					expect(res.status).to.eql(200);
					expect(res.body).to.be.an('object');
					expect(res.body).to.have.property('task');
					expect(res.body).to.have.property('complete');
					done();
				}); 	
		}); 
	});
		
	// =========== FIND a specific todo item
	describe('=== The GET "/todos/:id" route===', () => {

		it('... can find a specific todo item', (done) => {
			let todo = new Todo(_task);

			todo.save((err, newTodo) => {
				chai.request(server)
					.get('/todos/' + newTodo.id)
					.send(newTodo)
					.end((err, res) => {
						expect(res.status).to.eql(200);
						expect(res.body).to.be.an('object');
						expect(res.body).to.have.property('task');
						expect(res.body).to.have.property('complete');
						done();
					}); 
			}); 
		}); 
	}); 

	// =========== UPDATE a specific todo  
	describe.only('===> THE TODOS "/todos/:id" PUT ROUTE', () => {
		console.log('test needed EDIT');

		it('... can update an item', (done) => {

			let todo = new Todo(_task);

			todo.save((err, todo) => {

				chai.request(server)
					.put('/todos/' + todo.id)
					.send({
						task: 'Hitting ANOTHER',
						owner: 'Johara',
						comp: "false"
					})
					.end((err, res) => {
						console.log(res.body)
						expect(res.status).to.eql(200);
						expect(res.body).to.have.property('task');
						expect(res.body).to.have.property('owner');
						expect(res.body.owner).to.eql('Johara');
						expect(res.body.task).to.eql('Hitting ANOTHER');
						expect(res.body).to.be.an('object');
						expect(res.body).to.have.property('comp');
						// expect(res.body.comp).to.eql(true);

						expect(res.body.id).to.eql(10);
						done();		
					});
			});
		});
	});

	// =========== DELETE a specific todo  
	describe('===> THE TODOS "/todos/:id" DELETE ROUTE', () => {
		console.log('test needed DELETE');
	});

});


