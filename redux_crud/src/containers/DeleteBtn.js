import React from 'react';
import PropTypes from 'prop-types';
import { Button } from "react-bootstrap";

const DeleteBtn = (props) => {

	const handleClick = (event) => {
		event.preventDefault();
		// allow restricted global use of `confirm`
		//eslint-disable-next-line
		let _confirmed = confirm("DELETE this item?") 
			
		if (_confirmed) {
			props.removeTodo(props.id);
			return console.log("Task DELETED!")
		} 
		console.log( "DELETE Cancelled")
	}

	return (
		<Button onClick= { handleClick } > Delete </Button>
	)
}

DeleteBtn.propTypes = {
	removeTodo: PropTypes.func.isRequired,
	id: PropTypes.string
}

DeleteBtn.defaultProps = {
	removeTodo: f => f,
}

export default DeleteBtn