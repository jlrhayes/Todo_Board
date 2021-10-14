import Task from "./Task";
import AddTask from "./AddTask";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import React, { useState } from "react";

const Column = ({ column , onDelete, allColumns}) => {
    //need to find tasks under column id and add to task list
    const [tasks, setTasks] = useState([]);

    

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

    React.useEffect(() => {
        getTasks()
      }, []);


    const editColumn = () =>{
        console.log('edited')
    } 

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
                deleteTask={() => deleteTask(task.id)} allColumns = {allColumns} changeColumn  = {(newColumnId) => editTaskColumn(task.id,newColumnId)} />
            ))}
            <AddTask onAdd={addTask}></AddTask>
        </div>
    );
};

export default Column;
