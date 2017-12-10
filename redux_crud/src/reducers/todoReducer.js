// import React from 'react'
import _ from 'lodash'

const TodoReducer = (state =[], action) => {

	let idRegister = 0

	let payload  = action.payload;
	let type = action.type;

	switch (action.type) {

		case "ADD_TODO":

			// wrong: mutates state
			// state.push(payload)
			
			// good: doesn't mutate
			action.payload.id = _.uniqueId();
			idRegister++;
			return [...state, payload]
			break;

		default:
			return state
	}

}


export default TodoReducer