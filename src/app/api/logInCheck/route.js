

export const runtime = 'nodejs';                 

import { NextResponse } from 'next/server';   
import { verifyCookie } from '@/middlewares/verifyCookie';   
 


export async function POST(req) {
  try {
    
    const payload = await verifyCookie(req);     
    // 成功會拿到物件：{ userId, email, username, role, ... }

    return NextResponse.json(
      {
        message: '登入確認成功',
        loggedIn: true,
        user: {
          userId: payload.userId,
          email: payload.email,
          username: payload.username,
          role: payload.role,
          auth_provider: payload.auth_provider,
        },
      },
      { status: 200 }
    );

  } catch (error) {
    // verifyCookie 失敗會丟 Response(401)，這裡直接回它；其他錯誤回 500
    if (error instanceof Response) {
        return error;
    }
    console.error('登入失敗', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
