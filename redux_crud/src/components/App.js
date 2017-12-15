import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../assets/logo.svg';
import './App.css';
import PropTypes from 'prop-types'

// ============ COMPONENTS ============ 
import { Button, Row, Col } from 'react-bootstrap'
// bootstrap not working...
import Checkbox from '../containers/Checkbox';
import DeleteBtn from '../containers/DeleteBtn';
import TodoList from '../containers/TodoList';
import TodoForm from '../containers/TodoForm';

// ============ FUNCTIONS ============ 
import { addTodo, removeTodo,toggleTodo } from '../actions/todoActions'

  
// ===================================
class App extends Component {

  constructor(props) {
    super(props)
  }

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
        <li key={_id}> 

          {_id} ..
          <Checkbox id={_id} toggleTodo={ this.props.toggleTodo }/>..    
          {task.task} ..... 
          {task.rank} .....
          {task.date} 
          <DeleteBtn id={_id} removeTodo={ this.props.removeTodo } />

        </li>
        )
    })
    
    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <h1> React/Redux Todo List</h1>

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
    todo: state.todoReducer
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
    toggleTodo: (id) => {
      dispatch(removeTodo(id))
    },
  };
}; // end const

// ADD proptypes for validations

App.propTypes = { 
  addTodo: PropTypes.func.isRequired,
  // updateTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired
}

App.defaultProps ={
  addTodo: f=>f,
  removeTodo: f=>f,
  toggleTodo: f=>f
  // updateTodo: f=>f

}
export default connect(mapStateToProps, mapDispatchToProps)(App);
