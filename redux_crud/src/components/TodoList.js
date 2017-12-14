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
 	
 console.log(props)
 // console.log(props.todoList.item)



	return (

		<div>
			<h1> My TodoList  </h1>

			<Button onClick= { handleEvent} > Add </Button>
			<Button> Del </Button>
			<h3> {props.name} </h3>
			<h3> list?{props.todoList}   </h3>
				
		</div>
		)
}


TodoList.propTypes = { }

TodoList.defaultProps = { }

export default TodoList