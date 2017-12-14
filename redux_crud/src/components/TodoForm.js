import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TodoForm extends Component {
	

	render () {

		return (
			<div>
				<h1> The form will go here </h1>
				<form>
					<input type = "text" placeholder="Task"></input>
					<input type = "text" placeholder="Rank"></input>
				</form>
			</div>
			)
	}
}
