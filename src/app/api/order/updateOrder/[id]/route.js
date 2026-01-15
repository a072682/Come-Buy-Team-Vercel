import { NextResponse } from "next/server";
import { updateOrder } from "@/apiData/order/updateOrder";
import { verifyTokenData } from "@/apiData/guards/verifyTokenData";
import { allowRoles } from "@/apiData/guards/allowRoles";

export async function PUT(req, { params }) {

    // 取得訂單
    const rawId = params.id;
    const orderId = Number(rawId);

    if (!orderId || Number.isNaN(orderId)) {
      return NextResponse.json(
        { message: "訂單編號錯誤" },
        { status: 400 }
      );
    }

    // 讀取 body資料
    const body = await req.json();

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
    const result = await updateOrder({
    userId: user.userId,
    orderId,
    ...body,
    });

    return NextResponse.json(result);

  } catch (error) {
    return NextResponse.json(
      { message: error.message || "訂單修改失敗" },
      { status: 400 }
    );
  }
}
