



'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
//在 client 取得目前的路徑字串（例如 "/products/123?tab=info" 會回傳 "/products/123"，不含 query/hash
import NavLinkScss from './_NavLink.module.scss';

export default function NavLink({
  href, 
  //href：要前往的路徑（必要值），例如 "/products"。
  exact = false,         
  // true: 只在完全相等時 active；
  // false: 子路徑也算 active
  children,
  //放在 <NavLink>…</NavLink> 中的任何內容
  className = '',
  //className（預設空字串）：共同套用在連結上的 class（不論 active 與否）
}) {

    //取得路徑函數宣告
    const pathname = usePathname();
    //取得路徑函數宣告


    const isActive = exact ? pathname === href : pathname.startsWith(href);
    //依 exact 決定 active 的判斷方式
    //exact === true：用全等比較
    //exact === false：用 startsWith（前綴相同就算）。

    const merged = `${NavLinkScss.navLink} ${isActive ? NavLinkScss.active : ''} ${className || ''}`.trim();

    return (
        <Link href={href} aria-current={isActive ? 'page' : undefined} className={merged}>
            {children}
        </Link>
    );
}
