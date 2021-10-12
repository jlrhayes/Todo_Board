import Task from "./Task";
import AddTask from "./AddTask";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { useState } from "react";

const Column = ({ column , onDelete}) => {
    //need to find tasks under column id and add to task list
    const [tasks, setTasks] = useState([]);

    const addTask = (newTask) => {
        // Placeholder function
        // This should just send a POST request.
        console.log(newTask);
        setTasks([...tasks, newTask]);
    };

    const getUsers = () => {
        return [
            { name: "bob", id: 1 },
            { name: "emily", id: 2 },
        ];
    };

    const editColumn = () => {
        console.log("edited");
    };

    return (
        <div>
            <div className="spartan border-red-50 flex justify-between items-center">
                <header>{column.title}</header>
                <div className="flex justify-between">
                    <button
                        className="delete-button submit"
                        onClick={onDelete}
                    >
                        <DeleteIcon fontSize="small" />
                    </button>
                    <button
                        className="delete-button submit"
                        onClick={editColumn}
                    >
                        <EditIcon fontSize="small" />
                    </button>
                </div>
            </div>
            {tasks.map((task) => (
                <Task className="task" key={task.id} task={task} />
            ))}
            <AddTask onAdd={addTask} users={getUsers()}></AddTask>
        </div>
    );
};

export default Column;
