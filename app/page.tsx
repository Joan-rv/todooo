import TodoItem from "@/components/todo-item";

export default function Page() {
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold"> Title</h1>
            <ul>
                <li><TodoItem title="Some task" /></li>
                <li><TodoItem title="Some task 2" /></li>
            </ul>
        </div >
    );
}
