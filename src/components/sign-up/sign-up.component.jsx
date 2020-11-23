import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

import "./sign-up.styles.scss";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",

      email_error: "",
      password_error: "",
    };
  }

  handleOnChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleFormSubmit = async (event) => {
    event.preventDefault();
  };
  render() {
    return (
      <div className="sign-up">
        <div class="h2">I dont have an account</div>
        <div>Fill up details to register an account</div>

        <div class="errors">
          <p>{this.state.email_error}</p>
          <p>{this.state.password_error}</p>
        </div>

        <Form className="sign-up-form" onSubmit={this.handleFormSubmit}>
          <Form.Group controlId="formGroupUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Username"
              name="username"
              value={this.state.username}
              onChange={this.handleOnChange}
              size="lg"
            />
          </Form.Group>

          <Form.Group controlId="formGroupEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email"
              name="email"
              value={this.state.email}
              onChange={this.handleOnChange}
              size="lg"
            />
          </Form.Group>

          <Form.Group controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Password"
              name="password"
              value={this.state.password}
              onChange={this.handleOnChange}
              size="lg"
            />
          </Form.Group>

          <Form.Group controlId="formGroupConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Password Again"
              name="confirmPassword"
              value={this.state.confirmPassword}
              onChange={this.handleOnChange}
              size="lg"
            />
          </Form.Group>

          <Button variant="warning" size="lg" className="text-center">
            Register
          </Button>
        </Form>
      </div>
    );
  }
}

export default SignUp;
