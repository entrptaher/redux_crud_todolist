import React from 'react';
import PropTypes from 'prop-types';
import { Button } from "react-bootstrap";

const Checkbox = (props) => {
	
return (
	<input type="checkbox" onClick= {() => props.toggleTodo(props.id)}/>
	)
};

Checkbox.propTypes = {
	removeTodo: PropTypes.func.isRequired,
	id: PropTypes.number.isRequired
}

Checkbox.defaultProps = {
	toggleTodo: f => f
}

export default Checkbox