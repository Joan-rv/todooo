import bcrypt from "bcryptjs";
import { cookies } from "next/headers";
import { apiError } from "@/lib/api";
import { sql } from "@/lib/db";
import { generateToken } from "@/lib/jwt";

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

  const payload = {
    id: user.id,
    username: user.username,
  };

  const token = generateToken(payload, "1d");
  (await cookies()).set("token", token, { maxAge: 60 * 60 * 24 });

  return Response.json({
    message: "Login successful",
    user: payload,
  });
}
