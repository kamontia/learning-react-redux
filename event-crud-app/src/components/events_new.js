import React, { Component } from "react";
import { connect } from "react-redux";

import { Field, reduxForm } from "redux-form";

import { postEvents } from "../actions";
import { Link } from "react-router-dom";

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
      <div>
        {/* touched: 一度でもクリックするとTrueとなる */}
        <input {...input} placeholder={label} type={type} />
        {touched && error && <span>{error}</span>}
      </div>
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
        <div>
          <input
            type="submit"
            value="Submit"
            disabled={pristine || submitting || invalid}
          ></input>
          <Link to="/">Cancel</Link>
        </div>
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
