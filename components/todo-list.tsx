"use client";

import { useEffect, useState } from "react";
import TodoItem from "./todo-item";
import Button from "./button";
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
      setTodos([(await response.json()) as Todo, ...todos]);
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
        <Button text="Add todo item"></Button>
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
