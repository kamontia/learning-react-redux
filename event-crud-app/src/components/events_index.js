import React, { Component } from "react";
import { connect } from "react-redux";

import { readEvents } from "../actions";
import _ from "lodash";
import { Link } from "react-router-dom";

class EventsIndex extends Component {
  componentDidMount() {
    this.props.readEvents();
  }

  renderEvents() {
    return _.map(this.props.events, event => (
      <tr>
        <td>{event.id}</td>
        <td>{event.title}</td>
        <td>{event.body}</td>
      </tr>
    ));
  }

  render() {
    return (
      <React.Fragment>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>

          <tbody>{this.renderEvents()}</tbody>
        </table>

        <Link to="/events/new">NewEvents</Link>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({ events: state.events });
const mapDispatchToProps = dispatch => ({
  readEvents: () => dispatch(readEvents())
});

/* 以下のようにも記載可能だが、分かりづらい */
// const mapDispatchToProps = { increment, decrement };

/* states と actions を connect を使って関連付ける */
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventsIndex);
