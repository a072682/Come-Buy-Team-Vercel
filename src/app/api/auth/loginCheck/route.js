// app/api/auth/loginCheck/route.js
import { NextResponse } from "next/server";
import { verifyTokenData } from "@/apiData/guards/verifyTokenData";
import { loginCheck } from "@/apiData/auth/loginCheck";
import { allowRoles } from "@/apiData/guards/allowRoles";

export async function POST(req) {
    //驗證token
    const authResult = verifyTokenData(req);

    if (!authResult.pass) {
        return NextResponse.json(
            authResult.data,
            { status: authResult.status }
        );
    }

    //驗證使用者身分
    const roleResult = allowRoles('admin','user','vip','vendor')(authResult.data);

    if (!roleResult.pass) {
        return NextResponse.json(
            roleResult.data,
            { status: roleResult.status }
        );
    }

    //回傳資料處理user資料
    const result = loginCheck(authResult.data);

    //建立回傳結果容器
    const response = NextResponse.json(result);

    //如果有新token則附加在容器中
    if (authResult.newToken) {
        response.headers.set("x-renewed-token", authResult.newToken);
    }

    return response;
}
