//會員登入次數統計
import db from "@/dataBase/db";

export async function userLoginCounter({ userId,username,userRole }) {

    // 計算台北當地今天（'YYYY-MM-DD'）
    const TaipeiLocalDate = `(now() AT TIME ZONE 'Asia/Taipei')::date`;
    // 算出台北當地今天（'YYYY-MM-DD'）

    await db.query(
        `
        INSERT INTO daily_logins (user_id, username, role, local_date)
        VALUES ($1, $2, $3, ${TaipeiLocalDate})
        ON CONFLICT (user_id, local_date) DO NOTHING;
        `,
        [userId, username, userRole]
    );
    //回傳結果
    return (
        { 
            message: '會員登入計數成功', 
        }
    );
};