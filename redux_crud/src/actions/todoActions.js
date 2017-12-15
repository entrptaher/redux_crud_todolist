const addTodo = (item, rank) => {
	return {
		type: "ADD_TODO",
		payload: {
			id:"",
			item: item,
			rank: rank,
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