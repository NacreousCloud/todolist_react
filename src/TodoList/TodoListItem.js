import React from 'react';

export default class TodoListItem extends React.Component {
  render() {
    return (
      <div id={this.props.id}>
        {this.props.todoTitle}
        <span onClick={this.props.onClick}>X</span>
      </div>
    )
  }
}