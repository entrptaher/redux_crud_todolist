import React from 'react';
import PropTypes from 'prop-types';
import { Button } from "react-bootstrap";

//============================================================

/*<select ref= { (input) => _rank = input }>
				  <option value="High">High</option>
				  <option value="Med" selected="selected">Med</option>
				  <option value="low">Low</option>
				</select>
*/

const PriorityBtn = (props) => {
	let _rank

	const handleChange = (event) => {
		event.preventDefault();

		props.updateRank(props.id, _rank.value);
		console.log("The new rank is: ", _rank.value)
		return console.log("Task Priority EDITED!")
	}

	return (
		<form >
			<select 
				onChange= { handleChange } 
				ref= { (value) => _rank = value }
			>
			  <option value={props.currRank}>{props.currRank}</option>
			  <option value="High">High</option>
			  <option value="Med" >Med</option>
			  <option value="Low">Low</option>
			</select>
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