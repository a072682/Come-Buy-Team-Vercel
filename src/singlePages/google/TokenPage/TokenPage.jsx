'use client';

import { useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";


export default function TokenPage() {
    //useSearchParams的意思是讀網址 ?xxx=yyy 的工具
    const searchParams = useSearchParams();
    //取出toekn的資訊
    //假設網址是http://localhost:3000/tokenPage?value=abc123
    //則.get("value")可以取得value=後面的內容
    //等於 token = "abc123"
    const token = searchParams.get("value");

    //useRouter()是Next.js 版的「頁面跳轉控制器」
    const router = useRouter();
    
    useEffect(() => {
      //如果token沒有取得資料則跳出
      if (!token) {
        return;
      }

      // 存入 token
      localStorage.setItem("token", token);

      // 清掉網址參數，回首頁
      router.replace("/");
    }, [token, router]);

    return (
      <div>登入中，請稍候…</div>
    );
}
