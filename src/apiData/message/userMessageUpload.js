// 會員留言上傳
import db from "@/dataBase/db";
import { trimToNull } from "../joi/trimToNull";
import { messageSchema } from "../joi/messageSchema";


export async function userMessageUpLoad({ userId, message }) {
    // 資料清洗
    const messageData = trimToNull(message);

    // Joi 驗證
    const { error } = messageSchema.validate({
        messageContent: messageData,
    });
    if (error) {
        throw new Error(error.details[0].message);
    }

    // 新增 message_list，取得 listId
    const listData = await db.query(
        `
        INSERT INTO message_list (
            user_id,
            created_at,
            updated_at
        )
        VALUES ($1, now(), now())
        RETURNING id
        `,
        [userId]
    );

    const listId = listData.rows[0].id;

    // 新增留言內容
    const messageDataRef = await db.query(
        `
        INSERT INTO message_items (
            message_list_id,
            message_content
        )
        VALUES ($1, $2)
        RETURNING *
        `,
        [listId, messageData]
    );

    // 回傳結果
    return {
        message: "留言寫入成功",
        messageData: messageDataRef.rows,
    };
}
