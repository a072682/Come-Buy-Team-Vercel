import { NextResponse } from "next/server";
import { createProfile } from "@/apiData/profile/createProfile";
import { verifyTokenData } from "@/apiData/guards/verifyTokenData";
import { allowRoles } from "@/apiData/guards/allowRoles";

export async function POST(req) {
  try {
    // 驗證 Token
    const tokenResult = verifyTokenData(req);
    if (!tokenResult.pass) {
      return NextResponse.json(
        tokenResult.data,
        { status: tokenResult.status }
      );
    }

    const user = tokenResult.data;
    // user = { userId, email, role, ... }

    // 驗證角色
    const roleResult = allowRoles("user", "admin")(user);
    if (!roleResult.pass) {
      return NextResponse.json(
        roleResult.data,
        { status: roleResult.status }
      );
    }

    // 呼叫核心邏輯
    const result = await createProfile({
      email: user.email,
    });

    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: error.message || "建立會員個資失敗" },
      { status: 500 }
    );
  }
}
