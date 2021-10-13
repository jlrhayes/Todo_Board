import Task from "./Task";
import AddTask from "./AddTask";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import React, { useState } from "react";

const Column = ({ column , onDelete}) => {
    //need to find tasks under column id and add to task list
    const [tasks, setTasks] = useState([]);

    React.useEffect(() => {
        getTasks()
      }, []);

    const addTask = async (newTask) => {
        newTask["columnId"] = column.id;
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newTask),
        };
        await fetch(
<<<<<<< HEAD
            `http://localhost:4000/tasks`,
=======
            `http://localhost:4000/boards/${column.boardId}/columns/${column.id}/tasks`,
>>>>>>> modal
            requestOptions
        );
        getTasks();
    };

    const getTasks = () => {
<<<<<<< HEAD
        fetch(`http://localhost:4000/columns/${column.id}/tasks`)
=======
        fetch(`http://localhost:4000/boards/${column.boardId}/columns/${column.id}/tasks`)
>>>>>>> modal
            .then((res) => res.json())
            .then((data) => setTasks(data))
            .catch((e) => console.log(e));
    };

    const getUsers = () => {
        return [
            { name: "bob", id: 1 },
            { name: "emily", id: 2 },
        ];
    };

    const deleteTask = async (id) => {
        const requestOptions = { method: "DELETE" };
        await fetch(
            `http://localhost:4000/tasks/${id}`,
            requestOptions
        );
        getTasks();
    };

    const editColumn = () => {
        console.log("edited");
    };

    return (
        <div className="w-96 mx-8 justify-self-center">
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
                <Task className="task" key={task.id} task={task} 
                deleteTask={() => deleteTask(task.id)} />
            ))}
            <AddTask onAdd={addTask} users={getUsers()}></AddTask>
        </div>
    );
};

export default Column;
