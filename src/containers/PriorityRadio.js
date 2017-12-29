import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row,  Col, Button, ButtonToolbar, Form, ToggleButton, ToggleButtonGroup } from 'react-bootstrap';

//============================================================

	class PriorityRadio extends Component {

 		constructor(props) {
 			super(props);
 			this.state = {
 				// checked: true
 			}
 		}

	render() {
	
		const handleChange = (event) => {
			event.preventDefault();
			let value = event.target.value
			this.props.updateRank(this.props.id, value);
			console.log(value);
			// this.setState{checked}
		};

		return (

			<Form onClick= { handleChange } >
				<Row>

					<Col sm= {4}  >
						<Button 
							type= 'button' 
							value= 'High' 
							bsStyle='primary' 
							bsSize='xsmall'
						> 
							H 
						</Button>
					</Col>
				
					<Col sm= {4}  >
						<Button 
							type= 'button' 
							value= 'Med' 
							bsStyle='primary' 
							bsSize='xsmall'
						> 
							M 
						</Button>
					</Col>
				
					<Col sm= {4}  >
						<Button 
							type= 'button' 
							value= 'Low' 
							bsStyle='primary' 
							bsSize='xsmall'
						> 
							L 
						</Button>
					</Col>
				
			</Row>
			</Form>
		);
	}
}; //end Container

//============================================================

/*
<div>
		<Form 
		>

			<ButtonToolbar
			>

				<ToggleButtonGroup 
					type= 'radio' 
					name = '_rank' 
					defaultValue= "Med"
					onClick= { handleChange } 
				>
						<ToggleButton 
							value= 'Hi'
						> H 
						</ToggleButton>

						<ToggleButton 
							value={'Med'}
						> M
						</ToggleButton>

				</ToggleButtonGroup>

			</ButtonToolbar>	

		</Form>

		{_rank}

		</div>
*/


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