import { cookies } from "next/headers";
import { Todo } from "@/types/todo";
import { sql } from "@/lib/db";
import { apiError } from "@/lib/api";
import { validateToken } from "@/lib/jwt";

export async function GET() {
  const tokenCookie = (await cookies()).get("token");
  if (tokenCookie === undefined) {
    return apiError("Not logged in", 403);
  }
  const token = tokenCookie.value;
  const user = validateToken(token);
  if (user === null) {
    return apiError("Invalid session, relogin", 403);
  }

  const todos = await sql<
    Todo[]
  >`select * from todos where user_id=${user.id} order by created_at desc;`;

  return new Response(JSON.stringify(todos), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(request: Request) {
  const { title } = await request.json();

  const tokenCookie = (await cookies()).get("token");
  if (tokenCookie === undefined) {
    return apiError("Not logged in", 403);
  }
  const token = tokenCookie.value;
  const user = validateToken(token);
  if (user === null) {
    return apiError("Invalid session, relogin", 403);
  }

  if (title === undefined) {
    return apiError("Missing title", 400);
  }

  const [newTodo] =
    await sql`insert into todos (title,user_id) values (${title},${user.id}) returning *`;
  if (newTodo === undefined) {
    return apiError("Failed to create new todo", 500);
  }

  return Response.json(newTodo, { status: 201 });
}
