type TodoItemProps = {
    title: string;
}

export default function TodoItem({ title }: TodoItemProps) {
    return (
        <div className="flex bg-gray-200 rounded-md p-2 m-2">
            <p className="flex-1">{title}</p>
            <input type="checkbox" />
        </div>
    );
}
