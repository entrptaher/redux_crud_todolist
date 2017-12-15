import React from 'react'
import PropTypes from 'prop-types'
// import { Form } from 'react-bootstrap'

const handleClick = (event) => {
	event.preventDefault()
}

const TodoForm = (props) => {

	console.log("&&&&", props.addTodo)
	// console.log(props.addTodo("Michael"))

	return (
		<div>
			<h4> Add a new todo here: </h4>
			<form>
				<input type = "text" placeholder="Task"></input>
				<input type = "text" placeholder="Rank"></input>
			</form>
			<button type="submit" onClick={()=>props.addTodo("Michael")} > Add to List  </button>
		</div>
	)
}

// add Proptype validation

export default TodoForm