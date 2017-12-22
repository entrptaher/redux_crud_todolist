import React from 'react';
import PropTypes from 'prop-types';
import { Form, Checkbox } from "react-bootstrap";

const _Checkbox = (props) => {

	const handleClick = (event) => {
		// event.preventDefault();
		props.toggleTodo(props.id);
		console.log("Task COMPLETED!")
		console.log(event.target)
	}
	
return (
	<Form>
		<Checkbox 
		className= { "form-check-input" }
			type="checkbox" 
			onClick={ handleClick }
		> 
		</Checkbox>
	</Form>
	)
};

_Checkbox.propTypes = {
	toggleTodo: PropTypes.func.isRequired,
	id: PropTypes.string,
	complete: PropTypes.bool,
}

_Checkbox.defaultProps = {
	toggleTodo: f => f
}

export default _Checkbox