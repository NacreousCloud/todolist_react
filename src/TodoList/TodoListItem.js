import React from 'react';

export default class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {this.props.todoTitle}
        <span onClick={this.props.deleteIt}>X</span>
      </div>

    )
  }
}