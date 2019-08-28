import React, { Component } from "react";

class TodoList extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     todos: [],
  //     newTodo: ""
  //   };
  // }

  deleteTodo(index) {
    this.props.del(index);
  }

  render() {
    return (
      <div>
        <h5>ToDo List</h5>
        <ul>
          {this.props.todos.map((todo, i) => {
            return (
              <li key={i}>
                {todo}
                <button onClick={this.deleteTodo.bind(this, i)}>X</button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default TodoList;
