import React from 'react';
import PropTypes from 'prop-types';
import { Button } from "react-bootstrap";

//============================================================

const EditButton = (props) => {

	const handleClick = (event) => {
		event.preventDefault();
		// allow restricted global use of `confirm`
		//eslint-disable-next-line
		let _edited = prompt("Enter Edited task below: ", props.task) 
			
		if (_edited) {
			props.updateTodo( props.id, _edited,);
			return console.log("Task EDITED!")
		} 
		console.log( "EDIT Cancelled")
	}

	return (

		<Button 
			onClick= { handleClick } 
			className= { "btn btn-primary btn-sm" }
		> 
			Edit
		</Button>
	)
} //end Container

//============================================================

EditButton.propTypes = {
	updateTodo: PropTypes.func.isRequired,
	id: PropTypes.string,
	task: PropTypes.object, // item.task
}

EditButton.defaultProps = {
	updateTodo: f => f,
}

//============================================================
export default EditButton