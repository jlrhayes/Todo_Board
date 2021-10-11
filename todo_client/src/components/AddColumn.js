import { useState } from "react";

const AddColumn = ({ onAdd, placeholder }) => {
    const [name, setName] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        onAdd({ name });

        setName("");
    };

    return (
        <form onSubmit={onSubmit}>
            <div>
                <input
                    name="task"
                    placeholder={placeholder}
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
        </form>
    );
};

export default AddColumn;
