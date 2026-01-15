// 建立會員個資
import db from "@/dataBase/db";

export async function createProfile({ email }) {

    const userRes = await db.query(
        `SELECT id FROM users WHERE email = $1`,
        [email]
    );

    if (userRes.rowCount === 0) {
        throw new Error("會員不存在，無法建立個資");
    }

    const userId = userRes.rows[0].id;

    const listRes = await db.query(
        `
        INSERT INTO user_list (user_id, created_at, updated_at)
        VALUES ($1, now(), now())
        ON CONFLICT (user_id)
        DO UPDATE SET updated_at = EXCLUDED.updated_at
        RETURNING id
        `,
        [userId] 
    );

    const userListId = listRes.rows[0].id;

    await db.query(
        `
        INSERT INTO user_profiles (user_list_id)
        VALUES ($1)
        ON CONFLICT (user_list_id) DO NOTHING
        `,
        [userListId]
    );

    return { message: "用戶個人資料建立成功" };
}
