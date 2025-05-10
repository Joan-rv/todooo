"use client";

import { useEffect, useState } from "react";
import TodoItem from "./todo-item";
import { Todo } from "@/types/todo";

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch("/api/v1/todos");
      if (response.ok) {
        const data = (await response.json()) as Todo[];
        setTodos(data);
      }
    };

    fetchTodos();
  }, []);

  const [newTodo, setNewTodo] = useState("");

  async function handleNewTodo(e: React.FormEvent) {
    e.preventDefault();
    if (!newTodo.trim()) return;
    const response = await fetch("/api/v1/todos", {
      method: "POST",
      body: JSON.stringify({ title: newTodo }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      setTodos([...todos, (await response.json()) as Todo]);
    }
    setNewTodo("");
  }

  return (
    <div className="flex-col flex flex-1 w-full max-w-150 px-4 py-4 items-stretch">
      <form onSubmit={handleNewTodo} className="flex pb-4">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="flex-1 border rounded px-1"
          placeholder="Add a new todo item"
        />
        <button className="ml-2 rounded bg-blue-500 text-white px-2 hover:bg-blue-600 transition">
          Add todo item
        </button>
      </form>
      {todos.length == 0 ? (
        "No todo items yet"
      ) : (
        <ul className="bg-gray-100 py-2 rounded-md flex flex-col items-stretch">
          {todos.map((todo) => (
            <li key={todo.id}>
              <TodoItem {...todo} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
