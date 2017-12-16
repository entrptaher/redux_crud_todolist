import React from 'react';
import PropTypes from 'prop-types';
import { Button } from "react-bootstrap";

const DeleteBtn = (props) => {

	return (
		// <Button > {props.test} </Button>
		<Button onClick= {()=> props.removeTodo(props.id)} > Delete </Button>
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