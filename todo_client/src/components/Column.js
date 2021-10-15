import Task from "./Task";
import AddTask from "./AddTask";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import React, { useState } from "react";
import AddColumn from "./AddColumn";

/**
 * A column component that refers to the AddColumn, AddTask and Task components in its output.
 * @param {object} column <description>
 * @param {object} onDelete <description>
 * @param {object} onEdit <description>
 * @returns {element} An element
 */
const Column = ({ column, onDelete, onEdit, allColumns}) => {
    //need to find tasks under column id and add to task list
    const [tasks, setTasks] = useState([]);
    const [edit, setShowEdit] = useState(false);

    

    const addTask = async (newTask) => {
        newTask["columnId"] = column.id;
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newTask),
        };
        await fetch(
            `http://localhost:4000/tasks`,
            requestOptions
        );
        
        getTasks();
    };

    const getTasks = () => {
        fetch(`http://localhost:4000/columns/${column.id}/tasks`)
            .then((res) => res.json())
            .then((data) => setTasks(data))
            .catch((e) => console.log(e));     
    };

    const deleteTask = async (id) => {
        const requestOptions = { method: "DELETE" };
        const response = await fetch(
            `http://localhost:4000/tasks/${id}`,
            requestOptions
        );
        if (response.ok){
            getTasks();
        }
    }; 

    const editTaskColumn = async (id,newColumnId) => {
        let obj = {columnId : newColumnId}
        const requestOptions = {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(obj),
        };
        const response = await fetch(
            `http://localhost:4000/tasks/${id}/changeColumn`,
            requestOptions
        );
        if (response.ok){
            getTasks()
        }
    };

    const editColumn = async (updatedColumn) => {
        console.log(updatedColumn);
        const requestOptions = {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedColumn),
        };
        await fetch(
            `http://localhost:4000/columns/${column.id}`,
            requestOptions
        );
        onEdit();
        setShowEdit(false);
    };

    React.useEffect(() => {
        getTasks()
      }, []);

    return (
        <div className="w-96 mx-8 justify-self-center">
            <div className="spartan border-red-50 flex justify-between items-center">
                {edit ? (
                    <AddColumn
                        onAdd={editColumn}
                        placeholder="Column Name"
                    ></AddColumn>
                ) : (
                    <header>{column.title}</header>
                )}
                <div className="flex justify-between">
                    <button className="delete-button submit" onClick={onDelete}>
                        <DeleteIcon fontSize="small" />
                    </button>
                    <button
                        className="delete-button submit"
                        onClick={() => setShowEdit(true)}
                    >
                        <EditIcon fontSize="small" />
                    </button>
                </div>
            </div>
            {tasks.map((task) => (
                <Task
                    className="task"
                    key={task.id}
                    task={task}
                    allColumns = {allColumns}
                    onEdit={() => getTasks()}
                    changeColumn  = {(newColumnId) => editTaskColumn(task.id,newColumnId)}
                    onDelete={() => deleteTask(task.id)}
                />
            ))}
            <AddTask heading={"New Task"} onAdd={addTask}></AddTask>
        </div>
    );
};

export default Column;
