import React from "react";
import "./AddTask.css";

export default class AddTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            title: "",
            description: "",
            userId: 1,
            submitted: false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
   }

    componentDidMount() {
        fetch(`http://localhost:4000/users`)
            .then((res) => res.json())
            .then((users) => this.handleChange(this.setState({ users })))
            .catch((e) => console.log(e));
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit(event) {
        event.preventDefault();
        const { title, description, userId, columnId } = this.state;
        this.props.onAdd({ title, description, userId });
        this.setState({ submitted: true });
    }

    render() {
        const { title, description, userId } = this.state;
 
        return (
            <div className="task-form form-wrapper">
                <h2 className="font-bold text-xl mx-2">New Task</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Task:
                        <input
                            name="title"
                            type="text"
                            placeholder="Task"
                            value={title}
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
                        <select
                            name="userId"
                            value={userId}
                            type="select"
                            onChange={this.handleChange}
                        >
                            {this.state.users.map((availableUser) => (
                                <option value={availableUser.id}>
                                    {availableUser.name}
                                </option>
                            ))}
                        </select>
                    </label>
                    <input className="submit" type="submit" value="submit" />
                </form>
            </div>
        );
    }
}
