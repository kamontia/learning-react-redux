import React, { Component } from "react";

class Child extends Component {
  addValueChild() {
    this.props.hey(100);
  }

  render() {
    return (
      <div>
        {this.props.pval}
        <button onClick={this.addValueChild.bind(this)}>Add</button>
      </div>
    );
  }
}

export default Child;
