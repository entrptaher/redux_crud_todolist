/* eslint-env node, mocha */

// should split this into a reducer test suite

import React from 'react';
import ReactDOM from 'react-dom';
import deepFreeze from 'deep-freeze';
import { expect } from 'chai';
import todos from '../../reducers/todoReducer';
import TodoList from '../../containers/TodoList';
import store from '../../store/store';

import { 
	addTodo, 
} from '../../actions/todoActions';

// ======== esllint
/*global TodoList describe:true*/
/*global TodoList it:true*/
/*eslint no-undef: 'error'*/

// ====================================

describe('The todos tasks', () => {

	let state_start =[ ];
	// freeze object to ensure immutable result
	deepFreeze (state_start);
		
	let task = 'Get groceries';
	let task2 = 'Add a second task';
	let rank = 'High';
	// let date = '2020-12-31';

	let action = addTodo(task, rank );
	// console.log('action => ', action)
	let action2 = addTodo(task2, rank );
	// console.log('action2 => ',action2)
		
	let list01 = todos(state_start, action );
	// console.log('list01 => ', list01);
	let list02 = todos(list01, action2);
	// console.log('list02 => ', list02);

	// this may want a Prover to work
	describe('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(
			<TodoList />
			,div
		);
	});
 
	describe ('the Redux Store implementation', () => {

		// console.log ('**** This is the state of the store ****', store.getState());

		const _mock ={
			completed:  false,
			date: Date.now(),
			details: 'Fake Line of details. Lots of text',
			owner: 'Kahl Drogo',
			rank: 'High',
			task: 'Make it so'
		};
			
		let _task, afterList;
		let beforeList = (store.getState().todos);

		beforeAll(() => {
			store.dispatch(addTodo(_mock));
			afterList = (store.getState().todos);
			let _size = afterList.length;
			_task = afterList[ _size - 1 ];
		});

		afterAll(() => {
			afterList.pop();
		});

		it('can use ADD_TODO to add a todo to the array', () => {
			expect(_task).to.be.an('object');
			expect(afterList.length).to.be.above(beforeList.length);
		});

		it('has a "completed" property', () => {
			expect(_task).to.have.property('completed')
				.to.eql(_mock.completed);
		});
		
		it('has a "date" property', () => {
			expect(_task).to.have.property('date')
				.to.eql(_mock.date);
		});
		
		it('has a "details" property', () => {
			expect(_task).to.have.property('details')
				.to.eql(_mock.details);
		});
		
		it('has a "owner" property', () => {
			expect(_task).to.have.property('owner')
				.to.eql(_mock.owner);
		});
		
		it('has a "rank" property', () => {
			expect(_task).to.have.property('rank')
				.to.eql(_mock.rank);
		});
		
		it('has a "task" property', () => {
			expect(_task).to.have.property('task')
				.to.eql(_mock.task);
		});

	});

	describe('The ADD_TODO action ', () => {

		it('...returns a redux action object', () => {
			expect(action).to.be.an('object');
			expect(action.payload.task).to.equal(task);
			expect(action.payload.rank).to.equal(rank);
		});

		it('...Adds a new task through the reducer', () => {
			expect(list01).to.be.an('array');
			expect(list01.length).to.equal(1);
		});

		it('...Adds a second task through the reducer', () => {
			expect(list02).to.be.an('array');
			expect(list02.length).to.equal(2);
		});
	}); // descr ADD_TODO

}); //master describe