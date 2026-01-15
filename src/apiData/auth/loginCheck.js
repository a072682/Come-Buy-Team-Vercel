// apiData/auth/loginCheck.js
export function loginCheck(user) {
  // 這裡的 user 來自 verifyTokenData 解出來的 token payload
  return {
    message: "確認成功",
    user: {
      userId: user.userId,
      email: user.email,
      username: user.username,
      role: user.role,
      avatarUrl:user.avatarUrl,
      avatarId:user.avatarId,
      auth_provider: user.auth_provider,
    },
  };
}
