import React from 'react';
import { Button } from 'react-bootstrap'


const list =  [1,2,3,4,5]
const Todo = () => {

return (

	<div>

		<h1> My Todo List </h1>

		<Button> Add </Button>
		<Button> Del </Button>

		<ul> 
		{ list.map((num)=>
			<li key = {list.indexOf(num)}> {num} </li>
			)}
			
		</ul>
		
	</div>

	)
}

export default Todo