import React from 'react';

const addTodo = ( _item, _rank ) => {
	return {
		type: "ADD_TODO",
		payload: {

			item: _item,
			rank: _rank,
			complete: false
		}
	}
}

const removeTodo = ( _id ) => {
	return {
		type: "REMOVE_TODO",
		payload: {
			id: _id
		}
	}
}

const toggleTodo = ( _id) => {
	return {
		type: "TOGGLE_TODO",
		payload: {
			item: _item,
			rank: _rank
		}
	}
}

module.exports = {
	addTodo, 
	removeTodo,
	toggleTodo
}