
// 覆蓋圖片

//引入上傳圖片
import { uploadImage } from "./uploadImage";
//引入刪除圖片
import { deleteImage } from "./deleteImage";

export async function replaceImage(oldPublicId, newFile, options = {}) {

  if (!newFile) {
    throw new Error("新圖片不存在，無法覆蓋圖片");
  }

  // 若有舊圖，先嘗試刪除（允許 not found）
  if (oldPublicId) {
    await deleteImage(oldPublicId);
  }

  // 上傳新圖
  const uploadResult = await uploadImage(newFile, options);

  return uploadResult;
}
