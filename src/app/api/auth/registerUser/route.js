import { registerUser } from "@/apiData/auth/registerUser";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    //解構資料
    const body = await req.json();
    //執行新增會員api
    const result = await registerUser(body);
    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: error.message || "會員註冊失敗" },
      { status: 400 }
    );
  }
}
