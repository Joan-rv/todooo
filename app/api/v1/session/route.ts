import { cookies } from "next/headers";
import { validateToken } from "@/lib/jwt";

export async function GET(request: Request) {
  let valid = false;
  let user = null;
  const tokenCookie = (await cookies()).get("token");
  if (tokenCookie !== undefined) {
    const token = tokenCookie.value;
    user = validateToken(token);
    if (user !== null) {
      valid = true;
    }
  }

  return Response.json({ valid, user });
}
