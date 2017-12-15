// component to display the curret todo list
import React from 'react';

import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types'

const TodoList = (props) => {
 	
 console.log(props)

	return (

		<div>
			<h2> TodoList </h2>
			<p> {props.todoList} </p>
		</div>
		)
}

TodoList.propTypes = { }

TodoList.defaultProps = { }

export default TodoList