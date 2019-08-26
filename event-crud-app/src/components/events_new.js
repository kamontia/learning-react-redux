import React, { Component } from "react";
import { connect } from "react-redux";

import { Field, reduxForm } from "redux-form";

import { postEvents } from "../actions";
import { Link } from "react-router-dom";

import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";

class EventsNew extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
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

  async onSubmit(values) {
    await this.props.postEvents(values);
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
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  postEvents: values => dispatch(postEvents(values))
});

/* 以下のようにも記載可能だが、分かりづらい */
// const mapDispatchToProps = { postEvents };

const validate = values => {
  const errors = {};

  if (!values.title) errors.title = "Enter a title";
  if (!values.body) errors.body = "Enter a body";

  return errors;
};

/* states と actions を connect を使って関連付ける */
export default connect(
  null,
  mapDispatchToProps
)(reduxForm({ validate, form: "eventNewForm" })(EventsNew));
