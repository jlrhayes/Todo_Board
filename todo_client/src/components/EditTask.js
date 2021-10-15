import React from "react";
import "./AddTask.css";

/**
 * Class to edit tasks
 */
class EditTask extends React.Component {
    constructor(props) {
        super(props);
         /** 
         * @property {object} state state Stores property values that belongs to the component
        */
        this.state = props.task;
         /** 
         * @property {boolean} state.submitted  <description>
        */
        this.state.submitted = false;
         /** 
         * @property {function} handleChange Binding handleChange function to class instance
        */
        this.handleChange = this.handleChange.bind(this);
         /** 
         * @property {function} handleSubmit Binding handleSubmit function to class instance
        */
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit(event) {
        event.preventDefault();
        const { title, description, userId, columnId } = this.state;
        this.props.onAdd({ title, description, userId, columnId });
        this.setState({ submitted: true });
    }

    render() {
        const { title, description } = this.state;

        return (
                <form className="w-min" onSubmit={this.handleSubmit}>
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
                    <input className="submit w-min" type="submit" value="submit" />
                </form>
        );
    }
}

export default EditTask;
