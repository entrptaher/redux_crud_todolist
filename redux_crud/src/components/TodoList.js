// component to display the curret todo list
import React from 'react';

import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types'


// =============== STYLING =============

const listStyle = {
	// remove bullets from the ul list
  listStyleType: "none"
} 	

// ===============
const TodoList = (props) => {

	return (

		<div>
			<h2> TodoList </h2>
			<ul style={listStyle} > {props.todoList} </ul>
		</div>
		)
}

TodoList.propTypes = { }

TodoList.defaultProps = { }

export default TodoList