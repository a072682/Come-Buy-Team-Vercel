//會員登入api
import db from "@/dataBase/db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


export async function loginUser({ email, password }) {
    
    //確認是否有會員
    const result = await db.query(
        `SELECT *
        FROM users
        WHERE email = $1`,
        [email]
    );

    if (result.rows.length === 0) {
        throw new Error("帳號不存在");
    }
    //取得使用者基本資料
    const user = result.rows[0];

    //比對密碼
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        throw new Error("密碼錯誤");
    }

    //取得使用者id資料
    const userId = result.rows[0].id;
    if (!userId) {
        throw new Error("userId資料遺失");
    }

    //取得user_list資料
    const userListRes = await db.query(
        `SELECT id
        FROM user_list
        WHERE user_id = $1`,
        [userId]
    );
    //取得user_listId資料
    const userListId = userListRes.rows[0].id;
    if (!userListId) {
        throw new Error("userListId資料遺失");
    }

    //取得user_profiles資料
    const userProfilesRes = await db.query(
        `SELECT avatar_url,avatar_id
        FROM user_profiles
        WHERE user_list_id = $1`,
        [userListId]
    );
    if (userProfilesRes.rows.length === 0) {
        throw new Error("userProfiles資料遺失");
    }

    //取得頭貼資料與頭貼id資料
    const avatarUrl = userProfilesRes.rows[0].avatar_url;
    const avatarId = userProfilesRes.rows[0].avatar_id;

    //建立JWT
    const token = jwt.sign(
        {
            userId: user.id,
            email: user.email,
            username: user.username,
            role:user.role,
            avatarUrl:avatarUrl,
            avatarId:avatarId,
            auth_provider:user.auth_provider,
            origIatMs: Date.now(),
        },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
    );

    //回傳結果
    return {
        message: '登入成功',
        token,
        userData: {
            userId: user.id,
            email: user.email,
            username: user.username,
            role:user.role,
            avatarUrl:avatarUrl,
            avatarId:avatarId,
            auth_provider:user.auth_provider
        },
    };
}
