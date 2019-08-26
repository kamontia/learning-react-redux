import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { getEvent, deleteEvent, putEvent } from "../actions";

import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";

class EventsShow extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    if (id) this.props.getEvent(id);
  }

  renderField(field) {
    const {
      input,
      label,
      type,
      meta: { touched, error }
    } = field;

    return (
      <TextField
        hintText={label}
        floatingLabelText={label}
        type={type}
        errorText={touched && error}
        {...input}
        fullWidth={true}
      ></TextField>
    );
  }

  async onDeleteClick() {
    const { id } = this.props.match.params;
    await this.props.deleteEvent(id);
    this.props.history.push("/");
  }

  async onSubmit(values) {
    await this.props.putEvent(values);
    this.props.history.push("/");
  }

  render() {
    /*
      pristine: フォームが空だとTrue
      submitting: Submit状態だとTrue
    */
    const { handleSubmit, pristine, submitting, invalid } = this.props;
    const style = { margin: 12 };
    return (
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <div>
          <Field
            label="Title"
            name="title"
            type="text"
            component={this.renderField}
          />
          <Field
            label="Body"
            name="body"
            type="text"
            component={this.renderField}
          />
        </div>
        <RaisedButton
          label="Submit"
          type="submit"
          style={style}
          disabled={pristine || submitting || invalid}
        />
        <RaisedButton
          label="Cancel"
          style={style}
          containerElement={<Link to="/"></Link>}
        />
        <RaisedButton
          label="Delete"
          style={style}
          onClick={this.onDeleteClick}
        />
        <Link to="/" onClick={this.onDeleteClick} />
      </form>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const event = state.events[ownProps.match.params.id];
  return { initialValues: event, state };
};

const mapDispatchToProps = dispatch => ({
  deleteEvent: values => dispatch(deleteEvent(values)),
  getEvent: id => dispatch(getEvent(id)),
  putEvent: id => dispatch(putEvent(id))
});

/* 上記のシンタックスシュガー */
// const mapDispatchToProps = { deleteEvent, getEvent };

const validate = values => {
  const errors = {};

  if (!values.title) errors.title = "Enter a title";
  if (!values.body) errors.body = "Enter a body";

  return errors;
};

/* states と actions を connect を使って関連付ける */
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  // enableReinitialize:
  reduxForm({ validate, form: "eventShowForm", enableReinitialize: true })(
    EventsShow
  )
);
