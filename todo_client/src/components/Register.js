import React, { useState } from "react";
import "./Login.css";

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
      email: "",
      avatarUrl: "",
      isAdmin: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch("/users", {
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

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { name, email, avatarUrl, password, isAdmin } = this.state;
    return (
      <div className="form-wrapper">
        <h2>Register</h2>
        <form name="register" onSubmit={this.handleSubmit}>
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
            Email:
            <input
              name="email"
              type="email"
              value={email}
              onChange={this.handleChange}
              required
            />
          </label>
          <label>
            Avatar URL:
            <input
              name="avatarUrl"
              type="url"
              value={avatarUrl}
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
          <label>
            Is Admin?:
            <input
              type="checkbox"
              id="isAdmin"
              name="isAdmin"
              value={isAdmin}
              onChange={this.handleChange}
            ></input>
          </label>
          <input className="submit" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
