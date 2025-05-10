import TodoItem from "./todo-item"

export default function TodoList() {
    return (
        <ul className="bg-gray-100 w-3/12 py-2 rounded-md flex flex-col items-stretch">
            <li><TodoItem id={1} title="Some task" finished={false} /></li>
            <li><TodoItem id={1} title="Some task 2" finished={false} /></li>
        </ul>
    );
}
