//googleConfig.js 此檔案作用為Google 登入的前置設定

export const googleConfig = {
  client_id: process.env.GOOGLE_CLIENT_ID,
  client_secret: process.env.GOOGLE_CLIENT_SECRET,
  redirect_uri: process.env.GOOGLE_REDIRECT_URI,
  scope: [
    "profile",
    "email"
  ].join(" "),
  //google要求scope 必須是一條字串，權限之間要用空白分隔
  //例如："profile email" 不接受["profile", "email"] 之類的
  //.join(" ")的意思把陣列內容用你指定的字串連接起來
  //例如原本為["a","b","c"] 使用 join("/")後 會變成 "a/b/c"
};
