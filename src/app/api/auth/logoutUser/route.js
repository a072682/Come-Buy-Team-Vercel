// app/api/auth/logoutUser/route.js
import { NextResponse } from "next/server";
import { logoutUser } from "@/apiData/auth/logoutUser";

export async function POST() {
  const result = logoutUser();
  return NextResponse.json(result);
}
