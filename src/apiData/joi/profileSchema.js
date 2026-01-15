//驗證會員個人資料
import Joi from "joi";

export const profileSchema = Joi.object({
    /** 稱謂 */
    salutation: Joi.string().valid("先生", "女士").allow("", null),

    /** 頭像相關 */
    avatar_url: Joi.string().allow("", null),
    avatar_id: Joi.string().allow("", null),
    google_avatar_url: Joi.string().allow("", null),

    /** 姓名 */
    last_name: Joi.string().allow("", null),
    first_name: Joi.string().allow("", null),

    /** 生日（拆欄位） */
    birth_year: Joi.number()
        .integer()
        .min(1900)
        .max(new Date().getFullYear())
        .allow(null, ""),
    birth_month: Joi.number().integer().min(1).max(12).allow(null, ""),
    birth_day: Joi.number().integer().min(1).max(31).allow(null, ""),

    /** 聯絡資訊 */
    phone: Joi.string().allow("", null),
    mobile: Joi.string().allow("", null),

    /** 地址 */
    country_code: Joi.string().uppercase().length(2).allow("", null),
    postal_code: Joi.string().allow("", null),
    address_line: Joi.string().allow("", null),
});
