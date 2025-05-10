"use client";

import { useState } from "react";
import { Todo } from "@/types/todo";

export default function TodoItem({ id, title, finished }: Todo) {
    const [checked, setChecked] = useState(finished);

    function handleCheckbox() {
        setChecked(!checked);
    }

    return (
        <div className="flex bg-gray-200 rounded-md p-2 m-2">
            <p className="flex-1">{title}</p>
            <input type="checkbox" checked={checked} onChange={handleCheckbox} />
        </div>
    );
}
