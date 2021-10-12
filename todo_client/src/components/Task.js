import React, { useState } from "react";
import "./Task.css";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

const Task = ({ task }) => {
    //need to find tasks under column id and add to task list
    const [user, setUser] = useState([]);

    React.useEffect(() => {
        getUser();
    }, []);

    const getUser = () => {};

    async function deleteTask(id) {}

    function editTask() {}

    return (
        <div className="task">
            <h3 className="font-bold text-lg">{task.title}</h3>
            <h4>{task.description}</h4>
            User: {task.userId}
            <div className="flex flex-row justify-end">
                <button
                    className="delete-button submit"
                    onClick={deleteTask(task.id)}
                >
                    <DeleteIcon fontSize="small" />
                </button>
                <button
                    className="delete-button submit"
                    onClick={editTask(task.id)}
                >
                    <EditIcon fontSize="small" />
                </button>
            </div>
        </div>
    );
};

export default Task;
