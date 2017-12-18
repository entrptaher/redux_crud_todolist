import React from 'react';
import PropTypes from 'prop-types';
import { Button } from "react-bootstrap";

//============================================================



const PriorityBtn = (props) => {
	let _date

	const handleClick = (event) => {
		event.preventDefault();

		props.updateRank(props.id, _date.value);
		console.log("The new rank is: ", _date.value)
		return console.log("Task Priority EDITED!")
	}

	return (
		<form >
			<input 
			type = "date"  
			ref= { (input) => _date = input } 
			defaultValue = { props._today } required/>
		</form >
	)
} //end Container

//============================================================

PriorityBtn.propTypes = {
	updateRank: PropTypes.func.isRequired,
	id: PropTypes.string
}

PriorityBtn.defaultProps = {
	updateRank: f => f,
}

//============================================================
export default PriorityBtn