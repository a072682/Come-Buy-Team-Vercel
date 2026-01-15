//刪除訂單
import db from "@/dataBase/db";
import cloudinary from "../utils/cloudinary/cloudinaryConfig";

export async function deleteOrder({ userId, orderId }) {

    // 基本檢查
    if (!orderId) {
        throw new Error("訂單編號錯誤");
    }

    // 確認訂單是否屬於此使用者
    const checkOrder = await db.query(
        `
        SELECT id
        FROM order_list
        WHERE id = $1
            AND user_id = $2
        `,
        [orderId, userId]
    );

    if (checkOrder.rowCount === 0) {
        throw new Error("找不到此訂單或您沒有權限刪除它");
    }

    //取得訂單圖片id
    const orderItemsData = await db.query(
        `
        SELECT *
        FROM order_items
        WHERE order_id = $1
        `,
        [orderId]
    );

    let imgFileId = null;

    if (orderItemsData.rowCount > 0) {
        imgFileId = orderItemsData.rows[0].imgfileid;
    }

    // 先刪 Cloudinary 圖片
    if (imgFileId) {
        await cloudinary.uploader.destroy(imgFileId);
    }

    // 先刪除 order_items
    await db.query(
        `
        DELETE FROM order_items
        WHERE order_id = $1
        `,
        [orderId]
    );

    // 再刪除 order_list
    await db.query(
        `
        DELETE FROM order_list
        WHERE id = $1
        `,
        [orderId]
    );
    // 回傳結果
    return {
        message: "訂單刪除成功",
    };
}
