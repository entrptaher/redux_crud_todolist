import React from 'react'
import { 
	Button,
	Col,
	Grid,
	Row,
} from 'react-bootstrap';

import PropTypes from 'prop-types'

// ============ COMPONENTS ============ 
import Checkbox from '../containers/Checkbox';
import DeleteBtn from '../containers/DeleteBtn';
import EditButton from '../containers/EditButton';
import TodoForm from '../containers/TodoForm';


/*// create the todo list items
  const todoList = props._todoArray.map(task => {
    let _id = task.id
    
    return (
      <li key={_id} style= {
        {textDecoration: task.complete ? "line-through" : "none", color: task.complete ? "lightgrey": "steelblue"}
      }> */

// ========= target code
      /*return (
      <div style= {
        {textDecoration: task.complete ? "line-through" : "none", color: task.complete ? "lightgrey": "steelblue"}
      }> 

        <Checkbox id= {_id}
          toggleTodo= { task.toggleTodo }
          />..    
        {task.rank} .....
        {task.task} ..... 
        {task.date} 
        <DeleteBtn id={_id} removeTodo={ task.removeTodo }/>
        <EditButton id={_id} updateTodo={ task.updateTodo }/>

      </div>
      )*/
    
  
const TodoItem = (props) => {
	
		let item = props.item

    return (
      <div>
       <p>
       hello
       </p>
       {item.task}
      </div>
      )
    
}; // end Component


// ADD proptypes for validations

TodoItem.propTypes = { 
  addTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  item: PropTypes.array.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired,
}

TodoItem.defaultProps ={
  addTodo: f=>f,
  removeTodo: f=>f,
  toggleTodo: f=>f,
  updateTodo: f=>f,
  item: { id: '0.3HxYz',
             date: '2020-01-01',
             complete: false,
             task: 'Celebrate life!',
             rank: 'Low' }


}
export default TodoItem
