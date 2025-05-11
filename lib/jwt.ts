import jwt from "jsonwebtoken";
import { StringValue } from "ms";

const JWTKEY = process.env.JWTKEY!;

export function generateToken(
  payload: object,
  expiresIn: StringValue | number,
): string {
  const options: jwt.SignOptions = { expiresIn };
  return jwt.sign(payload, JWTKEY, options);
}

export function validateToken(token: string): jwt.JwtPayload | null {
  try {
    const payload = jwt.verify(token, JWTKEY);
    if (typeof payload === "string") {
      return null;
    }
    return payload as jwt.JwtPayload;
  } catch {
    return null;
  }
}
