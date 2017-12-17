import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../assets/logo.svg';
import './App.css';
import PropTypes from 'prop-types'

// ============ COMPONENTS ============ 
// import { Button, Row, Col } from 'react-bootstrap'
// bootstrap not working...
import Checkbox from '../containers/Checkbox';
import DeleteBtn from '../containers/DeleteBtn';
import EditButton from '../containers/EditButton';
import TodoList from '../containers/TodoList';
import TodoForm from '../containers/TodoForm';

// ============ FUNCTIONS ============ 
import { 
  addTodo, 
  removeTodo,
  updateTodo,
  toggleTodo,
  } from '../actions/todoActions'
  
// ===================================
class App extends Component {

  // constructor(props) {
  //   super(props)
  // }

  render() {

    // create a default format for today's date
    const getDay = (date) => {
      let year = date.getFullYear();
      let month = date.getMonth()+1;
      let day = date.getDate();
      let fullDate =[]
      return [...fullDate, year, month, day].join("-")
    }
    const _today = getDay(new Date())

    // create the todo list items
    const todoList = this.props.todo.map(task => {
      let _id = task.id
      
      return (
        <li key={_id} style= {
          {textDecoration: task.complete ? "line-through" : "none", color: task.complete ? "lightgrey": "steelblue"}
        }> 

          <Checkbox id= {_id} 
            toggleTodo= { this.props.toggleTodo }
            />..    
          {task.task} ..... 
          {task.rank} .....
          {task.date} 
          <DeleteBtn id={_id} removeTodo={ this.props.removeTodo }/>
          <EditButton id={_id} updateTodo={ this.props.updateTodo }/>

        </li>
        )
    })
    
    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React/Redux Todo List</h1>
        </header>

          <p> Todays Date: { _today } </p>

        <TodoForm 
          addTodo = { this.props.addTodo }
          _today = { _today } 
        />

        <TodoList todoList = { todoList } />

      </div>
    );
  }
}; // end Class

const mapStateToProps =(state) => {
  return {
    todo: state.todos
  };
}; // end const

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (task, rank, date) => {
      dispatch(addTodo(task, rank, date)) 
    },
    removeTodo: (id) => {
      dispatch(removeTodo(id))
    },
    updateTodo: (id, task) => {
      dispatch(updateTodo(id,task))
    },
    toggleTodo: (id) => {
      dispatch(toggleTodo(id))
    },
  };
}; // end const

// ADD proptypes for validations

App.propTypes = { 
  addTodo: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired
}

App.defaultProps ={
  addTodo: f=>f,
  removeTodo: f=>f,
  toggleTodo: f=>f,
  updateTodo: f=>f

}
export default connect(mapStateToProps, mapDispatchToProps)(App);
