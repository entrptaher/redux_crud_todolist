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
import TodoForm from '../containers/TodoForm';
import TodoItem from '../containers/TodoItem';
import TodoList from '../containers/TodoList';

// ============ FUNCTIONS ============ 
import { 
  addTodo, 
  removeTodo,
  toggleTodo,
  updateTodo,
  updateRank,
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

        <TodoList 
          todoArray=  { this.props.todoArray }
          removeTodo= { this.props.removeTodo }
          toggleTodo= { this.props.toggleTodo }
          updateRank= { this.props.updateRank }
          updateTodo= { this.props.updateTodo }
        />

      </div>
    );
  }
}; // end Class

// ===========================================================

const mapStateToProps =(state) => {
  return {
    todoArray: state.todos
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
      dispatch(toggleTodo(id))
    },
    updateRank: (id, rank) => {
      dispatch(updateRank(id,rank))
    },
    updateTodo: (id, task) => {
      dispatch(updateTodo(id,task))
    },
  };
}; // end const

// ===========================================================

App.propTypes = { 
  addTodo:    PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  updateRank: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired,
}

App.defaultProps ={
  addTodo:    f=>f,
  removeTodo: f=>f,
  toggleTodo: f=>f,
  updateRank: f=>f,
  updateTodo: f=>f,
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
