
//會員登入次數統計

import { NextResponse } from "next/server";
import { userLoginCounter } from "@/apiData/user/userLoginCounter";
import { verifyTokenData } from "@/apiData/guards/verifyTokenData";
import { allowRoles } from "@/apiData/guards/allowRoles";

export async function POST(req) {

  // 驗證 Token
  const tokenResult = verifyTokenData(req);

  if (!tokenResult.pass) {
    return NextResponse.json(tokenResult.data, {
      status: tokenResult.status,
    });
  }

  const user = tokenResult.data;

  // 驗證身分
  const roleResult = allowRoles("user", "admin")(user);

  if (!roleResult.pass) {
    return NextResponse.json(roleResult.data, {
      status: roleResult.status,
    });
  }

  try {
    // 呼叫核心邏輯
    const result = await userLoginCounter({
      userId: user.userId,
      username: user.username,
      userRole: user.role,
    });

    // 回傳結果
    return NextResponse.json({
      success: true,
      message: result.message,
    });

  } catch (error) {
    console.error("會員登入次數統計失敗:", error);

    return NextResponse.json(
      {
        success: false,
        message: error.message || "會員登入次數統計失敗",
      },
      { status: error.statusCode || 500 }
    );
  }
}
