

import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

//執行google登入後的函式
import { googleCallback } from "@/apiData/auth/google/googleCallback";
//將google登入後取得的資料轉換為資料庫格式
import { formatGoogleUser } from "@/apiData/auth/google/formatGoogleUser";
//將轉換過的資料寫入資料庫
import { handleGoogleLogin } from "@/apiData/auth/google/handleGoogleLogin";


export async function GET(req) {

  try {
    // 取得 callback URL 裡的 code
    const { searchParams } = new URL(req.url);
    // 取得code
    const code = searchParams.get("code");

    // 執行googleCallback函式
    const googleUser = await googleCallback(code);

    // 將google登入後的資料進行格式轉換
    const formattedUser = formatGoogleUser(googleUser);

    // 將轉換過的資料進行登入或註冊
    const { user } = await handleGoogleLogin(formattedUser);

    // 產生 JWT
    const token = jwt.sign(
      {
        userId: user.userId,
        email: user.email,
        username: user.username,
        role: user.role,
        avatarUrl:user.avatarUrl,
        avatarId:user.avatarId,
        auth_provider: user.auth_provider,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    // 設定前端頁面
    const redirectUrl = `http://localhost:3000/tokenPage?value=${encodeURIComponent(token)}`;

    // 回歸前端頁面
    return NextResponse.redirect(redirectUrl);

  } catch (error) {
    console.error("Google Callback Error:", error);

    return NextResponse.json(
      { error: error.message || "Google Callback 發生錯誤" },
      { status: 400 }
    );
  }
}
