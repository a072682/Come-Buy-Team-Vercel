
//上傳圖片

import { NextResponse } from "next/server";
import { uploadImage } from "@/apiData/cloudinary/uploadImage";

export async function POST(req) {
  try {

    // 前端可能送以下格式的檔案
    // const form = new FormData();
    // form.append("file", imageFile);
    //讀取form-data中的檔案
    //由於可能檔案很大因此需要時間所以需要使用await

    // 解析 form-data
    const formData = await req.formData();
    
    const file = formData.get("file");

    //如果沒有檔案則回報錯誤
    if (!file) {
      return NextResponse.json(
        { error: "缺少圖片檔案 (file)" },{ status: 400 }
      );
    }

    // 從 form-data 讀取 folder（沒有就用預設）
    const folder = formData.get("folder");


    // 呼叫 Cloudinary 基礎層
    const result = await uploadImage(file, {
      folder: folder || undefined,
    });

    return NextResponse.json({
      message: "圖片上傳成功",
      result,
    });
  } catch (error) {
    console.error("圖片上傳失敗：", error);

    return NextResponse.json(
      { error: error.message || "圖片上傳失敗" },
      { status: 500 }
    );
  }
}

//前端範例
//const formData = new FormData();
//上傳資料夾名稱
//formData.append("folder", "articles");
//formData.append("file", imageFile);

//await axios.post("/api/cloudinary/uploadImage", formData);
