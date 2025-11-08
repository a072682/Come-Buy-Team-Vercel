


export const runtime = 'nodejs'; 
//runtime代表執行環境
//export const runtime = 'nodejs';意思是
//這個route.js的內容 要在nodejs環境中執行 

import { NextResponse } from 'next/server';   
// Next 提供的 API 工具包
import bcrypt from 'bcrypt';                   
// bcrypt負責把密碼進行加密
 import pool from '@/lib/db';           
// 與PostgreSQL資料庫的連線資料
import Joi from 'joi';                         
// Joi負責建立規則來驗證輸入的資料

//建立規則驗證創建會員時輸入的資料
const userSchema = Joi.object({                // 宣告一個 Joi 規則物件
  username: Joi.string().min(3).max(30).required(), // username 必須是字串、長度 3~30、必填
  email: Joi.string().email().required(),      // email 必須是符合 email 格式的字串、必填
  password: Joi.string().min(6).required(),    // password 必須是字串、至少 6 碼、必填
});                                            



export async function POST(req) {  
//POST(req)代表API 的請求類型
//req 是用來接收前端傳來的所有請求資料            
  try {                                       
    const { username, email, password } = await req.json();
    // 對前端傳送的資料進行解構

    const { error } = userSchema.validate({ username, email, password });
    //對解構出的資料使用joi規則進行驗證
    if (error) {                               
    //如有錯誤則執行以下內容
      return NextResponse.json(                
        { error: error.details[0].message },   // 把錯誤訊息進行回傳
        { status: 400 }                        // 設定 HTTP 狀態碼為 400
      );
    }

    
    const role = 'user';                       
    //將role(權限)預設為user
    const provider = 'local';                  
    //將provider(登入來源)預設為local(本地)

    
    const existing = await pool.query(         
    //檢查是否已註冊
      `SELECT id FROM users WHERE username = $1 OR email = $2`,
      [username, email]                        
    );
    if (existing.rowCount !== 0) {             
    //如果搜尋的資料不等於0則執行以下內容
      return NextResponse.json(                
        { error: '此用戶已註冊' }, 
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    //最密碼進行加密
    //第二個參數 10 是指加密難度為10數字越大雜湊越花時間也越難暴力破解


    
    await pool.query( 
    //把使用者資料寫入資料庫                         
      `
        INSERT INTO users (username, email, password, role, auth_provider, created_at)
        VALUES ($1, $2, $3, $4, $5, now())
      `,
      [username, email, hashedPassword, role, provider] 
    );

    return NextResponse.json(                  
    // 回傳JSON成功訊息
      { message: '會員註冊成功' },              
      { status: 201 }                          
    );

  } catch (err) {                              
    console.error('註冊失敗', err);            
    return NextResponse.json(                  
      { error: '會員註冊失敗' },                
      { status: 500 }                          
    );
  }
}
