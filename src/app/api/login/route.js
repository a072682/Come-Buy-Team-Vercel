



export const runtime = 'nodejs'; 
//runtime代表執行環境
//export const runtime = 'nodejs';意思是
//這個route.js的內容 要在nodejs環境中執行 

import { NextResponse } from 'next/server';     
//Next 提供的 API 工具包
import jwt from 'jsonwebtoken';                 
// 產生與驗證 JWT 的套件
import pool from '@/lib/db';                    
// 與PostgreSQL資料庫的連線資料
import bcrypt from 'bcrypt';                 
// 比較密碼用（hash 驗證）

// 這支 route 處理「POST /api/login」
export async function POST(req) {           
  try {
    
    const { email, password } = await req.json(); 
    // 對前端傳送的資料進行解構
    if (!email || !password) {                   
      return NextResponse.json(
        { error: 'email 與 password 為必填' },
        { status: 400 }
      );
    }

    const result = await pool.query(             
    //檢查帳號是否存在
      'SELECT * FROM users WHERE email = $1',
      [email]
    );

    if (result.rows.length === 0) {              
    // 查無帳號
      return NextResponse.json(
        { error: '帳號或密碼錯誤' },              
        { status: 401 }
      );
    }

    const user = result.rows[0];
    //取出資料庫中的使用者所有資料           

    const isMatch = await bcrypt.compare(password, user.password);
    //比對密碼
    //compare(password, user.password);
    //compare效果為比對
    //password 為 原始密碼
    //user.password 為 加密後的密碼
    if (!isMatch) {                            
    // 密碼不正確
      return NextResponse.json(
        { error: '帳號或密碼錯誤' },
        { status: 401 }
      );
    }

    // 建立payload
    const payload = {
      userId: user.id,
      email: user.email,
      username: user.username,
      role: user.role,
      auth_provider: user.auth_provider,
      origIatMs: Date.now(),                     // 自行加入的簽發時間（毫秒），可用於安全策略
    };

    // 設定 token（設定存活時間 1 小時）
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: '3600s',                        
      // 1 小時
    });

    // 回傳訊息
    const res = NextResponse.json({
      message: '登入成功',
      userData: {                                
        userId: user.id,
        email: user.email,
        username: user.username,
        role: user.role,
        auth_provider: user.auth_provider,
      },
    });

    
    const isProd = process.env.NODE_ENV === 'production';
    //判斷現在程式是不是跑在「正式環境」。是就 true，不是就 false。
    //process.env.NODE_ENV是環境變數，表示目前執行模式
    //development 代表開發模式
    //production 代表正式模式

    res.cookies.set('user_token', token, {
      httpOnly: true,                            
      // 讓前端無法讀取cookie
      secure: isProd,                            
      // 本地開發（http://localhost）=> false
      // 正式環境（https://...）=> true
      //secure:false 代表可以在http發送cookie 如果是true 就必須是https才能發送
      sameSite: isProd ? 'none' : 'lax',         
      // 開發用 lax 較少踩雷；正式跨站才用 none
      //'strict' 嚴格模式 只在完全同站才傳送cookie
      //'lax' 寬鬆模式 一般同站會傳送 跨站則不傳送
      //'none' 完全開放 所有情況都會送
      path: '/',                                 
      // 全站都有效
      maxAge: 60 * 60,                           
      //Cookie 的存活時間 1 小時（秒）
    });

    
    return res;
    // cookie送出

  } catch (err) {                                
    console.error('登入錯誤:', err);
    return NextResponse.json(
      { error: '伺服器錯誤' },
      { status: 500 }
    );
  }
}
