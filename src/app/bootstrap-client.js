

'use client';
//告訴 Next.js：「這個檔案只在前端執行」，不在 Server 端執行。

// 只要這行就會在瀏覽器端載入 Bootstrap 的 JS（含 Popper）
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function BootstrapClient() {
    return null; // 這個元件不渲染任何畫面，只負責副作用載入
}