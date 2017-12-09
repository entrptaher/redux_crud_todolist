import React from 'react';
import ReactDOM from 'react-dom';

import deepFreeze from 'deep-freeze';
import { expect } from 'chai'
// import expect from 'expect'

import Todo from '../components/Todo';
import { addTodo } from '../actions/todoActions'


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Todo />, div);
});

describe('The Todo list ADD_TODO action ',() => {

	let array_start =[ ];
		deepFreeze (array_start)

	let item = "Get groceries";
	let rank = "High";
		
	let action = addTodo(item, rank );
	let array_finish = [ ]

	it('returns a redux action object', () => {
			expect(action).to.be.an('object');
			expect(action.payload.item).to.equal(item);
			expect(action.payload.rank).to.equal(rank);
			console.log(action)
	})

})
