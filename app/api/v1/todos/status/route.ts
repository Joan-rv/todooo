import { sql } from "@/lib/db";
import { apiError } from "@/lib/api";

export async function GET(request: Request) {
  const id = new URL(request.url).searchParams.get("id");
  if (id === undefined) {
    return apiError("Missing id", 400);
  }

  const [todoStatus] = await sql`
    select finished from todos where id=${id}
  `;
  if (todoStatus === undefined) {
    return apiError("Id not found in DB", 404);
  }

  return new Response(JSON.stringify(todoStatus), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(request: Request) {
  const { id, finished } = await request.json();

  if (id === undefined || finished === undefined) {
    return apiError("Missing id or finished", 400);
  }

  const [newStatus] = await sql`
    update todos set finished=${finished} where id=${id} returning finished
  `;

  if (!newStatus) {
    return apiError("Id not found in DB", 404);
  }

  return Response.json(newStatus);
}
