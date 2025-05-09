type TodoItemProps = {
    title: string;
}

export default function TodoItem({ title }: TodoItemProps) {
    return (
        <p>{title}</p>
    );
}
