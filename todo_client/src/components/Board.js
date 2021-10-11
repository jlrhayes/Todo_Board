import Column from "./Column"

const Board = ({columns}) => {
    return (
        <div className = "board">
            {columns.map((column) => (<Column className = "column" key = {column.id} column = {column}/>))}
        </div>
    )
}

export default Board