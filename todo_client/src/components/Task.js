import React, { useState } from "react";
import "./Task.css";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import EditTask from "./EditTask";

/**
 * The task component returns two buttons - the edit and delete buttons.
 * It also allows the user to make HTTP requests.
 * @param {object} task - An object containing all the properties of a task.
 * @param {function} onDelete - Callback to be triggered when delete button is clicked. 
 * @param {function} onEdit - Callback to be triggered when the edit button is clicked.
 * @returns {element} An element
 */

const Task = ({ task, onDelete, onEdit, allColumns, changeColumn  }) => {
    //need to find tasks under column id and add to task list
    const [user, setUser] = useState([]);
    const [edit, setShowEdit] = useState(false);

    React.useEffect(() => {
        getUser();
    },[]);

    const getUser = () => {
        fetch(`http://localhost:4000/users/${task.userId}`)
            .then((res) => res.json())
            .then((data) => setUser(data));
    };

    const editTask = async (editedTask) => {
        const requestOptions = {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(editedTask),
        };
        await fetch(
            `http://localhost:4000/tasks/${task.id}`,
            requestOptions
        );
        onEdit();
        setShowEdit(false);
    };

    return (
        <div className="task">
            {edit ? (
                <EditTask onAdd={editTask} task={task} />
            ) : (
                <TaskDetails task={task} user={user} onChange = {(e) => changeColumn(e.target.value)} allColumns = {allColumns} />
            )}
            <div className="flex flex-row justify-end">
                <button className="delete-button submit" onClick={onDelete}>
                    <DeleteIcon fontSize="small" />
                </button>
                <button className="delete-button submit" onClick={() => setShowEdit(!edit)}>
                    <EditIcon fontSize="small" />
                </button>
            </div>
        </div>
    );
};

const TaskDetails = ({ task, user, onChange, allColumns }) => {
    return (
        <div className="flex flex-col">
            <h3 className="font-bold text-lg">{task.title}</h3>
            <h4>{task.description}</h4>
            <div className="mx-0 flex flex-row items-center">
                <img className="w-8" src={user.avatarUrl} />
                {user.name}
            </div>
                <select
                    name="columnId"
                    value={task.columnId}
                    type="select"
                    onChange = {onChange}
                >
                    {allColumns.map((column) => (
                        <option value={column.id}>
                            {column.title}
                        </option>
                    ))}
                </select>
        </div>
    );
};

export default Task;
