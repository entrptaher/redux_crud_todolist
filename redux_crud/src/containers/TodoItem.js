import React from 'react'
import { 
	Col,
	Row,
} from 'react-bootstrap';
import PropTypes from 'prop-types'

// ============ COMPONENTS ============ 
import Checkbox from '../containers/Checkbox';
import PriorityBtn from '../containers/PriorityBtn';
import CalendarBtn from '../containers/CalendarBtn';
import EditButton from '../containers/EditButton';
import DeleteBtn from '../containers/DeleteBtn';
    
// ============== STYLING
const outline= {
	border: "1px solid orange",
}

const TodoItem = (props) => {

	let item = props.item;

	const texty = {
		textDecoration: item.complete ? "line-through": "none",
		color: item.complete ? "lightgrey" : "blue",
	}

  return (

		<Row style= { texty }>

	  	<Col sm= { 1 } style={ outline } >
		  	<Checkbox
					toggleTodo= { props.toggleTodo }   
					id= {item.id}
		  	/>
	  	</Col >

	  	<Col sm= { 1 } style={ outline } >
		  	<PriorityBtn
					updateRank= { props.updateRank }   
					id= {item.id}
					currRank = {item.rank}
		  	/>
	  	</Col >

	  	<Col sm= { 2 } style={ outline } >
				<CalendarBtn
					updateDate= { props.updateDate }   
					id= {item.id}
					currDate = { item.date }
				/>	  	
	  	</Col >

			<Col sm={ 6 } style={ outline } >{ item.task}</Col>
			
			<Col sm={ 1 } style={ outline } > 
				<EditButton 
					updateTodo= { props.updateTodo }   
					id= {item.id} 
				/>
			</Col>

			<Col sm={ 1 } style={ outline } >
				<DeleteBtn 
					removeTodo= { props.removeTodo }   
					id= { item.id } 
				/>
			</Col>

		</Row>
  )
}; // end Component

//===========================================================

TodoItem.propTypes = { 
  item: PropTypes.object.isRequired,
  removeTodo: PropTypes.func,
  toggleTodo: PropTypes.func,
  updateDate: PropTypes.func,
  updateRank: PropTypes.func,
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
  updateDate: f=>f,
  updateRank: f=>f,
  updateTodo: f=>f,
}
export default TodoItem
