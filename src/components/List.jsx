import { useState } from "react";

export default function List({ todos, toggleTodo, deleteTodo, editTodo }) {
    const [editingId, setEditingId] = useState(null);
    const [newText, setNewText] = useState("");

    const handleEdit = (id, text) => {
        setEditingId(id);
        setNewText(text);
    };

    const handleSave = (id) => {
        if (newText.trim()) {
            editTodo(id, newText);
        }
        setEditingId(null);
    };

    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id} className="todo-item">
                    <input
                        type="checkbox"
                        checked={todo.isCompleted}
                        onChange={() => toggleTodo(todo.id)}
                        className="todo-checkbox"
                    />

                    <div className="todo-content">
                        {editingId === todo.id ? (
                            <input
                                type="text"
                                value={newText}
                                onChange={(e) => setNewText(e.target.value)}
                                onBlur={() => handleSave(todo.id)}
                                autoFocus
                            />
                        ) : (
                            <span style={{ textDecoration: todo.isCompleted ? "line-through" : "none" }}>
                                {todo.text}
                            </span>
                        )}
                    </div>

                    <div className="todo-buttons">
                        {editingId === todo.id ? (
                            <button onClick={() => handleSave(todo.id)}>Save</button>
                        ) : (
                            <button onClick={() => handleEdit(todo.id, todo.text)}>Edit</button>
                        )}

                        <button onClick={() => deleteTodo(todo.id)} className="delete-button">X</button>
                    </div>
                </li>
            ))}
        </ul>
    );
}
