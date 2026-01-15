import { NextResponse } from "next/server";
import { deleteImage } from "@/apiData/cloudinary/deleteImage";

export async function DELETE(req) {
  try {
    // 解析 JSON body
    const { public_id } = await req.json();

    if (!public_id) {
      return NextResponse.json(
        { error: "缺少 public_id" },
        { status: 400 }
      );
    }

    // 呼叫基礎層
    const result = await deleteImage(public_id);

    return NextResponse.json({
      message: "圖片刪除完成",
      data: result,
    });
  } catch (error) {
    console.error("刪除圖片失敗：", error);

    return NextResponse.json(
      { error: error.message || "圖片刪除失敗" },
      { status: 500 }
    );
  }
}

//前端範例
// await axios.delete("/api/cloudinary/deleteImage", {
//   data: {
//     public_id: "articles/abc123",
//   },
// });