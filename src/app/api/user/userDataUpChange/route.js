
// 更新會員資料

import { NextResponse } from "next/server";
import { userDataUpChange } from "@/apiData/user/userDataUpChange";
import { verifyTokenData } from "@/apiData/guards/verifyTokenData";
import { allowRoles } from "@/apiData/guards/allowRoles";
import { userSchema } from "@/apiData/joi/userSchema";

export async function PUT(req) {

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

    // 解析body資料
    const body = await req.json();

    const { username, email } = body;

    try {
        // 呼叫核心邏輯
        const result = await userDataUpChange({
            userId: user.userId,
            username,
            email,
        });

        // 回傳結果
        return NextResponse.json({
            success: true,
            message: result.message,
            data: result.userData,
        });

    } catch (error) {
        console.error("會員資料更新失敗:", error);

        return NextResponse.json(
        {
            success: false,
            message: error.message || "會員資料更新失敗",
        },
        { status: error.statusCode || 500 }
        );
    }
}
