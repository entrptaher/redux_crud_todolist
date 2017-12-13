import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from './logo.svg';
import './App.css';

import Todo from './components/Todo';
// import * as todoAction from './actions/todoActions'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Todo />
      </div>
    );
  }
}

const mapStateToProps =(state) => {
  return {
    todo: state
  };
};

const mapDispatchToProps = (dispatch) => {

  return {
  // addTodo
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
