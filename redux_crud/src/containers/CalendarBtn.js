import React from 'react';
import PropTypes from 'prop-types';
import { Button } from "react-bootstrap";

//============================================================

const PriorityBtn = (props) => {

	let _date
	const handleChange = (event) => {
		event.preventDefault();

		props.updateDate(props.id, _date.value);
		console.log("The new DATE is: ", _date.value)
		return console.log("Task Date EDITED!")
	}

	return (
		<form >
			<input 
			type = "date"  
			ref= { (input) => _date = input } 
			onChange= { handleChange }
			defaultValue = { props.currDate } required
			/>
		</form >
	)
} //end Container

//============================================================

PriorityBtn.propTypes = {
	updateDate: PropTypes.func.isRequired,
	currDate: PropTypes.string,
	id: PropTypes.string,
}

PriorityBtn.defaultProps = {
	updateDate: f => f,
}

//============================================================
export default PriorityBtn