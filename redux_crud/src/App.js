import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from './logo.svg';
import './App.css';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

import * as todoAction from './actions/todoActions'

// const todo


class App extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    // const todoList = f=>f
    
    const todoArray = this.props.todo
    console.log("===> Here's the array: ", todoArray)
    
    const todoList = todoArray.map(task => {
      return <li>{task.item} |  {task.rank}</li>
    })
    console.log("===> Here's the list: ", todoList)
    
    const Myname = "Props passed from Parent APP"


    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <TodoList todoList = {todoList} name={Myname} />
        <TodoForm/>

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

export default connect(mapStateToProps, mapDispatchToProps)(App);
