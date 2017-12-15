import React from 'react'
import PropTypes from 'prop-types'
// import { Form } from 'react-bootstrap'

const TodoForm = (props) => {

	let _task, _rank, _date

	const handleSubmit = (event) => {
		event.preventDefault();
		props.addTodo(_task.value, _rank.value);
	
		// reset the fields
		_task.value ="";
		_task.focus();
	}

	return (
		<div>
			<h4> Add a new todo here: </h4>
			<form onSubmit={handleSubmit}>

				<select ref= {(input) => _rank = input}>
				  <option value="high">High</option>
				  <option value="medium" selected="selected">Med</option>
				  <option value="low">Low</option>
				</select>

				<input ref= {(input) => _task = input} type = "text"  placeholder="Task" size={40} required></input>
				<input ref= {(input) => _date = input} type = "date" defaultValue="2020-12-31" required></input>
				
				<input type="submit"/>
				<input type = "reset"/>
			</form>
		</div>
	)
}

TodoForm.propTypes = {
	_task: PropTypes.string.isRequired,
	_rank: PropTypes.string.isRequired,
	_date: PropTypes.number.isRequired
}

TodoForm.defaultProps = {
	_task: "",
	_rank: "",
	_date:2020-12-31,
}

export default TodoForm