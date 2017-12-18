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

const EditButton = (props) => {
	let _rank

	const handleClick = (event) => {
		event.preventDefault();

			props.updateTodo(props.id, _rank);
			return console.log("Task Priority EDITED!")
	}


	return (
		<form >
			<select onChange= { handleClick } ref= { (value) => _rank = value }>
			  <option value="High">High</option>
			  <option value="Med" selected="selected">Med</option>
			  <option value="low">Low</option>
			</select>
		</form >
	)
} //end Container

//============================================================

EditButton.propTypes = {
	updateTodo: PropTypes.func.isRequired,
	id: PropTypes.string
}

EditButton.defaultProps = {
	updateTodo: f => f,
}

//============================================================
export default EditButton