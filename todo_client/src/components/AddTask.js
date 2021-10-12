import React from "react";
import "./AddTask.css";

export default class AddTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            description: "",
            user: "",
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
        const task = this.state;
        this.props.onAdd(task);
        this.setState({ submitted: true });
    }

    render() {
        const { name, description } = this.state;

        return (
            <div className="task-form form-wrapper">
                <h2 className="font-bold text-xl mx-2">New Task</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Task:
                        <input
                            name="name"
                            type="text"
                            placeholder="Task"
                            value={name}
                            onChange={this.handleChange}
                        />
                    </label>
                    <label>
                        Description:
                        <input
                            name="description"
                            type="text"
                            placeholder="Description"
                            value={description}
                            onChange={this.handleChange}
                        />
                    </label>
                    <label>
                        User:
                        <select name="user" onChange={this.handleChange}>
                            {this.props.users.map((user) => (
                                <option value={user.id}>{user.name}</option>
                            ))}
                        </select>
                    </label>
                    <input className="submit" type="submit" value="submit" />
                </form>
            </div>
        );
    }
}
