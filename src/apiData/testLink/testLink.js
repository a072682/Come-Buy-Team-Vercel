import pool from "@/dataBase/db";


export async function testLink() {
  const result = await pool.query("SELECT NOW()");
  return { time: result.rows[0].now };
}
