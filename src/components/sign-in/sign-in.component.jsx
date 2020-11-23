import React, { Component } from "react";

import {Form, Button} from 'react-bootstrap'

import "./sign-in.styles.scss"

class SignIn extends Component {

  constructor(props){
    super(props);

    this.state = {
      email: '',
      password: '',
      error: ''
    }
  }

  handleOnChange = (event) => {

    const {name, value} = event.target;
    this.setState({[name]: value});

  }

  handleFormSubmit = async (event)=>{
    event.preventDefault();

  }
  render() {
    return (
      <div>
        <div className="h3">I already have an account</div>
        <span>Sign In with your email and password</span>
        {this.state.error.length === 0 ? null : <div>{this.state.error}</div>}
        <Form className="sign-in-form" onSubmit={this.handleFormSubmit}>
          <Form.Group controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email" value={this.state.email} size="lg" onChange={this.handleOnChange} />
          </Form.Group>
          <Form.Group controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" name="password" value={this.state.password} size="lg" onChange={this.handleOnChange}/>
          </Form.Group>

          <Button type="submit" size="lg" variant="outline-primary">Sign In</Button>
        </Form>
        <p className="h4">Other ways to SignIn with</p>
        <div className="other-options">
          <div class="btn btn-warning w-100">Sign In with Google</div>
        </div>
      </div>
    );
  }
}

export default SignIn;
