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

const Todo = (props) => {
 // console.log(this.props)
 
	return (

		<div>
			<h1> My Todo List </h1>

			<Button onClick= { handleEvent} > Add </Button>
			<Button> Del </Button>
			<h1> 
				{props.todoList} {props.name}
			</h1>
				
		</div>
		)
}
 


Todo.propTypes = { }

Todo.defaultProps = { }

export default Todo