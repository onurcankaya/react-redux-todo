import React, { Component } from 'react';

export default class AddTodo extends Component {
  onFormSubmit(e) {
    e.preventDefault();

    let todoText = this.refs.todoText.value;

    if (todoText.length > 0) {
      this.refs.todoText.value = '';
      this.props.onAddTodo(todoText);
    } else {
      this.refs.todoText.focus();
    }
  }

  render() {
    return (
      <div className="container__footer">
        <form ref="form" onSubmit={this.onFormSubmit.bind(this)}>
          <input type="text" ref="todoText" placeholder="What do you need to do?" />
          <button className="button expanded">Add todo</button>
        </form>
      </div>
    );
  }
}
