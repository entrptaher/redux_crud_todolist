var request = require('supertest');
// var expect = require('chai.expect()')

describe('the Get route', () => {

	var server;

	beforeEach( () => {
		server= require('../server');
	});

	afterEach( () => {
		server.close();
	});

	test = server.get

	it('', () => {
		console.log("test working?")
	})

})
