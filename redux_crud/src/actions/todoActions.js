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

const removeTodo = (id) => {
	return {
		type: "REMOVE_TODO",
		payload: id
	}
};

const toggleTodo = (id) => {
	return {
		type: "TOGGLE_TODO",
		payload: {
		}
	}
};

module.exports = {
	addTodo, 
	removeTodo,
	toggleTodo
}