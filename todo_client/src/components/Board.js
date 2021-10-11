import Column from "./Column";
import AddColumn from "./AddColumn";
import { useState } from "react";

const Board = () => {
    //need to move this into board dashboard
    const [columns, setColumns] = useState([]);

    const addColumn = (newColumn) => {
        console.log(newColumn);
        setColumns([...columns, newColumn]);
    };
    return (
        <div className="board">
            {columns.map((column) => (
                <Column className="column" key={column.id} column={column} />
            ))}
            <AddColumn onAdd={addColumn} placeholder="Column Name"></AddColumn>
        </div>
    );
};

export default Board;
