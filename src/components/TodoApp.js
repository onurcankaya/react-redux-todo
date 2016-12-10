import React, { Component } from 'react';
import uuid from 'uuid';
import moment from 'moment';

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
import TodoAPI from 'TodoAPI';

export default class TodoApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showCompleted: false,
      searchText: '',
      todos: TodoAPI.getTodos()
    };
  }

  componentDidUpdate() {
    TodoAPI.setTodos(this.state.todos);
  }

  handleSearch(showCompleted, searchText) {
    this.setState({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    });
  }

  handleAddTodo(text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text,
          completed: false,
          createdAt: moment().unix(),
          completedAt: null
        }
      ]
    });
  }

  render() {
    const {todos, showCompleted, searchText} = this.state;
    const filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

    return (
      <div>
        <h1 className="page-title">Todos</h1>
        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <TodoSearch onSearch={this.handleSearch.bind(this)} />
              <TodoList />
              <AddTodo onAddTodo={this.handleAddTodo.bind(this)} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
