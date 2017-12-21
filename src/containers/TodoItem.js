import React from 'react'
import { Col, Form, Row, } from 'react-bootstrap';
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
	let oldTask = item.task
	let _task

	const styleTask = {
		paddingBottom: 10,
		// backgroundColor: item.complete ? "whitesmoke" : "white", 
		color: item.complete ? "lightgrey" : "black",
		textDecoration: item.complete ? "line-through" : "none",
	}

// Code is WET
	const onFocusStyle = (event) => {
		event.preventDefault();
		_task.style.backgroundColor = "whitesmoke";
		_task.style.color = "blue";
		_task.setSelectionRange(0, _task.value.length)
	}

	const onBlurStyle = (event) => {
		event.preventDefault();
		_task.style.backgroundColor = "white";
		_task.style.color = "black";
	}

	const handleTaskEdit = (event) => {
		event.preventDefault();
		let newTask = _task.value
			
	  if (newTask == oldTask) {
			_task.style.backgroundColor = "white";
			return console.log("No Changes Submitted")
		} 

		props.updateTodo(item.id, newTask);
		alert("item edited!!")
		_task.style.backgroundColor = "white";
		return console.log("Task EDITED!", newTask)
	}

  return (

		<Row  >

	  	<Col 
	  		className= "checkBox" 
	  		sm= { 1 } 
  		>

		  	<Checkbox
					toggleTodo= { props.toggleTodo }   
					id= { item.id }
		  	/>

	  	</Col >

	  	<Col 
	  		className= "priorityBtn" 
	  		sm= { 1 } 
	  		style={ centered } 
  		>

		  	<PriorityBtn
					updateRank= { props.updateRank }   
					id= { item.id }
					currRank = { item.rank }
		  	/>

	  	</Col >

	  	<Col 
	  		className= "calendarBtn" 
	  		sm= { 2 } 
	  		style={{ padding:0,fontSize:"0.75em" }} 
  		>

				<CalendarBtn
					updateDate= { props.updateDate }   
					id= { item.id }
					currDate = { item.date }
				/>	

	  	</Col >

			<Col 
				className= "currentTask" 
				sm={ 6 } 
			>

				<Form 
				  onSubmit= { handleTaskEdit } 
				  onFocus= { onFocusStyle } 
				  onBlur= { onBlurStyle } 
			  >

					<input 
						ref= { (input) => _task = input } 
						type = "text"  
						defaultValue= { item.task }
						maxLength= { 50 } 
						size= { 60 } 
						style= { styleTask } 
					/> 

				</Form>

			</Col>

			<Col sm= { 1 } >
			</Col>
			
			<Col 
				className= "deleteBtn" 
				sm= { 1 } 
				style= { centered } 
			>

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
