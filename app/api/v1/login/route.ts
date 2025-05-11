import bcrypt from "bcryptjs";
import { apiError } from "@/lib/api";
import { sql } from "@/lib/db";

export async function POST(request: Request) {
  const { username, password } = await request.json();
  if (username === undefined || password === undefined) {
    return apiError("Missing username or password field", 400);
  }

  const [user] = await sql`select * from users where username=${username}`;

  if (user === undefined) {
    return apiError("User not found", 404);
  }

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) {
    return apiError("Invalid password", 401);
  }

  return Response.json({
    message: "Login successful",
    user: { id: user.id, username: user.username },
  });
}
