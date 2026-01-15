//會員新增api
import db from "@/dataBase/db";
import bcrypt from "bcrypt";
import { userSchema } from "../joi/userSchema";

export async function registerUser({ username, email, password }) {

  // Joi 驗證（保留原邏輯）
  const { error } = userSchema.validate({ username, email, password });
  // 如果輸入資料規格錯誤則回報錯誤
  if (error) {
    throw new Error(error.details[0].message);
  }

  const role = "user";
  const provider = "local";

  // 檢查是否已註冊
  const existing = await db.query(
    `
      SELECT id
      FROM users
      WHERE username = $1 OR email = $2
    `,
    [username, email]
  );

  // 如果有註冊資料則回報訊息
  if (existing.rowCount !== 0) {
    throw new Error("此用戶已註冊");
  }

  // 密碼加密
  const hashedPassword = await bcrypt.hash(password, 10);

  // 寫入資料庫
  const result = await db.query(
    `
      INSERT INTO users (username, email, password, role, auth_provider, created_at)
      VALUES ($1, $2, $3, $4, $5, now())
      RETURNING id, username, email, role, created_at
    `,
    [username, email, hashedPassword, role, provider]
  );

  // 回傳「資料」，不處理 HTTP
  return {
    message: "會員註冊成功",
    user: result.rows[0],
  };
}

