import React, { Component } from 'react';
import moment from 'moment';

export default class Todo extends Component {
  render() {
    let {id, text, completed, createdAt, completedAt} = this.props;
    let todoClassName = completed ? 'todo todo-completed' : 'todo';
    let renderDate = () => {
      let message = 'Created ~ ';
      let timeStamp = createdAt;

      if (completed) {
        message = 'Completed ~ ';
        timeStamp = completedAt;
      }

      return message + moment.unix(timeStamp).format('MMMM D, YYYY @ h:mm a');
    };

    return (
      <div className={todoClassName} onClick={() => {
          this.props.onToggle(id)
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
