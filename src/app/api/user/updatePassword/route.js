
//會員密碼更新

import { NextResponse } from "next/server";
import { userPasswordUpLoad } from "@/apiData/user/userDataPasswordUpdate";
import { verifyTokenData } from "@/apiData/guards/verifyTokenData";
import { allowRoles } from "@/apiData/guards/allowRoles";
import { passwordSchema } from "@/apiData/joi/passwordSchema";


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

    // 驗證身分
    const roleResult = allowRoles("user", "admin")(user);

    if (!roleResult.pass) {
      return NextResponse.json(
        roleResult.data,
        { status: roleResult.status }
      );
    }

    // 解析body資料
    const body = await req.json();

    // Joi 驗證
    const { error, value } = passwordSchema.validate( body, { abortEarly: false, } );

    if (error) {
        return NextResponse.json(
            {
                success: false,
                message: "密碼資料規格驗證失敗",
                errors: error.details.map((errorIn) => errorIn.message),
            },
            { status: 400 }
        );
    }

    const { oldPassword, newPassword } = value;

    try {

        // 呼叫核心邏輯
        const result = await userPasswordUpLoad({
            userId: user.userId,
            oldPassword,
            newPassword,
        });

        // 回傳結果
        return NextResponse.json({
            success: true,
            message: "密碼更改成功",
        });
    } catch (error) {
        console.error("密碼更改失敗:", error);
        return NextResponse.json(
            {
                success: false,
                message: error.message || "密碼更改失敗",
            },
            { status: error.statusCode || 500 }
        );
    }
}
