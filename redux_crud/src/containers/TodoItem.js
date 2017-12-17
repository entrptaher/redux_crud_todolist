import React, { 
	Button,
	Col,
	Component,
	Grid,
	Row,
} from 'react';

import PropTypes from 'prop-types'

// ============ COMPONENTS ============ 
import Checkbox from '../containers/Checkbox';
import DeleteBtn from '../containers/DeleteBtn';
import EditButton from '../containers/EditButton';
import TodoForm from '../containers/TodoForm';

  
const TodoItem = (props) => {

  // create the todo list items
  const todoList = props.todos.map(task => {
    let _id = task.id
    
    return (
      <li key={_id} style= {
        {textDecoration: task.complete ? "line-through" : "none", color: task.complete ? "lightgrey": "steelblue"}
      }> 

        <Checkbox id= {_id} 
          toggleTodo= { props.toggleTodo }
          />..    
        {task.rank} .....
        {task.task} ..... 
        {task.date} 
        <DeleteBtn id={_id} removeTodo={ props.removeTodo }/>
        <EditButton id={_id} updateTodo={ props.updateTodo }/>

      </li>
      )
  })
    
    
}; // end Component


// ADD proptypes for validations

TodoItem.propTypes = { 
  addTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  todos: PropTypes.string.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired,
}

TodoItem.defaultProps ={
  addTodo: f=>f,
  removeTodo: f=>f,
  toggleTodo: f=>f,
  updateTodo: f=>f

}
export default TodoItem
