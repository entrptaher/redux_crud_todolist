import React from 'react';

import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types'

import { 
	addTodo, 
	// removeTodo, 
	// toggleTodo 
} from '../actions/todoActions'

 let data = addTodo("Hungry")

const handleEvent=(event) => {
	event.preventDefault();
	(addTodo(data))
}

/*{ TodoList.todo.map((num)=>
			<li key = {TodoList.indexOf(num)}> {num} </li>
			)}*/

const TodoList = (props) => {
 // console.log(this.props)
 	

	return (

		<div>
			<h1> My TodoList  </h1>

			<Button onClick= { handleEvent} > Add </Button>
			<Button> Del </Button>
			<h1> 
				mm{props.todoList} 
				{props.name}
			</h1>
				
		</div>
		)
}
 


TodoList.propTypes = { }

TodoList.defaultProps = { }

export default TodoList