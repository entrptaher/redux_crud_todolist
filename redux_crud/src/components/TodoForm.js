import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TodoForm extends Component {
	

	render () {

		return (
			<div>
				<h4> Add a new todo here: </h4>
				<form>
					<input type = "text" placeholder="Task"></input>
					<input type = "text" placeholder="Rank"></input>
				</form>
				<button type="submit"> Add to List  </button>
			</div>
			)
	}
}
