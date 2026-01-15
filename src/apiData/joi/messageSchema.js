//會員留言驗證
import Joi from "joi";

export const messageSchema = Joi.object({
  //留言內容
  messageContent: Joi.string().allow("", null),
});
