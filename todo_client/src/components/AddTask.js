import React from "react";

export default class AddTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            description: "",
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
            <div className="form-wrapper">
                <h2>New Task</h2>
                <form onSubmit={this.handleSubmit}>
                    <input
                        name="name"
                        type="text"
                        placeholder="Task"
                        value={name}
                        onChange={this.handleChange}
                    />
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
                    <input classname="submit" type="submit" value="submit" />
                </form>
            </div>
        );
    }
}
