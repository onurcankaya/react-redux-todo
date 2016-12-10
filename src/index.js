import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import TodoApp from 'TodoApp';

import { setSearchText, addTodo, toggleShowCompleted, toggleTodo } from 'actions';
import reducers from 'reducers';
const store = require('configureStore').configure();

store.subscribe(() => {
  console.log('New state', store.getState());
});

store.dispatch(addTodo('Clean the kitchen'));
store.dispatch(setSearchText('kitchen'));
store.dispatch(toggleShowCompleted());

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
