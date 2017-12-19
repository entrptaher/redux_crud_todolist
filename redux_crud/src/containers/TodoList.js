// component to display the curret todo list
import React from 'react';
import PropTypes from 'prop-types'

import { 
	Col, 
	Grid,
	Row, 
} from 'react-bootstrap';

import TodoItem from './TodoItem';


// ============================ STYLING ============================

const outline= {
	border: "1px solid orange",
}
const outline02= {
	border: "1px solid lime",
}

// =========================== COMPONENT ===========================

const TodoList = (props) => {

	let todoArray= props.todoArray

	let todos= todoArray.map(item => {
		return <TodoItem 
		
			key = {item.id}
			item={item}
			removeTodo= { props.removeTodo }
			toggleTodo= { props.toggleTodo }
			updateDate= { props.updateDate }
			updateRank= { props.updateRank }
			updateTodo= { props.updateTodo }
		/>

	})

	return (

		<Grid style={ outline02 }  >

			<Row style={ outline02 }> 
				<Col style= { outline } sm={12}>
					<h2> TodoList </h2>
				</Col>
			</Row>

			<Row style={ outline02 } className="tableHeaders ">
					<Col sm= { 1 } style={ outline } >
				  	<input type="checkbox" disabled />
			  	</Col >
					<Col sm={1} style={ outline } >Rank</Col>
					<Col sm={2} style={ outline } >Due Date</Col>
					<Col sm={6} style={ outline } >Task</Col>
					<Col sm={1} style={ outline } >Edit</Col>
					<Col sm={1} style={ outline } >Delete</Col>
			</Row>

			<Row>
				<Col sm= { 12 }>
					{todos} 
				</Col>
			</Row>

		</Grid>
		)
} // end component

// ==================================================================

TodoList.propTypes = {
	todoArray: PropTypes.array.isRequired,
  removeTodo: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  updateDate: PropTypes.func.isRequired,
  updateRank: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired,
 }

TodoList.defaultProps = { 
	todoArray: [],
	removeTodo: f=>f,
  toggleTodo: f=>f,
  updateDate: f=>f,
  updateRank: f=>f,
  updateTodo: f=>f,
}

export default TodoList