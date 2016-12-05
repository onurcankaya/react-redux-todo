import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import TodoApp from 'TodoApp';

// Load foundation
$(document).foundation();

// CSS
import css from 'style!css!sass!../styles/index.scss';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={TodoApp}>

    </Route>
  </Router>,
  document.getElementById('app')
);
