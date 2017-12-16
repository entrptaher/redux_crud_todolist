import React from 'react';
import PropTypes from 'prop-types';
import {  } from "react-bootstrap";

const Checkbox = (props) => {

	let style= {
		color: "black"
	}

	const handleChange = (event) => {
		event.preventDefault();
		props.toggleTodo(props.id);
	}
	
return (
	<input type="checkbox" style={style} onClick={ handleChange }/>
	)
};

Checkbox.propTypes = {
	toggleTodo: PropTypes.func.isRequired,
	id: PropTypes.number,
	complete: PropTypes.bool,
}

Checkbox.defaultProps = {
	toggleTodo: f => f
}

export default Checkbox