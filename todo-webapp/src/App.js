import React, { Component } from "react";
import "./App.css";
import Child from "./components/Child";
import { Route } from "react-router-dom";
import PageOne from "./components/PageOne";
import PageTwo from "./components/PageTwo";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  componentDidMount() {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    this.setState({ todos: todos });
  }

  handleChange(e) {
    this.setState({ newTodo: e.target.value });
  }

  addTodo(newTodo) {
    const todos = this.state.todos;
    todos.push(newTodo);
    this.setState({ todos: todos });
    localStorage.setItem("todos", JSON.stringify(this.state.todos));
  }

  deleteTodo(index) {
    const todos = this.state.todos;
    todos.splice(index, 1);
    this.setState({ todos: todos });
    localStorage.setItem("todos", JSON.stringify(this.state.todos));
  }

  render() {
    return (
      <div>
        {/* add: 子から親
          addのタグ名は子から this.props.add で親の addTodoメソッドにバインドできる
          子に対してバインド情報を伝えることで子から親のメソッドを呼び出させるイメージ
        */}
        <TodoForm add={this.addTodo.bind(this)}></TodoForm>
        {/* todos: 親から子 del: 子から親 */}
        <TodoList
          todos={this.state.todos}
          del={this.deleteTodo.bind(this)}
        ></TodoList>
      </div>
    );
  }
}

export default App;
