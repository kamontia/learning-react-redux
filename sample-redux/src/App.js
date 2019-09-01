import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, decrement } from "./actions/counterActions";

class App extends Component {
  render() {
    return (
      <div>
        Clicked:{this.props.count} items.
        <button onClick={this.props.increment}>+</button>
        <button onClick={this.props.decrement}>-</button>
      </div>
    );
  }
}

/*
  Q. 何をしているのか？
  A. ReduxのStateとReactのPropsをマッピングしている。
     そうすることで、 { this.props.count } で Reduxの`state`にprops経由でアクセス可能
*/
const mapStateToProps = state => {
  return {
    count: state
  };
};

/*
  Q. 何をしているのか？
  A. ReduxのActionとReactのPropsをマッピングしている。
     そうすることで、 { this.props.increment } で ReduxのAction:incrementにprops経由でdispatchが可能
*/
const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
