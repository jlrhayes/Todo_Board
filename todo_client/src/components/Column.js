import Task from "./Task";
import AddColumn from "./AddColumn";
import { useState } from "react";

const Column = ({ column }) => {
    //need to find tasks under column id and add to task list
    const [tasks, setTasks] = useState([]);

    const addTask = (newTask) => {
        // Placeholder function
        // This should just send a POST request.
        console.log(newTask);
        setTasks([...tasks, newTask]);
    };
    return (
        <div>
            <header>{column.name}</header>
            {tasks.map((task) => (
                <Task className="task" key={task.id} task={task} />
            ))}
            <AddColumn onAdd={addTask} placeholder="Add Task"></AddColumn>
        </div>
    );
};

export default Column;
