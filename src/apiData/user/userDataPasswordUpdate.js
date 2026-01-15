//會員密碼更新
import db from "@/dataBase/db";
import bcrypt from "bcrypt";


export async function userPasswordUpLoad({ userId,oldPassword,newPassword }){
    

    // 先從資料庫取出使用者密碼（加密過的）
    const userRes = await db.query(
        `SELECT password FROM users WHERE id = $1`,
        [userId]
    );
    if (userRes.rowCount === 0) {
        throw new Error("找不到使用者帳號");
    }

    // 使用者密碼（加密過的）
    const originhashedPassword = userRes.rows[0].password;

    // 比對原密碼是否正確
    const isMatch = await bcrypt.compare(oldPassword, originhashedPassword);
    if (!isMatch) {
        throw new Error("原密碼錯誤，請重新確認。");
    }
    // 比對原密碼是否正確

    //對新密碼進行加密
    const newhashedPassword = await bcrypt.hash(newPassword, 10);
    //bcrypt.hash(password, 10); 意思是將密碼加密為難度10的亂數密碼
    //對新密碼進行加密

    // 更新資料庫密碼
    await db.query(
        `
            UPDATE users
            SET password = $1
            WHERE id = $2
        `,
        [newhashedPassword, userId]
    );

    // 回傳結果
    return {
        message: "密碼已修改完成",
    };
};