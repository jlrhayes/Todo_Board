import React, { useState } from "react"
import AddBoard from "./AddBoard"
import BoardButton from "./BoardButton"

const Dashboard = () => {
    //need to move this into board dashboard
    const [boards, setBoards] = useState([])
    
    React.useEffect(() => { //gets board data
        getBoardData()
      }, []);

    const addBoard = async (newBoard) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newBoard),
          };
        await fetch('http://localhost:4000/boards/', requestOptions)
        getBoardData()
    }

    const getBoardData = () => {
        fetch("http://localhost:4000/boards")
          .then((res) => res.json())
          .then((data) => setBoards(data))
    }

    const deleteBoard = async (id) => {
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
          };
        await fetch('http://localhost:4000/boards/' + id, requestOptions)
        getBoardData()
    }

    return (
        
        <div className="flex flex-col items-center p-8 dash">
            <label className="text-xl font-bold mb-4">Dashboard</label>
            <AddBoard onAdd = {addBoard}></AddBoard>
            <div className="w-full grid grid-cols-3 lg:grid-cols-4">
                {boards.length > 0 ? boards.map((board) => (
                <BoardButton key = {board.id} board = {board} link = {"/boards/" + board.id} onDelete = {deleteBoard} />
                )) : 'There are no boards'}
            </div>
        </div>
    )
}

export default Dashboard
