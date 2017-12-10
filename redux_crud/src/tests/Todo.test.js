import React from 'react';
import ReactDOM from 'react-dom';

import deepFreeze from 'deep-freeze';
import { expect } from 'chai'
import todoReducer from '../reducers/todoReducers'


import Todo from '../components/Todo';
import { 
	addTodo, 
	removeTodo, 
	toggleTodo 
} from '../actions/todoActions'

describe("The todoReducer items", () => {

	let state_start =[ ];
		// freeze object to ensure immutable result
		deepFreeze (state_start)
		
	let item = "Get groceries";
	let item2 = "Add a second item";
	let rank = "High";

	let action = addTodo(item, rank );
		console.log("action => ", action)
	let action2 = addTodo(item2, rank );
		// console.log("action2 => ",action2)
		
	let list01 = todoReducer(state_start, action )
		// console.log("list01 => ", list01);
	let list02 = todoReducer(list01, action2)
		console.log("list02 => ", list02);

	it('renders without crashing', () => {
	  const div = document.createElement('div');
	  ReactDOM.render(<Todo />, div);
	});

	describe('The ADD_TODO action ', () => {

		it('...returns a redux action object', () => {
			expect(action).to.be.an('object');
			expect(action.payload.item).to.equal(item);
			expect(action.payload.rank).to.equal(rank);
		})

		it('...Adds a new item through the reducer', () => {
			expect(list01).to.be.an('array');
			expect(list01.length).to.equal(1);
		})

		it('...Adds a second item through the reducer', () => {
			expect(list02).to.be.an('array');
			expect(list02.length).to.equal(2);
		})
	}); // descr ADD_TODO

	describe('The REMOVE_TODO action', () => {
	}); // descr Remove


}); //master describe
