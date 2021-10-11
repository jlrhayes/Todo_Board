import React, { useState } from "react";
import "./Login.css";

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            submitted: false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({ submitted: true });
    }

    render() {
        const { username, password } = this.state;

        return (
            <div className="form-wrapper">
                <h2>Login</h2>
                <form name="login" onSubmit={this.handleSubmit}>
                    <label>
                        Username:
                        <input
                            name="username"
                            type="text"
                            value={username}
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
