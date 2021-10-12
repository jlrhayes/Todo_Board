const Task = ({task}) => {
    //need to find tasks under column id and add to task list
    return (
        <div>
            <h3>{task.name}
            <h4>
                {task.description}
            </h4>
                {task.user}
            </h3>
        </div>
    )
}

export default Task
