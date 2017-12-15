import React from 'react'
import PropTypes from 'prop-types'
// import { Form } from 'react-bootstrap'

const handleClick = (event) => {
	event.preventDefault()
}

const TodoForm = (props) => {

	let _task, _rank

	const handleForm = (event) => {
		event.preventDefault();
		// alert("Hello")
/*		if (_task.value == "" || _rank.value == "") {
			alert ("Please enter all fields")
		}
*/		props.addTodo(_task.value, _rank.value);
		// reset the fields
		_task.value ="";
		_rank.value ="";
		_task.focus();
	}

	return (
		<div>
			<h4> Add a new todo here: </h4>
			<form onSubmit={handleForm}>
				<input ref= {(input) => _task = input} type = "text"  placeholder="Task" required></input>
				<input ref= {(input) => _rank = input} type = "text" placeholder="Rank" required></input>
			<button type="submit" > Add todo </button>
			</form>
		</div>
	)
}

// add Proptype validation

export default TodoForm