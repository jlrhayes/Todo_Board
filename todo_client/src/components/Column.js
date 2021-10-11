import Task from "./Task"
import { useState } from "react"


const Column = ({column}) => {
    //need to find tasks under column id and add to task list
    const [tasks,setTasks] = useState([])

    return (
        <div>
            <header>{column.name}</header>
            {tasks.map((task) => (<Task className = "task" key = {task.id} task = {task}/>))}
        </div>
        
    )
}

export default Column