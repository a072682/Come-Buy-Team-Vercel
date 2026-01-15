//cloudinary圖片雲端上傳系統前置連線設定
import { v2 as cloudinary } from "cloudinary";

// 雲端連接初始化
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export default cloudinary;