"use client";

import { useState } from "react";
import { Todo } from "@/types/todo";

export default function TodoItem({ id, title, finished }: Todo) {
  const [checked, setChecked] = useState(finished);

  async function handleCheckbox() {
    const response = await fetch("api/v1/todos/status", {
      method: "POST",
      body: JSON.stringify({ id, finished: !checked }),
    });
    if (response.ok) {
      setChecked((await response.json()).finished);
    }
  }

  return (
    <div
      onClick={handleCheckbox}
      className="flex bg-gray-200 rounded-md p-2 m-2 hover:bg-gray-300 transition"
    >
      <p className="flex-1">{title}</p>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => e.stopPropagation()}
      />
    </div>
  );
}
