import TodoItem from "@/components/todo-item";

export default function Page() {
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold py-2">Title</h1>
            <ul className="bg-gray-100 w-3/12 py-2 rounded-md flex flex-col items-stretch">
                <li><TodoItem title="Some task" finished={false} /></li>
                <li><TodoItem title="Some task 2" finished={false} /></li>
            </ul>
        </div >
    );
}
