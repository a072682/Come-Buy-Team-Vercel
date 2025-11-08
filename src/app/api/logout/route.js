


export const runtime = 'nodejs';

import { NextResponse } from 'next/server';

export async function POST() {
  
  const res = NextResponse.json({ message: '登出成功' }, { status: 200 });

  // 2) 用同樣的 cookie 名稱，把它清掉
  //    關鍵是 maxAge: 0（或 expires 設過去時間）
  //    path 要與當初設定一致（通常是 '/'）
  res.cookies.set('user_token', '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production', // 與登入時一致
    sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
    path: '/',    // 與登入時一致，才能成功覆蓋
    maxAge: 0,    // 立刻過期 = 刪除
  });

  return res;
}
