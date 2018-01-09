/* eslint-env node, mocha, chai, jest */

// import deepFreeze from 'deep-freeze';
// import chai from 'chai';

import { expect } from 'chai';
import axios from 'axios';

// ========= 

describe('The initialRequest actions', () => {

	let todos; 
	let _task;

	beforeAll((done) => {
		axios.get('http://localhost:3003/api/todos')
			.then((res) => {
				todos = res.data;
				_task = todos[0];
				done();
			});
	});

	it('..returns an array of objects', () => {
		expect(todos).to.be.an('array');
		expect(_task).to.be.an('object');
		expect(todos.length).to.be.above(0);
	});

	describe('the todo properties', () => {

		it('_ _ has a "completed" property', () => {
			expect(_task).to.have.property('completed');
		});
				
		it('_ _ has a "date" property', () => {
			expect(_task).to.have.property('date');
		});
				
		it('_ _ has a "details" property', () => {
			expect(_task).to.have.property('details');
		});
				
		it('_ _ has a "owner" property', () => {
			expect(_task).to.have.property('owner');
		});
				
		it('_ _ has a "rank" property', () => {
			expect(_task).to.have.property('rank');
		});
				
		it('_ _ has a "task" property', () => {
			expect(_task).to.have.property('task');
		});
		
	});
	

});