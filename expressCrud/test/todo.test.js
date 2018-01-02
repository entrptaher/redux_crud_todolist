 process.env.NODE_ENV = 'test';

let mongoose	= require('mongoose');
let Todo = require('../controllers/models/todo.model');

let request = require('supertest');
// let express = require('express');

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server')
let should = chai.should();

chai.use(chaiHttp);

describe('Todos', () => {

	// clear test database before each test
	beforeEach((done) => {
		Todo.remove({}, (err) => {
			done();
		});
	});

	afterEach((done) => {
		chai.server.close();
		done();
	});

	// test GET route

	describe('/GET todos', () => {
		it('should make a successful connection', (done) => {

			chai.request(server.app.listen())
				.get('/todos')
				.end((err, res) => {
					res.should.have.status(200);
					res.should.be.an('array');
					res.body.length.should.be.eql(0);
					done();
				});
		})

	})

})