import React from 'react';

const addTodo = (_item, _rank) => {
	return {
		type: "ADD_TODO",
		payload: {
			item: _item,
			rank: _rank
		}
	}
}

module.exports = {
	addTodo
}