"use client";

import { useState } from "react";
import TodoItem from "./todo-item"
import { Todo } from "@/types/todo"

export default function TodoList() {
    const [todos, setTodos] = useState<Todo[]>([]);

    const [newTodo, setNewTodo] = useState("");

    function handleClick() {
        if (!newTodo.trim()) return;
        setTodos([...todos, { id: Date.now() + Math.random(), title: newTodo, finished: false }]);
        setNewTodo("");
    }

    return (
        <div className="flex-col flex flex-1 w-3/12 items-stretch">
            <div className="flex mb-2">
                <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} className="flex-1 border rounded" />
                <button onClick={handleClick} className="ml-2 rounded bg-blue-500 text-white px-2 hover:bg-blue-600 transition" >Add todo item</button>
            </div>
            {todos.length == 0 ? "No todo items yet" :
                <ul className="bg-gray-100 py-2 rounded-md flex flex-col items-stretch">
                    {todos.map((todo) => (
                        <li key={todo.id}>
                            <TodoItem {...todo} />
                        </li>
                    ))}
                </ul>
            }
        </div>
    );
}
