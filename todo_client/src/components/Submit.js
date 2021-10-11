import { useState } from "react";

const AddColumn = ({ onAdd, placeholder }) => {
    const [name, setName] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        if (!name) {
            alert("Please type text");
            return;
        }
        onAdd({ name });

        setName("");
    };

    return (
        <form onSubmit={onSubmit}>
            <div>
                <input
                    type="text"
                    placeholder={placeholder}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
        </form>
    );
};

export default AddColumn;
