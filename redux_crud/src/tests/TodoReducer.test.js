// should split this into a reducer test suite
import React from 'react';

// Testing...
import deepFreeze from 'deep-freeze';
import { expect } from 'chai'

// Data & components
import store from '../store';

import todoReducer from '../reducers/todoReducer'

import { 
	addTodo, 
	removeTodo, 
	toggleTodo 
} from '../actions/todoActions'

// ====================================

xdescribe('The ADD_TODO function', () => { 
	let listBefore = store.getState().todoReducer

	it('...has an initial list of 3 items', () => {
		expect(listBefore.length).to.equal(3);
	})

	it('...can ADD another item to that list', () => {
		store.dispatch(addTodo("Mumby Corn Rocks!", "HIGH"))
		let listAfter = store.getState().todoReducer
			expect(listAfter).to.be.an('array');
			expect(listAfter.length).to.equal(listBefore.length+1)
			expect(listAfter[3].item).to.equal("Mumby Corn Rocks!")
	})

});

xdescribe('The REMOVE_TODO function', () => { 

	xit('...can REMOVE an item from the list', () => {
		let listBefore = store.getState().todoReducer
		deepFreeze (listBefore)
			expect(listBefore.length).to.equal(3);
		
		let _id = listBefore[1].id
			expect(_id).to.be.a('number');
		
		store.dispatch(removeTodo(_id));
		let listAfter = store.getState().todoReducer
			expect(listAfter).to.be.an('array');
			expect(listAfter.length).to.equal(listBefore.length-1)
	})

});
