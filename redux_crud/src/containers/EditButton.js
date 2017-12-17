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
			props.updateTodo( props.id, "MICHAEL JAY!");
			return console.log("Task EDITED!")
		} 
		console.log( "EDIT Cancelled")
	}


	return (
		<Button onClick= { handleClick } > Edit </Button>
	)
}

EditButton.propTypes = {
	updateTodo: PropTypes.func.isRequired,
	id: PropTypes.string
}

EditButton.defaultProps = {
	updateTodo: f => f,
}

export default EditButton