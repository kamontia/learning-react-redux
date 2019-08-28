import React, { Component } from "react";
import { Link } from "react-router-dom";

class PageOne extends Component {
  toPageTwo() {
    this.props.history.push("/pagetwo");
  }

  render() {
    return (
      <div>
        <h3>PageOne</h3>
        <Link to="/pagetwo">PageTwo</Link>
        <button onClick={this.toPageTwo.bind(this)}>To PageTwo</button>
      </div>
    );
  }
}

export default PageOne;
