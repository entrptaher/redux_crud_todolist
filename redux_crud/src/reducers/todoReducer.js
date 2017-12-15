import _ from 'lodash'

// state can also be an object with a collection of other objects or
// arrays.  SImple array used her for this test
// const initialState = [];

const TodoReducer = (state = [
	{id:0.1, date: 	"2020-01-01", complete: false, task:"Default todo task 01", rank: "High"},
	{id:0.2, date: 	"2020-01-01", complete: false, task:"Default todo task 02", rank: "Med"},
	{id:0.3, date: 	"2020-01-01", complete: false, task:"Default todo task 03", rank: "Low"},
	], action) => {

	let payload  = action.payload;
	let type = action.type;

	switch (type) {

		case "ADD_TODO":
			action.payload.id = _.uniqueId();

			// wrong: mutates state
			// state.push(payload)

			// good: doesn't mutate
			return [...state, payload];
			break;

		case "REMOVE_TODO":
			
			let id = payload

			// poor mutating method:
			// state.splice(id,1)

			// non mutating method

			let matchId = (todo) => {
				if(todo.id === id) {
					return true;
				}
					return false;
			}

			if(state.some(matchId)) {
				let index = state.findIndex(matchId)

				return [
					...state.slice(0, index), 
				 	...state.slice(index+1)
				]

			} 
				return state
			break;

		default:
			return state
	}
}

export default TodoReducer