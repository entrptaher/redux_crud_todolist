import React from 'react';
import ReactDOM from 'react-dom';

import deepFreeze from 'deep-freeze';
import { expect } from 'chai'
import TodoReducer from '../reducers/TodoReducer'


import Todo from '../components/Todo';
import { 
	addTodo, 
	removeTodo, 
	toggleTodo 
} from '../actions/todoActions'


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Todo />, div);
});

describe('The ADD_TODO  list actions ',() => {

	let state_start =[ ];
		// freeze object to ensure immutable result
		deepFreeze (state_start)
	let state_end = [ ]
		
	let item = "Get groceries";
	let rank = "High";
	let action = addTodo(item, rank );
	let action2 = addTodo("test 2nd item ", rank );
		console.log(action)
	

	it('...returns a redux action object', () => {
		
	let newList = TodoReducer(state_start, action )
	let lastList = TodoReducer(newList, action2)
		expect(action).to.be.an('object');
		expect(action.payload.item).to.equal(item);
		expect(action.payload.rank).to.equal(rank);
		console.log(newList);
		console.log(lastList);

	})

	xit('Adds a new item throught the reducer', () => {
		console.log(newList);
		expect(newList).to.be.an('array');
		expect(newList.length).to.equal(1);
	})

	xit('Adds a second item', () => {
		expect(list2.length).to.equal(2);
	})
})

xit('REMOVE_TODO', () => {
		let index = 0;
		let action = removeTodo(index)
		console.log(action);

		expect(action).to.be.an('object');

	})