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

const styleTitle= {
	// border: "1px solid orange",
	background:"#006699",
	color: "white",
	borderRadius: 5,
	marginBottom: 10,
}
const bordering= {
	// outline: "1px solid lightgrey", 
	padding: 7, 
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

		<Grid >

			{/*<Row style={ bordering }> 
							<Col 
								sm={12}
							>
								<h2> TodoList </h2>
							</Col>
						</Row>*/}

			<Row 
				className="tableHeaders"
				style= { styleTitle } 
			>
					<Col sm= { 1 } style={ bordering } >
				  	<input type="checkbox" disabled />
			  	</Col >
					<Col sm={1} style={ bordering } >Rank</Col>
					<Col sm={2} style={ bordering } >Due Date</Col>
					<Col sm={6} style={ bordering } >Task</Col>
					<Col sm={1} style={ bordering } >Edit</Col>
					<Col sm={1} style={ bordering } >Delete</Col>
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