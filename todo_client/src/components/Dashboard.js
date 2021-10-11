import { useState } from "react"
import Board from "./Board"
import AddBoard from "./AddBoard"
import Button from "./Button"


const Dashboard = () => {
    //need to move this into board dashboard
    const [boards, setBoards] = useState([])
    

    const addBoard = (newBoard) => {
        let obj = {id : 1, name : newBoard.name}
        setBoards([...boards,obj])
    }



    return (
        
        <div className = "dash">
            <label>Dashboard</label>
            {boards.map((board) => (
                <Button text = {'Access the board ' + board.name} link = {"/boards/" + board.id} />
            ))}
            <AddBoard onAdd = {addBoard}></AddBoard>
        </div>
    )
}

export default Dashboard