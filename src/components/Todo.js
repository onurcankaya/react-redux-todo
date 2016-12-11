import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleTodo } from 'actions';
import moment from 'moment';

export class Todo extends Component {
  render() {
    let { id, text, completed, createdAt, completedAt, dispatch } = this.props;
    let todoClassName = completed ? 'todo todo-completed' : 'todo';
    let renderDate = () => {
      let message = 'Created ';
      let timeStamp = createdAt;

      if (completed) {
        message = 'Completed ';
        timeStamp = completedAt;
      }

      return message + moment.unix(timeStamp).format('MMMM D, YYYY @ h:mm a');
    };

    return (
      <div className={todoClassName} onClick={() => {
          dispatch(toggleTodo(id));
        }}>

        <div>
          <input type="checkbox" defaultChecked={completed} />
        </div>
        <div>
          <p>{text}</p>
          <p className="todo__subtext">{renderDate()}</p>
        </div>
      </div>
    );
  }
}

export default connect()(Todo);
