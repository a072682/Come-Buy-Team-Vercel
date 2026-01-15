
import { NextResponse } from "next/server";
import { googleLogin } from "@/apiData/auth/google/googleLogin";

export async function GET() {
  // 執行googleLogin函式
  const googleAuthUrl = await googleLogin();

  // 傳送到Google登入頁面
  return NextResponse.redirect(googleAuthUrl);
}
