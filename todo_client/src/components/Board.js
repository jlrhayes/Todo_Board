import Column from "./Column";
import Submit from "./Submit";
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
            <Submit onAdd={addColumn} placeholder="Column Name"></Submit>
        </div>
    );
};

export default Board;
