import React from 'react';
import TodoListItem from './TodoListItem';

export default class TodoList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      todolistItem: [],
      inputData: "",
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleSubmit(e) {
    const newArrForSubmit = this.state.todolistItem.slice().push(this.state.inputData);
    this.setState({
      // todolistItem: [...this.state.todolistItem, this.state.inputData],
      // CHECK : 불변성을 생각하면 이렇게 하는것이 맞는가?
      todolistItem: newArrForSubmit,
      inputData: "",
    })
    e.target.value = "";
    e.preventDefault();
  }
  
  handleChange(e){
    this.setState({
      inputData: e.target.value
    })
  }

  handleDelete(idx) {
    const newArr = this.state.todolistItem.slice().filter((item, index) => index !== idx);

    this.setState({
      todolistItem: newArr,
    })
  };

  render() {
    const item_for_render = this.state.todolistItem.map( (item, idx) => 
      (
        <TodoListItem id={idx} todoTitle={item} onClick={() => this.handleDelete(idx)} />
      )
    );
    return (
      <div>
        <h3>Its TodoList!</h3>

        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.inputData} onChange={this.handleChange}></input>
          <input type="submit" value="Submit"/>
        </form>

        {item_for_render}
      </div>
    )
  }
}
