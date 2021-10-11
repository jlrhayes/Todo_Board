import Column from "./Column";
import AddColumn from "./AddColumn";
import { useState } from "react";
import './Board.css';

const Board = () => {
    //need to move this into board dashboard
    const [columns, setColumns] = useState([]);

    const addColumn = (newColumn) => {
        console.log(newColumn);
        setColumns([...columns, newColumn]);
    };
    return (
        <div className="board board-md board-lg">
            {columns.map((column) => (
                <Column className="column" key={column.id} column={column} />
            ))}
            <AddColumn onAdd={addColumn} placeholder="Column Name"></AddColumn>
        </div>
    );
};

export default Board;
