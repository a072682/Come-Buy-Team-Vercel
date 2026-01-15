import { NextResponse } from "next/server";
import { updateProfile } from "@/apiData/profile/updateProfile";
import { verifyTokenData } from "@/apiData/guards/verifyTokenData";
import { allowRoles } from "@/apiData/guards/allowRoles";


export async function PUT(req) {

    // 驗證 Token
    const tokenResult = verifyTokenData(req);
    if (!tokenResult.pass) {
        return NextResponse.json(
            tokenResult.data,
            { status: tokenResult.status }
        );
    }

    const user = tokenResult.data;

    // 驗證角色
    const roleResult = allowRoles("user", "admin")(user);

    if (!roleResult.pass) {
        return NextResponse.json(
            roleResult.data,
            { status: roleResult.status }
        );
    }

    try {

        // 取得前端資料
        const body = await req.json();

        // 呼叫核心邏輯
        const result = await updateProfile({
            userId: user.userId,
            ...body,
        });

        return NextResponse.json(result);
    } catch (error) {
        return NextResponse.json(
            { message: error.message || "更新會員資料失敗" },
            { status: 500 }
        );
    }
}
