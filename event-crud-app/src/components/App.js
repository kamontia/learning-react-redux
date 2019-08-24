import React, { Component } from "react";
import { connect } from "react-redux";

import { increment, decrement } from "../actions";

class App extends Component {
  render() {
    const props = this.props;
    return (
      <React.Fragment>
        <div>count:{props.value}</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({ value: state.count.value });
const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(increment()),
  decrement: () => dispatch(decrement())
});

/* 以下のようにも記載可能だが、分かりづらい */
// const mapDispatchToProps = { increment, decrement };

/* states と actions を connect を使って関連付ける */
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);