import { sql } from "@/lib/db";

export async function GET(request: Request) {
  const id = new URL(request.url).searchParams.get("id");
  if (id === undefined) {
    return new Response(JSON.stringify({ error: "Missing id" }), {
      status: 400,
    });
  }

  const [todoStatus] = await sql`
    select finished from todos where id=${id}
  `;
  if (todoStatus === undefined) {
    return new Response(JSON.stringify({ error: "Id not found in DB" }), {
      status: 404,
    });
  }

  return new Response(JSON.stringify(todoStatus), {
    status: 200,
  });
}

export async function POST(request: Request) {
  const { id, finished } = await request.json();

  if (id === undefined || finished === undefined) {
    return new Response(
      JSON.stringify({ error: "Missing id or new finished" }),
      {
        status: 400,
      },
    );
  }

  const [newStatus] = await sql`
    update todos set finished=${finished} where id=${id} returning finished
  `;

  if (!newStatus) {
    return new Response(JSON.stringify({ error: "Id not found in DB" }), {
      status: 404,
    });
  }

  return new Response(JSON.stringify(newStatus), {
    status: 200,
  });
}
