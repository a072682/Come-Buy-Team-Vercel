//驗證訂單資料
import Joi from "joi";

export const orderSchema = Joi.object({
    //上傳訂單圖片檔案 ID
    imgFileId: Joi.string().allow("", null),
    //上傳訂單圖片檔案 URL
    imgFileUrl: Joi.string().allow("", null),

    //列印數量-整數-最少 1、最多 99
    num: Joi.number().integer().min(1).max(99).allow("", null),
    //訂單價格-整數-最小 1
    price: Joi.number().integer().min(1).allow("", null),

    //列印技術
    technique: Joi.string().valid("3D列印", "光固化").allow("", null),
    //列印材料
    material: Joi.string().allow("", null),
    //列印顏色
    color: Joi.string().allow("", null),

    //支撐材料等級 / 用量
    supportMaterial: Joi.number().integer().min(1).max(10).allow("", null),
    //支撐牆厚
    wallThickness: Joi.number().integer().min(1).max(50).allow("", null),
    //支撐密度
    supportDensity: Joi.number().integer().min(1).max(50).allow("", null),

    //訂單類型
    orderType: Joi.string().valid("urgent", "normal", "slow").allow("", null),

    //預計開始製作時間
    productionTime: Joi.string()
        .pattern(/^\d{4}\/\d{1,2}\/\d{1,2}$/)
        .allow(null, ""),

    //預計製作完成時間
    productionEndTime: Joi.string()
        .pattern(/^\d{4}\/\d{1,2}\/\d{1,2}$/)
        .allow(null, ""),
});