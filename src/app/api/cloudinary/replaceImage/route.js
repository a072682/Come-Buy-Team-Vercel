import { NextResponse } from "next/server";
import { replaceImage } from "@/apiData/cloudinary/replaceImage";

export async function PUT(req) {
  try {
    // 解析 form-data
    const formData = await req.formData();

    //取得圖片檔案
    const file = formData.get("file");
    //取得圖片id
    const oldPublicId = formData.get("oldPublicId");
    //取得上傳資料夾
    const folder = formData.get("folder");

    //如沒有圖片檔案則回報錯誤
    if (!file) {
      return NextResponse.json(
        { error: "缺少新圖片檔案 (file)" },
        { status: 400 }
      );
    }

    // 呼叫 Cloudinary 基礎層
    const result = await replaceImage(
      oldPublicId || null,
      file,
      { folder: folder || undefined }
    );

    return NextResponse.json({
      message: "圖片覆蓋成功",
      data: result,
    });
  } catch (error) {
    console.error("圖片覆蓋失敗：", error);

    return NextResponse.json(
      { error: error.message || "圖片覆蓋失敗" },
      { status: 500 }
    );
  }
}

//前端範例
// const formData = new FormData();

// formData.append("file", newImageFile);
// formData.append("oldPublicId", oldPublicId);
// formData.append("folder", "articles");

// await axios.put("/api/cloudinary/replaceImage", formData);
