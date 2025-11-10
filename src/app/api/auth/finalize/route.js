

//引入next套件方便回傳資料/設定cookie/跳轉頁面
import { NextResponse } from "next/server";
//引入next套件確認使用者是否登入以及確認使用者資料
import { getServerSession } from "next-auth";
// 用來產生 JWT Token
import jwt from "jsonwebtoken";
//引入google設定檔
import { authOptions } from "../[...nextauth]/route"; 
//這個route.js的內容 要在nodejs環境中執行 
export const runtime = "nodejs";

//接收到GET請求則執行以下內容
export async function GET(req) {
  // 取得 session資料（已通過 Google）
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    // 還沒登入就回到內建登入
    //req.nextUrl.origin為基底網址
    //用 基底網址+相對路徑 組成一個完整的絕對網址
    const url = new URL("/api/auth/signin", req.nextUrl.origin);
    //請用戶跳到登入頁
    return NextResponse.redirect(url);
  }

  //準備放入 JWT 的資料
  const payload = {
    userId: session.user.id,          
    username: session.user.name,
    email: session.user.email,
    role: session.user.role,
    auth_provider: session.auth_provider,
  };

  // 建立JWT
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "3600s", // 60分鐘
  });

  
  //請用戶跳到登入頁
  const res = NextResponse.redirect(
    new URL(req.nextUrl.searchParams.get("to") || "/", req.nextUrl.origin)
  );

  //確認執行環境為開發或正式環境
  const isProd = process.env.NODE_ENV === "production";
  //寫入cookie
  res.cookies.set("user_token", token, {
    httpOnly: true,
    secure: isProd,            // 本機開發用 http → false；正式站 https → true
    sameSite: isProd ? "none" : "lax", // 本機通常用 lax，正式若跨站需求再用 none
    path: "/",
    maxAge: 60 * 60,           // 60 分鐘（秒）
  });

  return res;
}
