import Column from "./Column";
import AddColumn from "./AddColumn";
import React, { useState } from "react";
import "./Board.css";
import { Link } from "react-router-dom";

/**
 * A board component that refers to the Column and AddColumn components in its output.
 * @returns {element} An element
 */
const Board = () => {
  //need to move this into board dashboard
  const boardId = window.location.pathname;
  const [columns, setColumns] = useState([]);

  React.useEffect(() => {
    //gets board data
    getColumnData();
  }, []);

  const addColumn = async (newColumn) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newColumn),
    };
    await fetch(
      "http://localhost:4000" + boardId + "/columns/",
      requestOptions
    );
    getColumnData();
  };

  const getColumnData = () => {
    fetch("http://localhost:4000" + boardId + "/columns/")
      .then((res) => res.json())
      .then((data) => setColumns(data));
  };

  const deleteColumn = async (id) => {
    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    };
    await fetch(
      "http://localhost:4000" + boardId + "/columns/" + id,
      requestOptions
    );
    getColumnData();
  };

  return (
    <div className="board board-md board-lg">
      {columns.map((column) => (
        <Column
          className="column"
          key={column.id}
          allColumns = {columns}
          column={column}
          onEdit={() => getColumnData()}
          onDelete={() => deleteColumn(column.id)}
        />
      ))}
      <AddColumn onAdd={addColumn} placeholder="Column Name"></AddColumn>
    </div>
  );
};

export default Board;
