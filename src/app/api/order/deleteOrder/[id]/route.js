import { NextResponse } from "next/server";
import { deleteOrder } from "@/apiData/order/deleteOrder";
import { verifyTokenData } from "@/apiData/guards/verifyTokenData";
import { allowRoles } from "@/apiData/guards/allowRoles";

export async function DELETE(req, { params }) {

    // 取得訂單 id
    const { id } = await params;
    const orderId = Number(id);

    if (!orderId || Number.isNaN(orderId)) {
        return NextResponse.json(
            { message: "訂單編號錯誤" },
            { status: 400 }
        );
    }

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
        const result = await deleteOrder({
            userId: user.userId,
            orderId,
        });

        return NextResponse.json(result);

        

    } catch (error) {
        return NextResponse.json(
            { message: error.message || "訂單刪除失敗" },
            { status: 500 }
        );
    }
}
