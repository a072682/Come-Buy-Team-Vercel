import UserPages from "@/singlePages/UserPages/UserPages";


export const metadata = {
  title: "會員資料頁面｜Come & BUY 3D列印平台",
  description:
    "會員可於此頁查看與編輯個人資料、聯絡資訊與帳號設定",
};

export default function page() {
  return (
    <>
      <UserPages />
    </>
  );
}
