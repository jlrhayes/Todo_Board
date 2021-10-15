import { useState } from "react";

/**
 * An AdColumn component that returns a form.
 * @param {object} onAdd <description>
 * @param {object} placeholder <description>
 * @returns {element} a form
 */
const AddColumn = ({ onAdd, placeholder }) => {
    const [title, setTitle] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        onAdd({ title });

        setTitle("");
    };

    return (
        <form onSubmit={onSubmit}>
            <div>
                <input
                    name="task"
                    placeholder={placeholder}
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
        </form>
    );
};

export default AddColumn;
