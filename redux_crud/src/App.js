import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Row, Col } from 'react-bootstrap'

import logo from './logo.svg';
import './App.css';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

import * as todoAction from './actions/todoActions'

class App extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    
    const todoArray = this.props.todo
    // console.log("===> Here's the array: ", todoArray)
    
    const todoList = todoArray.map(task => {
      return (
        <li> {task.item} ..... {task.rank} <Button> delete </Button>   </li>
        )
    })
    // console.log("===> Here's the list: ", todoList)
    
    const ListTitle = "My first React / Redux Todo list "

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <h1> {ListTitle} </h1>
          <TodoForm/>
          <TodoList todoList = {todoList} addTodo = {this.props.addTodo}/>

      </div>
    );
  }
}

const mapStateToProps =(state) => {
  return {
    todo: state.todoReducer
  };
};

const mapDispatchToProps = (dispatch) => {

  return {
    addTodo: () => { todoAction.addTodo()}
  };
};

// ADD proptypes for validations

export default connect(mapStateToProps, mapDispatchToProps)(App);
