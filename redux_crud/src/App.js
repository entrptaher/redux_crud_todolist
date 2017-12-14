import React, { Component } from 'react';
import { connect } from 'react-redux';

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
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <TodoList name={"test name"} />
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
