// should split this into a reducer test suite
import React from 'react';

// Testing...
import deepFreeze from 'deep-freeze';
import { expect } from 'chai'

// Data & components
import store from '../store';

import todos from '../reducers/todoReducer'

import { 
	addTodo, 
	removeTodo, 
	toggleTodo 
} from '../actions/todoActions'

// ====================================

describe('The ADD_TODO function', () => { 
	let listBefore = store.getState().todos

	it('...has an initial list of 3 items', () => {
		expect(listBefore.length).to.equal(3);
	})

	it('...can ADD another task to that list', () => {
		store.dispatch(addTodo("Mumby Corn Rocks!", "HIGH"))
		let listAfter = store.getState().todos
			expect(listAfter).to.be.an('array');
			expect(listAfter.length).to.equal(listBefore.length+1)
			expect(listAfter[3].task).to.equal("Mumby Corn Rocks!")
	})

});

describe('The REMOVE_TODO function', () => { 

	it('...can REMOVE an item from the list', () => {
		let listBefore = store.getState().todos
		deepFreeze (listBefore)
			expect(listBefore.length).to.equal(4);
		
		let _id = listBefore[1].id
			expect(_id).to.be.a('number');
		
		store.dispatch(removeTodo(_id));
		let listAfter = store.getState().todos
			expect(listAfter).to.be.an('array');
			expect(listAfter.length).to.equal(listBefore.length-1)
	})

});

describe("The TOGGLE_TODO function", () => {

	it('changes the todo complete status', () => {
		let listB4 = store.getState().todos
		expect(listB4).to.be.an("array")
		// ensre immutability
		deepFreeze(listB4);

		let _id = listB4[0].id
		expect(_id).to.be.a('number');
		expect(_id).to.be.equal(0.1);

		store.dispatch(toggleTodo(_id));

		let listAFT = store.getState().todos
		expect(listAFT[0].id).to.equal(0.1)
		let complete = listAFT[0].complete;
		// console.log("*****this is the status:  ", complete, listB4[0].id);

			expect(complete).to.equal(true);
	})

})
