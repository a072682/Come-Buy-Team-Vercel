import { NextResponse } from "next/server";
import { getImagesByFolder } from "@/apiData/cloudinary/getImagesByFolder";

export async function GET(req) {
  try {
    // 解析 query string
    const { searchParams } = new URL(req.url);
    //取得目標資料夾
    const folder = searchParams.get("folder");
    //取得圖片數量最大值
    const maxResults = searchParams.get("maxResults");

    if (!folder) {
      return NextResponse.json(
        { error: "缺少 folder" },
        { status: 400 }
      );
    }

    const images = await getImagesByFolder(folder, {
      maxResults: maxResults ? Number(maxResults) : undefined,
    });

    return NextResponse.json({
      data: images,
    });
  } catch (error) {
    console.error("取得資料夾圖片失敗：", error);

    return NextResponse.json(
      { error: error.message || "取得資料夾圖片失敗" },
      { status: 500 }
    );
  }
}

//前端範例
// const res = await axios.get("/api/cloudinary/getImagesByFolder", {
//   params: {
//     folder: "articles",
//     maxResults: 30, // 可選
//   },
// });
