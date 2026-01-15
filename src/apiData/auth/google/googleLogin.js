
// 設定google登入頁面的頁面資訊

//引入google前置檔案
import { googleConfig } from "@/apiData/utils/google/googleConfig";


export async function googleLogin() {
    //解構出googleID/個人ID/需要請求的資料
    const { client_id, redirect_uri, scope } = googleConfig;
    //宣告GOOGLE登入的頁面本身(並非網址而是網頁本身)
    const googleAuthURL = new URL("https://accounts.google.com/o/oauth2/v2/auth");

    googleAuthURL.searchParams.set("client_id", client_id);
    //告訴 Google 是誰在登入
    googleAuthURL.searchParams.set("redirect_uri", redirect_uri);
    //Google 登入成功後要回去哪裡
    googleAuthURL.searchParams.set("response_type", "code");
    //要求 Google 給你「授權碼」
    googleAuthURL.searchParams.set("scope", scope);
    //要求 Google 給你哪些資料
    googleAuthURL.searchParams.set("prompt", "select_account");
    //強制 Google 顯示「帳號選擇畫面」

    //如果想讓網站長時間不用重複登入再開啟以下兩項
    //googleAuthURL.searchParams.set("access_type", "offline");  
    //設定refresh_token，讓使用者下次不用重登
    //googleAuthURL.searchParams.set("prompt", "consent");       
    // 每次都要求重新登入

    //前面的函數都載入完成後會把使用者移動到GOOGLE登入頁面
    return googleAuthURL.toString();
}
