import React from 'react';
import PropTypes from 'prop-types';


import { Button } from "react-bootstrap";


const DeleteBtn = (props) => {

 console.log(props)

	return (
		// <Button > {props.test} </Button>
		<Button onClick= {()=> props.removeTodo(props.id)} > Delete </Button>
		)
}

DeleteBtn.propTypes = {
	removeTodo: PropTypes.func.isRequired,
	// id: PropTypes.number.isRequired
}

DeleteBtn.defaultProps = {
	// removeTodo: f=>f,
	// id: 0
}

export default DeleteBtn