import postgres from "postgres";
export const sql = postgres(process.env.POSTGRESURL!, {});
