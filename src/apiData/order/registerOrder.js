//新增訂單
import db from "@/dataBase/db";
import { orderSchema } from "../joi/orderSchema";
import { trimToNull } from "../joi/trimToNull";

export async function registerOrder({
  userId,
  imgFileId,
  imgFileUrl,
  num,
  price,
  technique,
  material,
  color,
  supportMaterial,
  wallThickness,
  supportDensity,
  orderType,
  productionTime,
  productionEndTime,
}) {
    // 資料初始化
    const cleanedData = {
        imgFileId: trimToNull(imgFileId),
        imgFileUrl: trimToNull(imgFileUrl),
        num: trimToNull(num),
        price: trimToNull(price),
        technique: trimToNull(technique),
        material: trimToNull(material),
        color: trimToNull(color),
        supportMaterial: trimToNull(supportMaterial),
        wallThickness: trimToNull(wallThickness),
        supportDensity: trimToNull(supportDensity),
        orderType: trimToNull(orderType),
        productionTime: trimToNull(productionTime),
        productionEndTime: trimToNull(productionEndTime),
    };

    // Joi 驗證
    const { error } = orderSchema.validate(cleanedData);
    if (error) {
        throw new Error(error.details[0].message);
    }

    // 新增 order_list，取得 orderId
    const listData = await db.query(
        `
        INSERT INTO order_list (
            user_id,
            created_at,
            updated_at,
            state
        )
        VALUES ($1, now(), now(), 'wait')
        RETURNING id
        `,
        [userId]
    );

    const orderId = listData.rows[0].id;

    // 從 print_items 取得對應 id
    const printItemsRef = await db.query(
        `
        SELECT id
        FROM print_items
        WHERE technique = $1
            AND material = $2
            AND color = $3
        `,
        [
        cleanedData.technique,
        cleanedData.material,
        cleanedData.color,
        ]
    );

    if (printItemsRef.rowCount === 0) {
        throw new Error("找不到對應的列印項目");
    }

    const printItemsId = printItemsRef.rows[0].id;

    // 新增 order_items
    const orderDataRef = await db.query(
        `
        INSERT INTO order_items (
            order_id,
            print_items_id,
            imgfileid,
            imgfileurl,
            num,
            price,
            supportmaterial,
            wallthickness,
            supportdensity,
            ordertype,
            productiontime,
            productionendtime
        )
        VALUES (
            $1, $2, $3, $4, $5, $6,
            $7, $8, $9, $10, $11, $12
        )
        RETURNING *
        `,
        [
        orderId,
        printItemsId,
        cleanedData.imgFileId,
        cleanedData.imgFileUrl,
        cleanedData.num,
        cleanedData.price,
        cleanedData.supportMaterial,
        cleanedData.wallThickness,
        cleanedData.supportDensity,
        cleanedData.orderType,
        cleanedData.productionTime,
        cleanedData.productionEndTime,
        ]
    );

    // 回傳結果
    return {
        message: "訂單新增成功",
        orderData: orderDataRef.rows[0],
    };
}
