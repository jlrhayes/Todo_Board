import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const BoardButton = ({ board, onDelete, link }) => {
    return (
        <div
            className="flex flex-col justify-self-center items-center justify-center my-6 sm:my-10 w-32 h-32"
            style={{ backgroundColor: "wheat" }}
        >
            <FaTimes
                className="self-end mx-4"
                onClick={() => onDelete(board.id)}
                style={{ color: "red", cursor: "pointer" }}
            />
            <Link to={link}>
                <button className="text-lg font-bold text-center">
                    {board.title}
                </button>
            </Link>
        </div>
    );
};

export default BoardButton;
