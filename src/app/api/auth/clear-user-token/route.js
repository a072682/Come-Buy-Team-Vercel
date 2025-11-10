

//引入next套件方便回傳資料/設定cookie/跳轉頁面
import { NextResponse } from "next/server";

//接收到POST請求則執行以下內容
export async function POST() {
    // JSON 回應
    const res = NextResponse.json({ message: "已順利登出" });
    //清除名為user_token的COOKIE(壽命歸零)
    res.cookies.delete("user_token");
    return res;
}