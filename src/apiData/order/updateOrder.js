// 修改訂單
import db from "@/dataBase/db";
import { trimToNull } from "@/apiData/joi/trimToNull";


export async function updateOrder({
  userId,
  orderId,
  num,
  price,
  supportMaterial,
  wallThickness,
  supportDensity,
  orderType,
  productionTime,
  productionEndTime,
}) {
    // 基本防呆
    if (!userId || !orderId) {
        throw new Error("缺少必要參數");
    }

    // 清洗資料（允許只改部分欄位）
    const cleanedData = {
        num: trimToNull(num),
        price: trimToNull(price),
        supportMaterial: trimToNull(supportMaterial),
        wallThickness: trimToNull(wallThickness),
        supportDensity: trimToNull(supportDensity),
        orderType: trimToNull(orderType),
        productionTime: trimToNull(productionTime),
        productionEndTime: trimToNull(productionEndTime),
    };

    // 確認訂單屬於此使用者
    const checkOrder = await db.query(
        `
        SELECT id
        FROM order_list
        WHERE id = $1 AND user_id = $2
        `,
        [orderId, userId]
    );

    if (checkOrder.rowCount === 0) {
        throw new Error("找不到訂單或沒有權限修改");
    }

    // 更新 order_items
    const updateResult = await db.query(
        `
        UPDATE order_items
        SET
        num = COALESCE($1, num),
        price = COALESCE($2, price),
        supportmaterial = COALESCE($3, supportmaterial),
        wallthickness = COALESCE($4, wallthickness),
        supportdensity = COALESCE($5, supportdensity),
        ordertype = COALESCE($6, ordertype),
        productiontime = COALESCE($7, productiontime),
        productionendtime = COALESCE($8, productionendtime)
        WHERE order_id = $9
        RETURNING *
        `,
        [
        cleanedData.num,
        cleanedData.price,
        cleanedData.supportMaterial,
        cleanedData.wallThickness,
        cleanedData.supportDensity,
        cleanedData.orderType,
        cleanedData.productionTime,
        cleanedData.productionEndTime,
        orderId,
        ]
    );

    return {
        message: "訂單修改完成",
        orderData: updateResult.rows[0],
    };
}
