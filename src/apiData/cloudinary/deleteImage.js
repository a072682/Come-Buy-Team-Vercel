
//刪除圖片

// 引入環境變數
import cloudinary from "../utils/cloudinary/cloudinaryConfig";

export async function deleteImage(public_id) {

  // 確認是否有圖片id
  if (!public_id) {
    throw new Error("public_id 不存在，無法刪除圖片");
  }

  // 呼叫 Cloudinary API 刪除圖片
  const result = await cloudinary.uploader.destroy(public_id);

  // 只在真正錯誤時才丟錯
  if (result.result !== "ok" && result.result !== "not found") {
    throw new Error("Cloudinary 圖片刪除失敗");
  }

  // 回傳結果
  return {
    public_id,
    result: result.result,
  };
}
