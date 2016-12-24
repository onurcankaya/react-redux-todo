import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import TodoApp from 'TodoApp';
import { setSearchText, addTodo, addTodos, toggleShowCompleted, toggleTodo } from 'actions';
const store = require('configureStore').configure();
const TodoAPI = require('TodoAPI');

import './../playground/firebase/index';


store.subscribe(() => {
  const state = store.getState();
  console.log('New state', state);
  TodoAPI.setTodos(state.todos);
});

const initialTodos = TodoAPI.getTodos();
store.dispatch(addTodos(initialTodos));

// Load foundation
$(document).foundation();

// CSS
import css from 'style!css!sass!applicationStyles';

ReactDOM.render(
  <Provider store={store}>
    <TodoApp/>
  </Provider>,
  document.getElementById('app')
);
