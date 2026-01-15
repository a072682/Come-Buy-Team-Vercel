
import { NextResponse } from "next/server";
import { userMessageUpLoad } from "@/apiData/message/userMessageUpload";
import { verifyTokenData } from "@/apiData/guards/verifyTokenData";
import { allowRoles } from "@/apiData/guards/allowRoles";



export async function POST(req) {

    // 讀取資料
    const body = await req.json();

    // 驗證token
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
        const result = await userMessageUpLoad({
            userId: user.userId,
            message: body.message,
        });

        return NextResponse.json(result, { status: 201 });
    } catch (error) {
        return NextResponse.json(
            { message: error.message || "會員留言失敗" },
            { status: 400 }
        );
    }
}