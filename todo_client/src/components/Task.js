import './Task.css';

const Task = ({task}) => {
    //need to find tasks under column id and add to task list
    return (
        <div className="task">
            <h3 className="font-bold text-lg">{task.name}</h3>
            <h4>
                {task.description}
            </h4>
                {task.user}
        </div>
    )
}

export default Task
