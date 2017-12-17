import React from 'react';
import PropTypes from 'prop-types';
import { Button } from "react-bootstrap";

const EditButton = (props) => {

	const handleClick = (event) => {
		event.preventDefault();
		// allow restricted global use of `confirm`
		//eslint-disable-next-line
		let _confirmed = confirm("EDIT this item?") 
			
		if (_confirmed) {
			props.removeTodo(props.id);
			return console.log("Task EDITD!")
		} 
		console.log( "EDIT Cancelled")
	}


	return (
		<Button onClick= { handleClick } > Edit </Button>
	)
}

EditButton.propTypes = {
	removeTodo: PropTypes.func.isRequired,
	id: PropTypes.string
}

EditButton.defaultProps = {
	removeTodo: f => f,
}

export default EditButton