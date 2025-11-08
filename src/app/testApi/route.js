// src/app/test-db/route.js

import { NextResponse } from 'next/server';
//引入伺服器套件
import pool from '@/lib/db';
// 引入資料庫連接資料

export const runtime = 'nodejs';
//runtime代表執行環境
//export const runtime = 'nodejs';意思是
//這個route.js的內容 要在nodejs環境中執行 是嗎?
export const revalidate = 0;
//設定0代表每次收到請求時都會重新執行不會直接回傳上次的結果

export async function GET() {
  try {
    const result = await pool.query('SELECT NOW()');
    return NextResponse.json({
      message: '連線成功',
      time: result.rows[0], // 例如 { now: '2025-11-03T...' }
    });
  } catch (error) {
    console.error('連線失敗', error);
    return new NextResponse('連線失敗', { status: 500 });
  }
}