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


	const style= {

		border: "1px solid orange",

	}
	return (

		<Grid>
			<Row>
				<ul style={listStyle} > List starts here </ul>
			</Row>
			<Row> 
				<Col style={ style } sm={12}>
					<h2> TodoList </h2>
				</Col>
			</Row>

			<Row> 
				<Col style={ style } sm={ 3 } >Left</Col>
				<Col style={ style } sm={ 3 } >
					<TodoItem/>
				</Col>
				<Col style={ style } sm={ 3 } >Right</Col>
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