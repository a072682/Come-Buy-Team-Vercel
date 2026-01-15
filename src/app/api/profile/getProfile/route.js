import { NextResponse } from "next/server";
import { getProfile } from "@/apiData/profile/getProfile";
import { verifyTokenData } from "@/apiData/guards/verifyTokenData";
import { allowRoles } from "@/apiData/guards/allowRoles";

export async function GET(req) {
  try {

    //驗證token
    const tokenResult = verifyTokenData(req);

    if (!tokenResult.pass) {
      return NextResponse.json(
        tokenResult.data,
        { status: tokenResult.status }
      );
    }

    const user = tokenResult.data;

    // 驗證權限
    const roleResult = allowRoles("user", "admin")(user);

    if (!roleResult.pass) {
      return NextResponse.json(
        roleResult.data,
        { status: roleResult.status }
      );
    }

    const result = await getProfile({
      userId: user.userId,
      username: user.username,
    });

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      { message: error.message || "取得會員資料失敗" },
      { status: 401 }
    );
  }
}
