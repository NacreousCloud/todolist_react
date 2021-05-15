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
    console.log("Data Pushed : " + this.state.inputData);
    this.setState({
      todolistItem: [...this.state.todolistItem, this.state.inputData],
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

  handleDelete(e) {
    console.log("delete it!");
    console.log(e.target.value);
    const newResultArr = this.state.todolistItem.filter(item => {
      console.log(e);
      return true;
    })
    this.setState({
      todolistItem: this.state.todolistItem.filter(item => {
        console.log(item + " ? " + e.target.value);
        return item !== e.target.value;
      }),
    })
  };

  render() {
    const item_for_render = this.state.todolistItem.map( (item, idx) => 
      (
        <TodoListItem todoTitle={item} deleteIt={this.handleDelete} />
      )
      // (<div>
      //   <span>{item}</span>
      //   <span className="DeleteIt">X</span>
      // </div>)
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
