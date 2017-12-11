import React from 'react';

import { Button } from 'react-bootstrap';
import store from '../store/store'

import { 
	addTodo, 
	removeTodo, 
	toggleTodo 
} from '../actions/todoActions'


const TodoList =  store.getState()

/*const appendList = (todo) => {
	List.push(todo)
}
*/
/*const handleClick = (event) => {
	event.preventDefault();
	appendList("howdy")
}*/

const Todo = () => {

return (

	<div>

		<h1> My Todo List </h1>

		<Button> Add </Button>
		<Button> Del </Button>

		<ul> 
		{ TodoList.todo.map((num)=>
			<li key = {TodoList.indexOf(num)}> {num} </li>
			)}
			
		</ul>
		
	</div>
	)
}
 
export default Todo 