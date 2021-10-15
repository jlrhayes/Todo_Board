import { useState } from "react";

/**
 * An AddColumn component that returns a form.
 * @param {function} onAdd - A callback to run upon form submit.
 * @param {string} placeholder - A string to be displayed in the input field.
 * @returns {element} AddColumn - A form. 
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
