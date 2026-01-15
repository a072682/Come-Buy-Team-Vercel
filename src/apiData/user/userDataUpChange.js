// 更新會員資料
import db from "@/dataBase/db";
import { trimToNull } from "../joi/trimToNull";

export async function userDataUpChange({userId,username,email,}) {
    
    // 將可能為空的輸入轉為 null
    const newUsername = trimToNull(username);
    const newEmail = trimToNull(email);

    // 更新會員資料
    const result = await db.query(
        `
        UPDATE users
        SET username = COALESCE($1, username),
            email = COALESCE($2, email)
        WHERE id = $3
        RETURNING id, username, email, role
        `,
        [newUsername, newEmail, userId]
    );

    // 回傳結果
    return {
        message: "會員資料修改完成",
        userData: result.rows[0],
    };
}
