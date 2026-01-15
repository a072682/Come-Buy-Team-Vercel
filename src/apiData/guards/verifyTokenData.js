import jwt from "jsonwebtoken";
//jsonwebtoken是一個用來產生token和驗證的套件

// ===== 時間常數（ms）=====
const hours1MS = 60 * 60 * 1000;        // 60 分鐘
const hours12Ms = 12 * 60 * 60 * 1000;  // 絕對上限 12 小時

export function verifyTokenData(req) {

    //從標頭檔中(header)取得token
    const auth = req.headers.get("authorization");
    //從標頭檔中(header)取得token

    //如果token不存在回報錯誤
    if (!auth) {
        return {
            pass: false,
            status: 401,
            data: { error: "未帶授權 Token" },
        };
        //大概內容
        // {
        //     pass: false,
        //     status: 401,
        //     data: {
        //         error: "未帶授權 Token"
        //     }
        // }
    }

    //將token過濾後將具體資訊給予token函數
    const token = auth.replace("Bearer ", "").trim();
    //將token過濾後將具體資訊給予token函數

    //驗證 Token
    try {
        //驗證token的JWT_SECRET(鑰匙)以及解析token資料
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        //驗證token的JWT_SECRET(鑰匙)以及解析token資料

        // 目前時間
        const nowTimeMs = Date.now();
        // 目前時間

        // token 到期時間（exp 是秒） 
        const tokenLiveTimeMs = decoded.exp * 1000;
        // token 到期時間（exp 是秒） 

        // 剩餘時間
        const lastTimeAllMs = tokenLiveTimeMs - nowTimeMs;
        console.log("token剩餘時間",lastTimeAllMs);
        // 剩餘時間

        // 確認第一次登入起始時間
        const firstTimeLogInTime = decoded.origIatMs ?? nowTimeMs;
        // 確認第一次登入起始時間

        // 確認目前登入總時間
        const loginAllTime = nowTimeMs - firstTimeLogInTime;
        // 確認目前登入總時間

        // 超過 12 小時 → 強制重新登入
        if (loginAllTime > hours12Ms) {
            return {
                pass: false,
                status: 401,
                data: { error: "已達最長時數，請重新登入" },
            };
        }
        // 超過 12 小時 → 強制重新登入

        // 宣告 newToken，預設為 null
        // 若沒有續期，後面會保持為 null
        let newToken = null;
        // 宣告 newToken，預設為 null

        // 剩餘時間低於 1 小時 → 給予新token
        if (lastTimeAllMs <= hours1MS) {
            newToken = jwt.sign(
                {
                    userId: decoded.userId,
                    email: decoded.email,
                    username: decoded.username,
                    role: decoded.role,
                    avatarUrl: decoded.avatarUrl,
                    avatarId: decoded.avatarId,
                    auth_provider: decoded.auth_provider,
                    origIatMs: firstTimeLogInTime, // 保留第一次登入時間
                },
                process.env.JWT_SECRET,
                { expiresIn: Math.floor(hours1MS / 1000) + "s" }
            );
        }
        // 剩餘時間低於 1 小時 → 給予新token
        
        // 驗證成功，將結果往後傳
        return {
            pass: true,
            status: 200,
            data: decoded,
            newToken,
        };
        // 驗證成功，將結果往後傳

        //大概內容
        // {
        //     pass: true,
        //     status: 200,
        //     data: {
        //         userId: 123,
        //         username: "andy",
        //         role: "user",
        //         email: "andy@test.com",
        //         iat: 1710000000,
        //         exp: 1710003600
        //     }
        //     newToken,
        // }
        
    } catch (err) {
        return {
            pass: false,
            status: 401,
            data: { error: "Token 無效或過期" },
        };

        // {
        //     pass: false,
        //     status: 401,
        //     data: {
        //         error: "Token 無效或過期"
        //     }
        // }
    }
}
