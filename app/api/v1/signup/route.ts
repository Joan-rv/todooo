import bcrypt from "bcryptjs";
import { apiError } from "@/lib/api";
import { sql } from "@/lib/db";

export async function POST(request: Request) {
  const { username, password } = await request.json();
  if (username === undefined || password === undefined) {
    return apiError("Missing username or password field", 400);
  }

  const existing = await sql`select id from users where username = ${username}`;
  if (existing.length > 0) {
    return apiError("Username taken", 409);
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await sql`
    insert into users (username, password) values (${username}, ${hashedPassword}) returning id,username
  `;

  return Response.json(
    { message: "Signup successful", user: newUser },
    { status: 201 },
  );
}
