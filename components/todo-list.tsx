"use client";

import { useState } from "react";
import TodoItem from "./todo-item"

export default function TodoList() {
    const [todos, setTodos] = useState([
        { id: 1, title: "Some task", finished: false },
        { id: 2, title: "Some task 2", finished: false },
    ])

    return (
        <ul className="bg-gray-100 w-3/12 py-2 rounded-md flex flex-col items-stretch">
            {todos.map((todo) => (
                <li key={todo.id}>
                    <TodoItem {...todo} />
                </li>
            ))}
        </ul>
    );
}
