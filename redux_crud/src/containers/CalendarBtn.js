import React from 'react';
import PropTypes from 'prop-types';
import { Button } from "react-bootstrap";

//============================================================

// create a default format for today's date
const getDay = (date) => {
  let year = date.getFullYear();
  let month = date.getMonth()+1;
  let day = date.getDate();
  let fullDate =[]
  return [...fullDate, year, month, day].join("-")
}

const _today = getDay(new Date())

const PriorityBtn = (props) => {
	let _rank

	const handleClick = (event) => {
		event.preventDefault();

		props.updateRank(props.id, _rank.value);
		console.log("The new rank is: ", _rank.value)
		return console.log("Task Priority EDITED!")
	}

	return (
		<form >
			<input ref= { (input) => _date = input } type = "date"  defaultValue = { props._today } required/>
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