import React from 'react'
import { Col,Row, } from 'react-bootstrap';
import PropTypes from 'prop-types'

// ============ COMPONENTS ============ 
import Checkbox from '../containers/Checkbox';
import PriorityBtn from '../containers/PriorityBtn';
import CalendarBtn from '../containers/CalendarBtn';
import EditButton from '../containers/EditButton';
import DeleteBtn from '../containers/DeleteBtn';
    
// ============== STYLING

const centered = {
	padding: 0,
	marginBottom: 5,	
}

const TodoItem = (props) => {

	let item = props.item;
	let _task= "";

	const testAlert = (event) => {
		event.preventDefault();
		alert(event.target._task);
	}

	const styleTask = {
		paddingBottom: 10,
		backgroundColor: item.complete ? "whitesmoke" : "white", 
		textDecoration: item.complete ? "line-through" : "none",
		color: item.complete ? "lightgrey" : "black",
	}

  return (

		<Row  >

	  	<Col className= "checkBox" sm= { 1 } >
		  	<Checkbox
					toggleTodo= { props.toggleTodo }   
					id= {item.id}
		  	/>
	  	</Col >

	  	<Col className= "priorityBtn" sm= { 1 } style={ centered } >
		  	<PriorityBtn
					updateRank= { props.updateRank }   
					id= {item.id}
					currRank = {item.rank}
		  	/>
	  	</Col >

	  	<Col 
	  		className= "calendarBtn" 
	  		sm= { 2 } 
	  		style={{padding:0,fontSize:"0.75em"}} 
  		>
				<CalendarBtn
					updateDate= { props.updateDate }   
					id= {item.id}
					currDate = { item.date }
				/>	  	
	  	</Col >

			<Col 
				className= "currentTask" 
				sm={ 6 } 
				style= { styleTask } 
			>
			<input 
				ref= { (input) => _task = input } 
				type = "text"  
				placeholder= { item.task } 
				size={ 60 } 
				required
			/> 

			</Col>
			
			<Col className= "editButton" sm={ 1 } style={ centered } > 
				<EditButton 
					updateTodo= { props.updateTodo }   
					id= {item.id} 
				/>
			</Col>

			<Col className= "deleteBtn" sm={ 1 } style={ centered } >
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
