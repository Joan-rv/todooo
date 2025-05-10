import TodoList from "@/components/todo-list";

export default function Page() {
  return (
    <main className="flex flex-col items-center">
      <h1 className="text-3xl font-bold py-2">todooo</h1>
      <TodoList />
    </main>
  );
}
