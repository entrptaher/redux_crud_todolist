import React from 'react';

import { Button } from 'react-bootstrap';
// import store from '../store/store';

// import todoAction from '../actions/todoActions'
import { connect } from 'react-redux';

import { 
	addTodo, 
	// removeTodo, 
	// toggleTodo 
} from '../actions/todoActions'

 let data = addTodo("Hungry")

 // let todoArray = store.getState().todo

const handleEvent=(event) => {
	event.preventDefault();
	(addTodo(data))
}

/*{ TodoList.todo.map((num)=>
			<li key = {TodoList.indexOf(num)}> {num} </li>
			)}*/

const Todo = () => {
 
 // console.log(this.props)
return (

	<div>
		<h1> My Todo List </h1>

		<Button onClick= { handleEvent} > Add </Button>
		<Button> Del </Button>

		<h2> **  { } ** </h2>

		<ul> 
		</ul>
		
	</div>
	)
}
 
const mapStateToProps = (state) => {
	return {
		todo: state.todo
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		addTodo: ()=> dispatch(todoAction.addTodo())
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Todo) 