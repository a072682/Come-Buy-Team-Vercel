import { NextResponse } from "next/server";
import { getOrder } from "@/apiData/order/getOrder";
import { verifyTokenData } from "@/apiData/guards/verifyTokenData";
import { allowRoles } from "@/apiData/guards/allowRoles";

export async function GET(req) {

    // 驗證 Token 
    const tokenResult = verifyTokenData(req);

    if (!tokenResult.pass) {
      return NextResponse.json(
        tokenResult.data,
        { status: tokenResult.status }
      );
    }

    const user = tokenResult.data;

    // 驗證身分
    const roleResult = allowRoles("user", "admin")(user);

    if (!roleResult.pass) {
      return NextResponse.json(
        roleResult.data,
        { status: roleResult.status }
      );
    }

    try {

        // 呼叫核心邏輯
        const result = await getOrder({
        userId: user.userId,
        });

        return NextResponse.json(result);

    } catch (error) {
        return NextResponse.json(
        { message: error.message || "取得訂單失敗" },
        { status: 500 }
        );
    }
}
