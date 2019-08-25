import React, { Component } from "react";
import { connect } from "react-redux";

// import { postEvent } from "../actions";
import { Link } from "react-router-dom";

class EventsNew extends Component {
  render() {
    // const props = this.props;
    return <React.Fragment></React.Fragment>;
  }
}

const mapDispatchToProps = dispatch => ({
  // postEvents: () => dispatch(postEvents())
});

/* 以下のようにも記載可能だが、分かりづらい */
// const mapDispatchToProps = { increment, decrement };

/* states と actions を connect を使って関連付ける */
export default connect(
  null,
  mapDispatchToProps
)(EventsNew);
