// component to display the curret todo list
import React from 'react';
import PropTypes from 'prop-types'

import { 
	Col, 
	Grid,
	Row, 
} from 'react-bootstrap';



import TodoItem from './TodoItem';

// =============== STYLING =============

const listStyle = {
	// remove bullets from the ul list
  listStyleType: "none",
} 	

// ============== STYLING
const outline= {
	border: "1px solid orange",
}
const outline02= {
	border: "1px solid lime",
}

// ===============
const TodoList = (props) => {

	let todoArray= props.todoArray

	let arr= [1,2,3,4,5]

	let todos= todoArray.map(item => {
		return <TodoItem 
			item={item}
			removeTodo= { props.removeTodo }
			toggleTodo= { props.toggleTodo }
			updateTodo= { props.updateTodo }
		/>
	})

// let todos
	
	return (

		<Grid sm={1} style={ outline02 }>
			<Row style={ outline02 }> 
				<Col style= { outline } sm={12}>
					<h2> TodoList </h2>
				</Col>
			</Row>

			<Row style={ outline02 } className="tableHeader">
				<Col sm={1}style={ outline } >Rank</Col>
				<Col sm={7}style={ outline } >Task</Col>
				<Col sm={2}style={ outline } >Date</Col>
				<Col sm={1}style={ outline } >Edit</Col>
				<Col sm={1}style={ outline } >Delete</Col>
			</Row>
			
			<Row>
				<Col sm= { 12 }>
					<ul marginLeft= { 0 }> {todos} </ul>
				</Col>
			</Row>

		</Grid>
		)
}

TodoList.propTypes = {
	todoArray: PropTypes.array.isRequired,

  removeTodo: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired,

 }

TodoList.defaultProps = { 
	todoArray: [],

	removeTodo: f=>f,
  toggleTodo: f=>f,
  updateTodo: f=>f,
}

export default TodoList