import React from 'react';
import PropTypes from 'prop-types';
import {  } from "react-bootstrap";

const Checkbox = (props) => {

	let style= {
		color: "black"
	}

	const handleClick = (event) => {
		event.preventDefault();
		props.toggleTodo(props.id);
		console.log("Task COMPLETED!")
	}
	
return (
	<input type="checkbox" style={style} onClick={ handleClick }/>
	)
};

Checkbox.propTypes = {
	toggleTodo: PropTypes.func.isRequired,
	id: PropTypes.string,
	complete: PropTypes.bool,
}

Checkbox.defaultProps = {
	toggleTodo: f => f
}

export default Checkbox