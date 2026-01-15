//取得使用者訂單
import db from "@/dataBase/db";

export async function getOrder({ userId }) {
    // 查詢 order_list + order_items + print_items
    const orderDataRef = await db.query(
        `
        SELECT 
            order_list.id,
            order_list.state,
            order_items.imgfileurl,
            order_items.imgfileid,
            order_items.num,
            order_items.price,
            order_items.supportmaterial,
            order_items.supportdensity,
            order_items.wallthickness,
            order_items.ordertype,
            order_items.productiontime,
            order_items.productionendtime,
            print_items.technique,
            print_items.material,
            print_items.color
        FROM order_items
        JOIN order_list ON order_items.order_id = order_list.id
        JOIN print_items ON order_items.print_items_id = print_items.id
        WHERE order_list.user_id = $1
        `,
        [userId]
    );

    // 沒有訂單（不是錯誤，只是沒有資料）
    if (orderDataRef.rowCount === 0) {
        return {
            message: "該用戶目前並無訂單",
            orderData: [],
        };
    }

    // 回傳結果
    return {
        message: "取得訂單資料成功",
        orderData: orderDataRef.rows,
    };
}
