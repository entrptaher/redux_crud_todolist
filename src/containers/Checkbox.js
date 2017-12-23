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
	
	if(props.complete) {
		return( 
			<Form >
				<Checkbox 
				className= { "form-check-input" }
				type= "checkbox" 
				onClick= { handleClick }
				defaultChecked
				> 
				</Checkbox>
			</Form>
		)
	} else {
	
		return (
			<Form >
					<Checkbox 
					className= { "form-check-input" }
					type= "checkbox" 
					onClick= { handleClick }
					> 
					</Checkbox>
			</Form>
		)
	} // end return

}; // end component

_Checkbox.propTypes = {
	complete: PropTypes.bool.isRequired,
	id: PropTypes.string,
	toggleTodo: PropTypes.func.isRequired,
}

_Checkbox.defaultProps = {
	toggleTodo: f => f
}

export default _Checkbox