
// replace with an API call
/*let initialState = [
	{id:'0.1HxYz', date: 	'2020-01-01', complete: false, task:'Get some Milk', rank: 'High'},
	{id:'0.2HxYz', date: 	'2020-01-01', complete: false, task:'Kiss my daughter', rank: 'Med'},
	{id:'0.3HxYz', date: 	'2020-01-01', complete: false, task:'Celebrate life!', rank: 'Low'},
];*/


const initialState ={
	status: "",
	todos: [],
	error:""
}


const TodoReducer = (state=initialState, action) => {

	let payload  = action.payload;
	let type = action.type;

	switch (type) {

		case 'ADD_TODO': {
			return [...state, payload];
		}
		// break;

		case 'REMOVE_TODO':{

			let _id = payload.id;
			let matchId = (task) => { return task.id === _id; };

			if(state.some(matchId)) {
				let index = state.findIndex(matchId);

				return [
					...state.slice(0, index), 
					...state.slice(index+1)
				];
			} 
			break;
		}

		case 'TOGGLE_TODO': {

			let _id = payload.id;
			let matchId = (task) => { return task.id === _id; };
			let target = state.findIndex(matchId);

			let newState = state.map((task, index) => {
				if(index !== target ) {
					return task;
				}
				return Object.assign(
					{}, 
					task, 
					{complete:!task.complete}
				);
			});

			return Object.assign([], state, newState);
		}
		// break;

		case 'UPDATE_TODO': {

			let _id = 	payload.id;
			let _task = payload.task;

			let matchId = (task) => { return task.id === _id; };
			let target = state.findIndex(matchId);

			let updatedTask = state.map((task, index) => {
				if(index !== target ) {
					return task;
				} else {
					return Object.assign(
						{}, 
						task, 
						{ task: _task }
					);
				}
			});

			return Object.assign([], state, updatedTask);
		}
		// break;
		
		case 'UPDATE_RANK': {

			let _id =		payload.id;
			let _rank = payload.rank;

			let matchId = (task) => { return task.id === _id; };
			let target = state.findIndex(matchId);

			let updatedTask = state.map((task, index) => {
				if(index !== target ) {
					return task;
				} else {
					return Object.assign(
						{}, 
						task, 
						{ rank: _rank }
					);
				}
			});

			return Object.assign([], state, updatedTask);
		}
		// break;

		case 'UPDATE_DATE': {

			let _id =		payload.id;
			let _date = payload.date;

			let matchId = (task) => { return task.id === _id; };
			let target = state.findIndex(matchId);

			let updatedTask = state.map((task, index) => {
				if(index !== target ) {
					return task;
				} else {
					return Object.assign(
						{}, 
						task, 
						{ date: _date }
					);
				}
			});

			return Object.assign([], state, updatedTask);
		}
		// break;

		default: {
			return state;
		}
	}
};

export default TodoReducer;