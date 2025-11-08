



import jwt from 'jsonwebtoken';                 // 解析/驗證 JWT 的套件（你已安裝）


const { JWT_SECRET } = process.env;             
// 從 .env.local 讀取
if (!JWT_SECRET) {
  throw new Error('無法取得密鑰');
}


export async function verifyCookie(req) {
  
  const token = req.cookies.get('user_token')?.value;
  //取得名為user_token的cookie並取出value的內容
  if (!token) {
    // 沒帶 cookie 就回 401（未授權）
    throw new Response(
      JSON.stringify({ error: '未授權', message: '尚未登入，請先登入' }),
      //.stringify的作用是把JS 物件轉成JSON 字串
      { status: 401 }
    );
  }

  try {
    const payload = jwt.verify(token, JWT_SECRET);
    //驗證與解碼 JWT
    return payload;
  } catch (err) {
    // 無效或過期
    throw new Response(
      JSON.stringify({ error: '未授權', message: '登入失敗：Token 無效或已過期' }),
      { status: 401 }
    );
  }
}
