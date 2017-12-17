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

// ===============
const TodoList = (props) => {


	const outline= {

		border: "1px solid orange",

	}
	return (

		<Grid>
			<Row>
				<ul style={ listStyle } > List starts here </ul>
			</Row>

			<Row className="tableHeader">
				<Col sm={2}style={ outline } >Priority</Col>
				<Col sm={2}style={ outline } >Task</Col>
				<Col sm={2}style={ outline } >Date</Col>
				<Col sm={2}style={ outline } >Edit</Col>
				<Col sm={2}style={ outline } >Delete</Col>
			</Row>

			<Row> 
				<Col style= { outline } sm={12}>
					<h2> TodoList </h2>
				</Col>
			</Row>

			<Row> 
				<Col style= { outline } sm={ 4 } >Left</Col>
				<Col style= { outline } sm={ 4 } >
					<TodoItem/>
				</Col>
				<Col style= { outline } sm={ 4 } >Right</Col>
			</Row>

		</Grid>
		)
}

TodoList.propTypes = {
	_todoArray: PropTypes.array.isRequired,
 }

TodoList.defaultProps = { 
	_todoArray: [],
}

export default TodoList