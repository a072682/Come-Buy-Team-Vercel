import { loginUser } from "@/apiData/auth/loginUser";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    //對前端的資料進行解構
    const body = await req.json();
    //執行loginUserApi
    const result = await loginUser(body);
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      { message: error.message || "會員登入失敗" },
      { status: 401 }
    );
  }
}
