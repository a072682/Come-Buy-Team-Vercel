//取得會員資料
import db from "@/dataBase/db";

export async function userDataGet({ userId }) {
    
    //搜尋會員資料
    const result = await db.query(
        `SELECT id, username, email, role
        FROM users
        WHERE id = $1`,
        [userId]
    );

    if (result.rows.length === 0) {
        throw new Error("無此會員資料");
    }

    const user = result.rows[0];

    //回傳結果
    return {
        message: '取得會員基本資料成功',
        userData: user,
    };
}