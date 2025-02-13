import { useState } from "react";

export default function Form({ addTodo }) {
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return;
        addTodo(text);
        setText("");
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Add a todo"
                className="form-input"
            />
            <button type="submit" className="form-button">
                Add
            </button>
        </form>
    );
}
