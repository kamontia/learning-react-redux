import React, { Component } from "react";
import "./App.css";
import Child from "./components/Child";
import { Route } from "react-router-dom";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

class App extends Component {
  render() {
    return (
      <div>
        <h3>My Todo</h3>
        <Route path="/todos/add" component={TodoForm} exact={true}></Route>
        <Route path="/" component={TodoList} exact={true}></Route>
      </div>
    );
  }
}

export default App;
