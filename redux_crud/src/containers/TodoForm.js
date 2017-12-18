import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';

import PriorityBtn from './PriorityBtn';

const TodoForm = (props) => {


	 // create a default format for today's date
    const getDay = (date) => {
      let year = date.getFullYear();
      let month = date.getMonth()+1;
      let day = date.getDate();
      let fullDate =[]
      return [...fullDate, year, month, day].join("-")
    }
    const _today = getDay(new Date())

	let _task, _rank, _date
	
	const handleSubmit = (event) => {
		event.preventDefault();
		props.addTodo(_task.value, _rank.value, _date.value);
		console.log("Task ADDED!")
	
		// reset the fields
		_task.value ="";
		_task.focus();
	}

	return (
		<div>
			<h4> Add a new todo here: </h4>
			<Form onSubmit={ handleSubmit }>
			<select ref= { (value) => _rank = value }>
			  <option value="High">High</option>
			  <option value="Med" selected="selected">Med</option>
			  <option value="Low">Low</option>
			</select>
				<input ref= { (input) => _task = input } type = "text"  placeholder="Task" size={ 40 } required/>
				<input ref= { (input) => _date = input } type = "date"  defaultValue = { _today } required/>
				
				<input type= "submit" value= "Add Task" />
				<input type = "reset"/>
			</Form>
		</div>
	)
}

TodoForm.propTypes = {
	_task: PropTypes.string.isRequired,
	_rank: PropTypes.string.isRequired,
	_date: PropTypes.string.isRequired,
}

TodoForm.defaultProps = {
	_task: "",
	_rank: "",
	_date: ""
}

export default TodoForm