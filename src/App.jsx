import { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";

export default function App() {
    const [todos, setTodos] = useState([
        { id: 1, text: "Eat", isCompleted: false },
        { id: 2, text: "Sleep", isCompleted: false }
    ]);

    const addTodo = (text) => {
        const newTodo = { id: Date.now(), text, isCompleted: false };
        setTodos([...todos, newTodo]);
    };

    const toggleTodo = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
        ));
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const editTodo = (id, newText) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, text: newText } : todo
        ));
    };



    return (
        <div className="app-container">
            <h1>Todo App</h1>
            <Form addTodo={addTodo} />
            <List todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} editTodo={editTodo} />

        </div>
    );
}
