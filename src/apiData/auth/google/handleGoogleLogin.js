
//將GOOGLE登入後的資料寫入資料庫

import db from "@/dataBase/db";

export async function handleGoogleLogin(googleData) {
  const { email, username, google_id, avatar_url, auth_provider } = googleData;

  // 查詢登入者是否存在
  const searchUser = await db.query(
    `
    SELECT id, username, email, role, auth_provider
    FROM users
    WHERE email = $1
    `,
    [email]
  );

  //取得使用者id資料
  const userId = searchUser.rows[0].id;
  if (!userId) {
      throw new Error("userId資料遺失");
  };

  //取得user_list資料
  const userListRes = await db.query(
      `SELECT id
      FROM user_list
      WHERE user_id = $1`,
      [userId]
  );

  //取得user_listId資料
  const userListId = userListRes.rows[0].id;
  if (!userListId) {
      throw new Error("userListId資料遺失");
  };

  //取得user_profiles資料
  const userProfilesRes = await db.query(
      `SELECT avatar_url,avatar_id
      FROM user_profiles
      WHERE user_list_id = $1`,
      [userListId]
  );

  //取得頭貼資料與頭貼id資料
  const avatarUrl = userProfilesRes.rows[0].avatar_url;
  const avatarId = userProfilesRes.rows[0].avatar_id;

  //如果使用者存在則直接回傳登錄者資料
  if (searchUser.rows.length > 0) {
    return {
      user: {
          userId: searchUser.rows[0].id,
          email: searchUser.rows[0].email,
          username: searchUser.rows[0].username,
          role:searchUser.rows[0].role,
          avatarUrl:avatarUrl || avatar_url,
          avatarId:avatarId || null,
          auth_provider:searchUser.rows[0].auth_provider,
          origIatMs: Date.now(),
      },
      isNewUser: false,
    };
  }

  // 如果使用者不存在則建立新會員
  // users建立基本資料
  const insertUser = await db.query(
    `
    INSERT INTO users
    (username, email, role, auth_provider, google_id)
    VALUES ($1, $2, 'user', $3, $4)
    RETURNING id, username, email, role, auth_provider
    `,
    [username, email, auth_provider, google_id]
  );
  //提取userId資料
  const newUserId = insertUser.rows[0].id;

  // user_list建立資料
  // 如果已經有user_id已經登錄過就更新updated_at就好
  const newUserListRes = await db.query(
      `
      INSERT INTO user_list (user_id, created_at, updated_at)
      VALUES ($1, now(), now())
      ON CONFLICT (user_id)
      DO UPDATE SET updated_at = EXCLUDED.updated_at
      RETURNING id
      `,
      [newUserId] 
  );
  //提取userId資料
  const newUserListId = newUserListRes.rows[0].id;

  // user_profiles建立資料
  // 如果已經有user_list_id已經登錄過就跳過
  await db.query(
      `
      INSERT INTO user_profiles (user_list_id, google_avatar_url)
      VALUES ($1, $2)
      ON CONFLICT (user_list_id) 
      DO NOTHING
      `,
      [newUserListId, avatar_url]
  );

  return {
    user: {
        userId: insertUser.rows[0].id,
        email: insertUser.rows[0].email,
        username: insertUser.rows[0].username,
        role:insertUser.rows[0].role,
        avatarUrl:avatar_url,
        avatarId:null,
        auth_provider:insertUser.rows[0].auth_provider,
        origIatMs: Date.now(),
    },
    isNewUser: true,
  };
}
