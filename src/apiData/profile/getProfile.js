//取得會員個人資料
import db from "@/dataBase/db";

export async function getProfile({ userId, username }) {
    
  // 管理員帳戶不建立個資
  if (username === "admin123") {
    return { message: "管理員帳戶無個人信息" };
  }

  const result = await db.query(
    `
      SELECT
        user_list_id,
        salutation,
        last_name,
        first_name,
        birth_year,
        birth_month,
        birth_day,
        phone,
        mobile,
        country_code,
        postal_code,
        address_line,
        avatar_url,
        avatar_id,
        google_avatar_url
      FROM user_profiles
      JOIN user_list ON user_profiles.user_list_id = user_list.id
      JOIN users ON user_list.user_id = users.id
      WHERE users.id = $1
    `,
    [userId]
  );

  return {
    message: "會員個資已取得成功",
    userData: result.rows[0] ?? null,
  };
}
