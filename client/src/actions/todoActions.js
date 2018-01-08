import shortid from 'shortid';

export const addTodo = (_task, _rank, _date) => {
	return {
		type: 'ADD_TODO',
		payload: {
			// mongo will generate the id
			// id: shortid.generate(),
			task: _task,
			rank: _rank,
			date: _date,
			// ensurse model aligns
			complete: false
		}
	};
};

export const removeTodo = (_id) => {
	return {
		type: 'REMOVE_TODO',
		payload: {id: _id}
	};
};

export const toggleTodo = (_id) => {
	return {
		type: 'TOGGLE_TODO',
		payload: {id: _id}
	};
};

export const updateTodo = (_id, _task) => {
	return {
		type: 'UPDATE_TODO',
		payload: {
			id: _id,
			task: _task
		}
	};
};

export const updateRank = (_id, _rank) => {
	return {
		type: 'UPDATE_RANK',
		payload: {
			id: _id,
			rank: _rank
		}
	};
};

export const updateDate = (_id, _date) => {
	return {
		type: 'UPDATE_DATE',
		payload: {
			id: _id,
			date: _date
		}
	};
};

