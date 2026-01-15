//登入完成後會移動到此api並執行

import axios from "axios";
import { googleConfig } from "@/apiData/utils/google/googleConfig";

export async function googleCallback(code) {

    //如果沒有code則回報錯誤
    if (!code) {
        throw new Error("缺少 Google 授權碼 (code)");
    }

    //用 code 換 access_token + id_token
    const tokenResponse = await axios.post(
      //Google官方指定的位置
      "https://oauth2.googleapis.com/token",
      //建立一個表格物件
      new URLSearchParams({
        // Google callback 給的授權碼
        code,
        // 自己的 Google OAuth Client ID
        client_id: googleConfig.client_id,
        // 後端密鑰
        client_secret: googleConfig.client_secret,
        // 登入完成過後的網址
        redirect_uri: googleConfig.redirect_uri,
        //規範標準寫法 grant_type: "authorization_code"
        //此寫法規則為「使用者登入 → 拿 code → 換 token」
        grant_type: "authorization_code",
      }),
      {
        //與new URLSearchParams配套的是"application/x-www-form-urlencoded"
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      }
    );

    // 取得google提供的token整組資料
    //內容長這樣（實際可能會更多，但結構固定）
    // {
    //   "access_token": "xxxxxx",
    //   "expires_in": 3599,
    //   "scope": "profile email",
    //   "token_type": "Bearer",
    //   "id_token": "xxxxxx",
    //   "refresh_token": "xxxxxx"   
    // }
    const tokenData = tokenResponse.data;

    //跟Google 要使用者資料的憑證
    const access_token = tokenData.access_token;
    //google本身給予使用者的token
    const id_token = tokenData.id_token;
    //如果沒有取得憑證則回報錯誤
    if (!access_token) {
      throw new Error("無法取得 Google access_token");
    }

    //用 access_token 向 Google 要使用者資料
    const googleUserRes = await axios.get(
      //Google官方指定的位置
      "https://www.googleapis.com/oauth2/v2/userinfo",
      //指定帶入憑證資訊的標頭檔
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );

    // googleUser 內容通常包含：
    // {
    //   id,
    //   email,
    //   name,
    //   picture,
    //   verified_email
    // }
    //這邊得到的內容是根據前置googleConfig.js中的scope設定的
    //如果一開始scope請求為空數值那這邊googleUserData就不會有東西(或是只有id編號)
    
    return googleUserRes.data;
}
