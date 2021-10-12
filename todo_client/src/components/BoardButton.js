import {FaTimes} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import './BoardButton.css'


const BoardButton = ({board, onDelete, link}) => {
    return (
        <div className = 'board-btn'>
            <h3>{board.title} 
                <div>
                    <Link to = {link}>
                        <button>Click to View</button>
                    </Link>
                    <FaTimes onClick = {() => onDelete(board.id)}  style = {{color : 'red', cursor : 'pointer'}} />
                </div>
            </h3>
        </div>
    )
}

export default BoardButton