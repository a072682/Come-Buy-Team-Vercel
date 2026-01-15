// Joi 驗證 密碼資料
import Joi from "joi";

export const passwordSchema = Joi.object({
    oldPassword: Joi.string().min(6).required(),
    newPassword: Joi.string().min(6).required(),
    //只要是進來的資料是password必須是字串(string)長度最少為6(min(6))且為必填寫不可為空(required())
});