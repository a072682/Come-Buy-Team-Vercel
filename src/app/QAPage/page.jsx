

import { Suspense } from "react";
import QAPage from "@/singlePages/QAPage/QAPage";



export const metadata = {
  title: "新手指南 / QA｜Come & BUY 3D列印平台",
  description:
    "Come & BUY 的新手指南與常見問題頁面，整理 3D 列印下單流程、模型上傳與材料選擇說明，協助初次使用者快速了解並順利完成列印訂單。",
};

export default function page() {
  return (
    <>
      <Suspense fallback={<div>頁面載入中...</div>}>
        <QAPage />
      </Suspense>
    </>
  );
}
