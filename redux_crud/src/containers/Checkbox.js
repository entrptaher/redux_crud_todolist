import React from 'react';
import PropTypes from 'prop-types';
import { Form } from "react-bootstrap";

const Checkbox = (props) => {

	const handleClick = (event) => {
		event.preventDefault();
		props.toggleTodo(props.id);
		console.log("Task COMPLETED!")
	}
	
return (
	<Form>
		<input 
			type="checkbox" 
			onClick={ handleClick }
		/>
	</Form>
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