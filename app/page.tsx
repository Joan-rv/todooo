import TodoList from "@/components/todo-list";

export default function Page() {
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold py-2">Todooo</h1>
            <TodoList />
        </div >
    );
}
