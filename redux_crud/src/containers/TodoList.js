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

// ===============
const TodoList = (props) => {

	let item= props._todoArray[0]

	return (

		<Grid>
			<Row> 
				<Col style= { outline } sm={12}>
					<h2> TodoList </h2>
				</Col>
			</Row>

			<Row className="tableHeader">
				<Col sm={1}style={ outline } >Rank</Col>
				<Col sm={7}style={ outline } >Task</Col>
				<Col sm={2}style={ outline } >Date</Col>
				<Col sm={1}style={ outline } >Edit</Col>
				<Col sm={1}style={ outline } >Delete</Col>
			</Row>
			
			<Row>
				<TodoItem 
					item={item}
					removeTodo= { props.removeTodo }
					toggleTodo= { props.toggleTodo }
					updateTodo= { props.updateTodo }
				/>
			</Row>

		</Grid>
		)
}

TodoList.propTypes = {
	_todoArray: PropTypes.array.isRequired,

  removeTodo: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired,

 }

TodoList.defaultProps = { 
	_todoArray: [],
	
	removeTodo: f=>f,
  toggleTodo: f=>f,
  updateTodo: f=>f,
}

export default TodoList