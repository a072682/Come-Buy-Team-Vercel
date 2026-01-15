
// 將 Google user 資料轉為資料庫格式
export function formatGoogleUser(googleUser) {
  return {
    google_id: googleUser.id,
    username: googleUser.name,
    email: googleUser.email,
    avatar_url: googleUser.picture,
    auth_provider: "google",
  };
}

