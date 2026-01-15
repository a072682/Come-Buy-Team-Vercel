



'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
//在 client 取得目前的路徑字串（例如 "/products/123?tab=info" 會回傳 "/products/123"，不含 query/hash

export default function NavLink({
  to = "/", 
  //to：要前往的路徑（必要值），例如 "/products"。
  exact = false,         
  // true: 只在完全相等時 active；
  // false: 子路徑也算 active
  className = "",
  //className（預設空字串）：共同套用在連結上的 class（不論 active 與否）
  children,
  //放在 <NavLink>…</NavLink> 中的任何內容
}) {

    //取得路徑函數宣告
    const pathname = usePathname();
    //取得路徑函數宣告

    // 如果 to === "/"，強制使用 exact（避免所有路徑都 active）
    const shouldUseExact = to === "/" ? true : exact;

    const isActive = shouldUseExact ? (pathname === to) : (pathname.startsWith(to));
    //依 exact 決定 active 的判斷方式
    //exact === true：用全等比較
    //exact === false：用 startsWith（前綴相同就算）。

    return (
        <Link   href={to} 
                aria-current={isActive ? 'page' : undefined} 
                className={`${className} ${isActive ? "active" : ""}`.trim()}>
            {children}
        </Link>
    );
}
