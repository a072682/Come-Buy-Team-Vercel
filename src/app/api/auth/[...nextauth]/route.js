


//引入next登入套件
import NextAuth from "next-auth";
//引入google登入套件
import GoogleProvider from "next-auth/providers/google";


//這個route.js的內容 要在nodejs環境中執行 
export const runtime = "nodejs";


//從db檔案中取出連線數據
import pool from "@/lib/db"; 


// 調整google頭像圖片尺寸函式
function normalizePhoto(img) {
  if (!img) return null;
  return img.replace(/s\d+-c/, "s256-c");
}


export const authOptions = {
    //設定登入來源
    providers: [
        // 登入來源:google
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret:process.env.GOOGLE_CLIENT_SECRET,

            //每次登入都強制出現帳號選擇器
            authorization: {
                params: {
                    prompt: "select_account", 
                    // 若也想每次都顯示授權同意頁可用 "consent select_account"
                    // access_type: "offline", response_type: "code"  // 需要 refresh_token 時可加
                },
            },
        }),
    ],

    //next登入套件所使用的key
    //secret為標準名稱
    secret: process.env.NEXTAUTH_SECRET,

    //把登入狀態用 JWT 裝起來，放在 Cookie 裡
    session: { strategy: "jwt" },

    //設定google登入後要做的事情內容
    callbacks: {
        //signIn通過google登入後的第一個階段
        //user內容:將profile內容進行簡單化(profile資料內容會是多層結構一層包一層)
        //同時也是要將資料帶出去的暫存器
        //account內容:登入來源的相關資訊 
        //profile內容:登入者的相關資料（信箱/名稱/頭像…）
        async signIn({ user, account, profile }) {
            //如果登入來源不是google則跳出
            if (account?.provider !== "google") {
                console.log("來源不是google");
                return true;
            }

            try {
                //儲存登入者資料
                //先取profile.emails[0].value沒有的話取user.email再沒有的話取null
                const email = (profile?.emails?.[0]?.value ?? user?.email ?? null);
                const googleId = account?.providerAccountId;
                const username = profile?.displayName ?? user?.name ?? null;
                const googleAvatarUrl = normalizePhoto(profile?.photos?.[0]?.value ?? user?.image);


                //使用google_id 查詢會員
                const userData = await pool.query("SELECT * FROM users WHERE google_id = $1", [googleId]);

                //如果google_id存在則執行以下內容
                if (userData.rowCount > 0) {
                    //將會員id取出
                    const userId = userData.rows[0].id;

                    //查詢user_list的id
                    const listRes = await pool.query(
                        `SELECT id FROM user_list WHERE user_id = $1`,
                        [userId]
                    );
                    const listId = listRes.rows?.[0]?.id;

                    //將Google頭像更新至user_items資料表
                    if (listId) {
                        await pool.query(
                            `
                                UPDATE user_profiles
                                SET google_avatar_url = $1
                                WHERE user_list_id = $2
                            `,
                            [googleAvatarUrl, listId]
                        );
                    }

                    //資料儲存至 user，待會 jwt callback 會搬進 token
                    user.dbUserId = userId;
                    user.role = userData.rows[0].role;
                    user.auth_provider = userData.rows[0].auth_provider ?? "google";
                    user.image = googleAvatarUrl || user.image;

                    
                    // 允許登入
                    return true; 
                } else {
                    // === 新用戶流程 ===

                    //users資料表新增資料
                    const userRes = await pool.query(
                        `
                            INSERT INTO public.users
                            (
                                username, 
                                email, 
                                google_id, 
                                role, 
                                auth_provider, 
                                created_at
                            )
                            VALUES ($1, $2, $3, 'user', 'google', now())
                            RETURNING id, username, email, role, auth_provider
                        `,
                        [username, email, googleId]
                    );
                    const userId = userRes.rows[0].id;

                    //先在user_list先新增資料
                    const listRes = await pool.query(
                        `
                            INSERT INTO public.user_list 
                            (
                                user_id, 
                                created_at, 
                                updated_at
                            )
                            VALUES ($1, now(), now())
                            ON CONFLICT (user_id) DO UPDATE
                            SET updated_at = EXCLUDED.updated_at
                            RETURNING id
                        `,
                        [userId]
                    );
                    const listId = listRes.rows[0].id;

                    //建立預設資料
                    const defaultUserData = {
                        salutation: null,
                        last_name: null,
                        first_name: null,
                        birth_year: null,
                        birth_month: null,
                        birth_day: null,
                        phone: null,
                        mobile: null,
                        country_code: null,
                        postal_code: null,
                        address_line: null,
                        avatar_url: null,
                        avatar_id: null,
                    };

                    await pool.query(
                        `
                            INSERT INTO public.user_profiles
                            (
                                user_list_id, 
                                salutation, 
                                last_name, 
                                first_name, 
                                birth_year, 
                                birth_month, 
                                birth_day,
                                phone, 
                                mobile, 
                                country_code, 
                                postal_code, 
                                address_line, 
                                avatar_url, 
                                avatar_id, 
                                google_avatar_url
                            )
                            VALUES
                            ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15)
                            ON CONFLICT (user_list_id) DO UPDATE SET
                                salutation         = EXCLUDED.salutation,
                                last_name          = EXCLUDED.last_name,
                                first_name         = EXCLUDED.first_name,
                                birth_year         = EXCLUDED.birth_year,
                                birth_month        = EXCLUDED.birth_month,
                                birth_day          = EXCLUDED.birth_day,
                                phone              = EXCLUDED.phone,
                                mobile             = EXCLUDED.mobile,
                                country_code       = EXCLUDED.country_code,
                                postal_code        = EXCLUDED.postal_code,
                                address_line       = EXCLUDED.address_line,
                                avatar_url         = EXCLUDED.avatar_url,
                                avatar_id          = EXCLUDED.avatar_id,
                                google_avatar_url  = EXCLUDED.google_avatar_url
                        `,
                        [
                            listId,
                            defaultUserData.salutation,
                            defaultUserData.last_name,
                            defaultUserData.first_name,
                            defaultUserData.birth_year,
                            defaultUserData.birth_month,
                            defaultUserData.birth_day,
                            defaultUserData.phone,
                            defaultUserData.mobile,
                            defaultUserData.country_code,
                            defaultUserData.postal_code,
                            defaultUserData.address_line,
                            defaultUserData.avatar_url,
                            defaultUserData.avatar_id,
                            googleAvatarUrl,
                        ]
                    );

                    //資料儲存至 user，待會 jwt callback 會搬進 token
                    user.dbUserId = userId;
                    user.role = userRes.rows[0].role;
                    user.auth_provider = userRes.rows[0].auth_provider;
                    user.image = googleAvatarUrl || user.image;

                
                    return true;
                }
            } catch (error) {
                console.error("Google登入錯誤:", error);
                return false; // 拒絕登入（NextAuth 會導去錯誤頁）
            }
        },

        //signIn的下一個階段
        //signIn中return true的會來到此階段
        async jwt({ token, user, account, profile }) {
            //如果登入來源為google則寫入token
            if (account?.provider === "google") {
                token.provider = "google";
            }
            //如果使用者id存在則寫入token
            if (user?.dbUserId) {
                token.userId = user.dbUserId;
            }
            //如果使用者權限存在則寫入token
            if (user?.role) {
                token.role = user.role;
            }
            //如果使用者登入來源存在則寫入token
            if (user?.auth_provider) {
                token.auth_provider = user.auth_provider;
            }

            // 頭像：以 Google 圖優先
            const pic =
                profile?.picture ||
                profile?.photos?.[0]?.value ||
                user?.image ||
                token.picture ||
                null;
            if (pic) {
                token.picture = normalizePhoto(pic);
            }

            return token;
        },

        //最後登入階段，決定最終要將甚麼資料回傳給前端
        async session({ session, token }) {
            //確保ession.user容器存在
            //若原本沒有就建立一個空物件；如果原本有，就保留它。
            session.user = session.user || {};
            if (token.picture) {
                session.user.image = token.picture;
            }
            session.user.id = token.userId ?? session.user.id ?? null;
            session.user.role = token.role ?? session.user.role ?? "user";
            session.provider = token.provider ?? "google";
            session.auth_provider = token.auth_provider ?? "google";
            
            return session;
        },
    },

    // （可選）自訂登入頁
    // pages: { signIn: "/login" },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
