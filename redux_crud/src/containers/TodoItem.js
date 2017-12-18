import React from 'react'
import { 
	Button,
	Col,
	Grid,
	Row,
} from 'react-bootstrap';

import PropTypes from 'prop-types'

// ============ COMPONENTS ============ 
import Checkbox from '../containers/Checkbox';
import DeleteBtn from '../containers/DeleteBtn';
import EditButton from '../containers/EditButton';
import PriorityBtn from '../containers/PriorityBtn';
import TodoForm from '../containers/TodoForm';
    
// ============== STYLING
const outline= {
	border: "1px solid orange",
}

const TodoItem = (props) => {

	let item = props.item

  return (

		<Row className="tableHeader">
	  	<Col sm= { 1 } >
		  	<PriorityBtn
					updateTodo= { props.updateTodo }   
					item= {item.id}
		  	/>
	  	</Col >

			<Col sm={1}style={ outline } >{item.rank}</Col>
			<Col sm={6}style={ outline } >{item.task}</Col>
			<Col sm={2}style={ outline } >{item.date}</Col>
			<Col sm={1}style={ outline } > 
				<EditButton 
					updateTodo= { props.updateTodo }   
					id= {item.id} 
				/>
			</Col>
			<Col sm={1}style={ outline } >
				<DeleteBtn 
					removeTodo= { props.removeTodo }   
					id= {item.id} 
				/>
			</Col>

		</Row>
  )
    
}; // end Component


// ADD proptypes for validations

TodoItem.propTypes = { 
  item: PropTypes.object.isRequired,

  removeTodo: PropTypes.func,
  toggleTodo: PropTypes.func,
  updateTodo: PropTypes.func,
}

TodoItem.defaultProps ={
  item: { 
		id: '0.3HxYz',
    date: '2020-01-01',
    complete: false,
    task: 'Celebrate life!',
    rank: 'Low', 
 	},

  removeTodo: f=>f,
  toggleTodo: f=>f,
  updateTodo: f=>f,
}
export default TodoItem
