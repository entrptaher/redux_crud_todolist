import React from 'react';

import { Button } from 'react-bootstrap';

const List =  [1,2,3,4,5]

/*const appendList = (todo) => {
	List.push(todo)
}
*/
/*const handleClick = (event) => {
	event.preventDefault();
	appendList("howdy")
}*/

const Todo = () => {

return (

	<div>

		<h1> My Todo List </h1>

		<Button> Add </Button>
		<Button> Del </Button>

		<ul> 
		{ List.map((num)=>
			<li key = {List.indexOf(num)}> {num} </li>
			)}
			
		</ul>
		
	</div>
	)
}
 
export default Todo 