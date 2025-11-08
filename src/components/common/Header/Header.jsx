



"use client";
//告訴 Next.js：「這個檔案只在前端執行」，不在 Server 端執行。

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container, Navbar } from "react-bootstrap";
import HeaderCss from "./_Header.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { checkLogin, linkTest } from "@/store/slice/loginSlice";
import NavLink from "../NavLink/NavLink";
import OffcanvasPage from "./OffcanvasPage/OffcanvasPage";
import News from "./News/News";
import Faq from "./Faq/Faq";
import { MODALS, open } from "@/store/slice/modalSlice";
import UserDropdown from "./UserDropdown/UserDropdown";




export default function Header() {

    const [expanded, setExpanded] = useState(false);
    useEffect(()=>{},[expanded])

    //#region 讀取中央函式前置宣告
        //讀取中央函式前置宣告
        const dispatch = useDispatch();
    //#endregion

    //#region 連線測試
        //連線測試
        useEffect(()=>{
            dispatch(linkTest()); 
        },[]);
        //連線測試
    //#endregion

    //#region 讀取中央登入狀態資料
        //讀取中央資料
        const linkState = useSelector((state)=>{
            return(
                state.login.linkState
            )
        })

        useEffect(()=>{},[linkState])
    //#endregion


    //#region 讀取中央登入資料
        //讀取中央資料
        const loginState = useSelector((state)=>{
            return(
                state.login.isLogin
            )
        })

        useEffect(()=>{
            // console.log("loginState狀態:",loginState);
        },[loginState])
    //#endregion

    //#region 登入確認
        useEffect(() => {
            const getUserData = async()=>{
                try{
                    await dispatch(checkLogin()).unwrap();
                    // await dispatch(userLoginCounter()).unwrap();
                }catch(error){
                    console.log("登入檢查失敗",error);
                }
            };

            // 首次掛載先跑一次
            getUserData();

            // 監聽 pageshow：只要頁面被顯示，就有機會觸發
            const onPageShow = (event) => {
                //event.persisted此屬性如果是
                // false：代表是常規載入（真正從網路）。
                // true：代表這次顯示是從 BFCache 恢復
                if (event.persisted) getUserData();   // persisted=true 表示從 BFCache 恢復
            };
            //當頁面被顯示 (pageshow) 的時候，請執行指定的函式 onPageShow。
            //'pageshow' 是一個事件，代表:瀏覽器把頁面「顯示出來」了。
            //另外像是'click' → 代表使用者按了滑鼠。
            window.addEventListener('pageshow', onPageShow);

            return () => window.removeEventListener('pageshow', onPageShow);
        }, []);
    //#endregion

    //#region 側邊狀態
        //側邊狀態
            const [onOpen, setOnOpen] = useState(false); // 控制 offcanvas 開關
            useEffect(()=>{},[onOpen]);

            const handleOpen = () => setOnOpen(true);
            const handleClose = () => setOnOpen(false);
        //側邊狀態
    //#endregion

  return (
    <>
      <div className={`${linkState ? 'd-none' : HeaderCss.mask}`}>
          <div className={HeaderCss.loader}>
              <p className={HeaderCss.loaderText} aria-live="polite" aria-busy="true">
                  網站載入中，請稍後
                  <span className={HeaderCss.dots}>
                      <span>.</span><span>.</span><span>.</span>
                  </span>
              </p>
          </div>
      </div>
      <Navbar expand="lg" className={HeaderCss.navBgSet} expanded={expanded} id="siteHeader">
        <Container>
          <div className={HeaderCss.navbarBox}>
            {/* 左上角 Logo（放 public/assets/images/Header/logo-sm2.png） */}
            <Link   href={{ pathname: '/', hash: 'top' }} 
                    className={HeaderCss.navbarLogoLink}>
                <picture className={HeaderCss.navbarLogoBox}>
                    <source media="(max-width: 992px)" srcSet="/images/Header/logo-sm.png" />
                    <img    className={HeaderCss.navbarLogoImgSet} 
                            src={`/images/Header/logo.png`} 
                            alt="home-section2-1" />
                </picture>
            </Link>

            {/* lg 以上選項區塊 */}
            <div className={`${HeaderCss.navbarItemBox} d-none d-lg-flex`}>
              <News />
              <NavLink href="/EstimatePage" className={HeaderCss.navbarItemSet}>線上估價</NavLink>
              <NavLink href="/MaterialPage" className={HeaderCss.navbarItemSet}>材料選擇</NavLink>
              <Faq />
              <NavLink href="/bbb" className={HeaderCss.navbarItemSet}>聯絡我們</NavLink>
              <NavLink href="/btn" className={HeaderCss.navbarItemSet}>按鈕頁面</NavLink>
            </div>

            {/* lg 以上會員頭像 */}
            {
                loginState?
                (
                    <UserDropdown />
                )
                :
                (
                    <button className={`${HeaderCss.userImgBox} d-none d-lg-flex`}
                            onClick={()=>{dispatch(open(MODALS.LOGIN))}}
                    >
                        <Image  className={HeaderCss.userImgSet} 
                                src={"/images/Header/log01.png"}
                                alt="log01" 
                                fill
                                sizes="50px"
                                priority
                        />
                    </button>
                )
            }

            {/* lg 以下右上角：自訂漢堡選單按鈕（圖檔放 public/assets/images/Header/齒輪.png） */}
            <button className={`${HeaderCss.MenuIconBtnSet} d-flex d-lg-none`} onClick={() => {handleOpen()}}>
                <Image  className={HeaderCss.MenuIconImgSet}
                        src="/images/Header/齒輪.png"
                        alt="Logo"
                        fill
                        sizes="40px"
                        priority
                />
            </button>
          </div>
        </Container>
      </Navbar>
      <OffcanvasPage onOpen={onOpen} handleClose={handleClose}/> 
    </>
  );
}
