import React, { Component } from "react";
import "./App.css";

class ValidatedEmailInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTouched: false,
      value: "",
    };
    this.handleBlur = this.handleBlur.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  validate(value) {
    return this.state.isTouched
      ? value.length > 3 && value.includes("@")
      : true;
  }

  handleBlur() {
    return this.props.onSubmit(this.state.value)
  }

  handleChange(e) {
    return this.setState({
      isTouched: true,
      value: e.target.value,
    });
  }

  render() {
    const isValid = this.validate(this.state.value);
    return (
      <input
        style={{ borderColor: isValid ? "black" : "red" }}
        value={this.state.value}
        onChange={this.handleChange}
        onBlur={this.handleBlur}
      />
    );
  }
}

class Button extends Component {
  render() {
    return (
      <button disabled={this.props.isDisabled} onClick={this.props.onClick}>
        Submit
      </button>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "" };
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleEmailChange(email) {
    this.setState({ email });
  }

  handleSubmit() {
    const { email } = this.state;
    console.log(email);
    /* api call with email */
  }

  render() {
    return (
      <div>
        <ValidatedEmailInput onSubmit={this.handleEmailChange} />
        <Button onClick={this.handleSubmit}>submit</Button>
      </div>
    );
  }
}

export default App;
