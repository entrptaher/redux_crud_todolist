import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from './logo.svg';
import './App.css';

import Todo from './components/Todo';
import * as todoAction from './actions/todoActions'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h3> {this.props.todo[0].item} </h3>
        <Todo todoList ={this.props.todo[0].item}  name={"test name"} />
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
