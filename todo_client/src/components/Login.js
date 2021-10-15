import React, { useState } from "react";
import "./Login.css";

/**
 * Login Component that returns a form that requires the user to enter username and password.
 */
class Login extends React.Component {
  constructor(props) {
    super(props);
    /** 
     * @property {object} state state Stores property values that belongs to the component
    */
    this.state = {
      name: "",
      password: "",
    };
    /** 
     * @property {function} handleChange binding handleChange function to class instance
    */
    this.handleChange = this.handleChange.bind(this);
    /** 
     * @property {function} handleSubmit binding handleSubmit function to class instance
    */
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();

    fetch("/users/login", {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status === 200) {
          res
            .json()
            .then((body) =>
              localStorage.setItem("token", JSON.stringify(body.token))
            );
          window.location.href = "/";
        } else if (res.status === 400) {
          res.json().then((body) => alert(body.message));
        } else {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch((err) => {
        console.error(err);
        alert("Error logging in please try again");
      });
  }

  render() {
    const { name, password } = this.state;

    return (
      <div className="form-wrapper">
        <h2>Login</h2>
        <form name="login" onSubmit={this.handleSubmit}>
          <label>
            Username:
            <input
              name="name"
              type="text"
              value={name}
              onChange={this.handleChange}
              required
            />
          </label>
          <label>
            Password:
            <input
              name="password"
              type="password"
              value={password}
              onChange={this.handleChange}
              required
            />
          </label>
          <input className="submit" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Login;
