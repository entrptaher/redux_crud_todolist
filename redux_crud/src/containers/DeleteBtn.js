import React from 'react';
import PropTypes from 'prop-types';
import { Button } from "react-bootstrap";

const DeleteBtn = (props) => {

	const handleClick = (event) => {
		event.preventDefault();
		// allow restricted global use of `confirm`
		//eslint-disable-next-line
		let _confirmed = confirm("Do you want to DELETE this item?") 
			
		_confirmed ?
			props.removeTodo(props.id) :
			console.log( "Cancelled")
	}

	return (
		<Button onClick= { handleClick } > Delete </Button>
	)
}

DeleteBtn.propTypes = {
	removeTodo: PropTypes.func.isRequired,
	id: PropTypes.number
}

DeleteBtn.defaultProps = {
	removeTodo: f => f,
}

export default DeleteBtn