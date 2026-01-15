// 更新會員個人資料
import db from "@/dataBase/db";
import { trimToNull } from "@/apiData/joi/trimToNull";
import { profileSchema } from "@/apiData/joi/profileSchema";



export async function updateProfile({ userId, ...profileData }) {

    // 清洗資料
    const cleanedData = Object.fromEntries(
        Object.entries(profileData).map(([k, v]) => [k, trimToNull(v)])
    );

    // Joi 驗證
    const { error } = profileSchema.validate(cleanedData);
    if (error) {
        throw new Error(error.details[0].message);
    }

    // 取得 user_list_id
    const listRes = await db.query(
        `SELECT id FROM user_list WHERE user_id = $1`,
        [userId]
    );

    if (listRes.rowCount === 0) {
        throw new Error("找不到 user_list 對應資料");
    }

    const userListId = listRes.rows[0].id;

    // 更新 user_list 時間
    await db.query(
        `UPDATE user_list SET updated_at = now() WHERE id = $1`,
        [userListId]
    );

    console.log("userListId資料",userListId);

    // 更新 profile
    const result = await db.query(
        `
        UPDATE user_profiles
        SET
            salutation        = COALESCE($2, salutation),
            last_name         = COALESCE($3, last_name),
            first_name        = COALESCE($4, first_name),
            birth_year        = COALESCE($5, birth_year),
            birth_month       = COALESCE($6, birth_month),
            birth_day         = COALESCE($7, birth_day),
            phone             = COALESCE($8, phone),
            mobile            = COALESCE($9, mobile),
            country_code      = COALESCE($10, country_code),
            postal_code       = COALESCE($11, postal_code),
            address_line      = COALESCE($12, address_line),
            avatar_url        = COALESCE($13, avatar_url),
            avatar_id         = COALESCE($14, avatar_id),
            google_avatar_url = COALESCE($15, google_avatar_url)
        WHERE user_list_id = $1
        RETURNING *
        `,
        [
        userListId,
        cleanedData.salutation,
        cleanedData.last_name,
        cleanedData.first_name,
        cleanedData.birth_year,
        cleanedData.birth_month,
        cleanedData.birth_day,
        cleanedData.phone,
        cleanedData.mobile,
        cleanedData.country_code,
        cleanedData.postal_code,
        cleanedData.address_line,
        cleanedData.avatar_url,
        cleanedData.avatar_id,
        cleanedData.google_avatar_url,
        ]
    );

    return {
        message: "會員資料已更新",
        userProfileData: result.rows[0],
    };
}
