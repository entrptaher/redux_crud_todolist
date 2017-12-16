const addTodo = (_task, _rank, _date) => {
	return {
		type: "ADD_TODO",
		payload: {
			id:"",
			task: _task,
			rank: _rank,
			date: _date,
			complete: false
		}
	}
};

const removeTodo = (_id) => {
	return {
		type: "REMOVE_TODO",
		payload: {id:_id}
	}
};

const toggleTodo = (_id) => {
	return {
		type: "TOGGLE_TODO",
		payload: {id:_id}
	}
};

const updateTodo = (_id,_task) => {
	return {
		type: "UPDATE_TODO",
		payload: {
			id:_id,
			task: _task
		}
	}
};

module.exports = {
	addTodo, 
	updateTodo,
	removeTodo,
	toggleTodo,
}