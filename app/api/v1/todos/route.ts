import { Todo } from "@/types/todo";
import { sql } from "@/lib/db";
import { apiError } from "@/lib/api";

export async function GET() {
  const todos = await sql<
    Todo[]
  >`select * from todos order by created_at desc;`;

  return new Response(JSON.stringify(todos), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(request: Request) {
  const { title } = await request.json();
  if (title === undefined) {
    return apiError("Missing title", 400);
  }

  const [newTodo] =
    await sql`INSERT INTO todos (title) VALUES (${title}) RETURNING *`;
  if (newTodo === undefined) {
    return apiError("Failed to create new todo", 500);
  }

  return new Response(JSON.stringify(newTodo), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
}
