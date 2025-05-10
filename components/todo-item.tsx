type TodoItemProps = {
    title: string;
}

export default function TodoItem({ title }: TodoItemProps) {
    return (
        <p className="bg-gray-200 rounded-md my-2 px-2">{title}</p>
    );
}
