import { Todo } from "@/types/todo";
import { sql } from "@/lib/db";

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
  console.log(title);
  const newRows =
    await sql`INSERT INTO todos (title) VALUES (${title}) RETURNING *`;
  const newTodo = newRows[0];

  return new Response(JSON.stringify(newTodo), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
}
