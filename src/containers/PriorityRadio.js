import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Form } from 'react-bootstrap';

//============================================================

const PriorityRadio = (props) => {
	let _rank;

	const handleChange = (event) => {
		event.preventDefault();
		props.updateRank(props.id, _rank.value);
	};

	return (
			<Row>
				<Form onChange= { handleChange } 
					ref= { (value) => _rank = value }
				>
					<Col sm= {3}>
							<input type= 'radio' name= 'rank' value='High'/>H
					</Col>

					<Col sm= {3}>
							<input type= 'radio' name= 'rank' value='Med' />M
					</Col>

					<Col sm= {3}>
							<input type= 'radio' name= 'rank' value='Low'/>L
					</Col>

				</Form >

			</Row>	
	);
}; //end Container

//============================================================


PriorityRadio.propTypes = {
	currRank: PropTypes.string.isRequired,
	updateRank: PropTypes.func.isRequired,
	id: PropTypes.string
};

PriorityRadio.defaultProps = {
	updateRank: f => f,
	currRank: 'Med',
};

//============================================================

export default PriorityRadio;