import './_OffcanvasPage.scss';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import OffcanvasNews from './offcanvasNews/offcanvasNews';
import OffcanvasFaq from './offcanvasFaq/offcanvasFaq';
import OffcanvasUser from './offcanvasUser/OffcanvasUser';
import { useDispatch } from 'react-redux';
import { MODALS, open } from '@/store/slice/modalSlice';
import Link from 'next/link';





function OffcanvasPage({ onOpen, handleClose, loginState}) {

    //#region 讀取中央函式前置宣告
        //讀取中央函式前置宣告
        const dispatch = useDispatch();
    //#endregion
    
    //控制上一頁問題
        useEffect(() => {
            if (onOpen) {
                document.body.style.overflow = "hidden"; // 🔒 禁止滾動
                //console.log("滾動鎖住");
            }else{
                document.body.style.overflow = "auto"; // ✅ 恢復滾動
                //console.log("滾動解除");
            }
            return () => {
                //console.log("組件解散");
            };
        }, [onOpen]);
    //控制上一頁問題

        

  return (
    <AnimatePresence>
        {   
            onOpen && 
            (
                <>
                    {/* 遮罩區（點擊後關閉） */}
                    <div className="offcanvas-backdrop" onClick={()=>{handleClose()}}></div>

                    {/* 側邊選單內容 */}
                    <motion.div     className="offcanvas-panel"
                                    drag="x" //允許橫向拖曳
                                    dragDirectionLock //使用者一開始「橫向滑動」後（x 軸），就會「鎖定橫向拖曳」避免出現滑一滑跑成 y 軸
                                    dragConstraints={{ left: 0, right: 0 }}//Framer Motion 需要一個 dragConstraints 屬性存在才能啟用拖曳不限制移動距離，純粹是解鎖拖曳功能
                                    onDragEnd={(event, info) => { //拖曳結束後觸發（根據滑動距離決定關閉）
                                        //info.offset.x 從拖曳開始到結束的 位移量（px）。負值 = 往左拉，正值 = 往右拉。
                                        //info.velocity.x：放手當下的 速度（px/s）
                                        if (info.offset.x > 150) { 
                                            // 左滑 info.offset.x < -150
                                            // 右滑 info.offset.x > 150
                                            handleClose();
                                        }
                                    }}
                                    initial={{ x: '100%' }} 
                                    // 進場動畫的起點 一開始的位置：在螢幕外左側（-100%）
                                    // 在螢幕外右側（100%）
                                    animate={{ x:  0 }} // 進場後的最終狀態 當顯示時位置為 0（正常展開）
                                    exit={{ x: '100%' }}
                                    // 離場動畫的終點 螢幕外左側（-100%）
                                    // 在螢幕外右側（100%）
                                    transition={{ type: 'tween', duration: 0.3 }}//控制動畫速度與手感
                    >
                        <div className="offcanvas-box">
                            <div className="offcanvas-header">
                                <button onClick={()=>{handleClose()}} type="button" className="offcanvasBtnClose" aria-label="Close">
                                    <img className="offcanvasCloseImgSet" src={`/images/Header/offcanvas/Close.png`} alt="Close" />
                                </button>
                            </div>
                            <div className="offcanvas-body">
    
                                <OffcanvasNews handleClose={handleClose}/>
                                <Link href="/EstimatePage" className="offcanvasItem-set" onClick={()=>{handleClose()}}>線上估價</Link>
                                <Link href="/MaterialPage" className="offcanvasItem-set" onClick={()=>{handleClose()}}>材料選擇</Link>
                                <OffcanvasFaq handleClose={handleClose}/>
                                <Link href="/AboutUsPage" className="offcanvasItem-set" onClick={()=>{handleClose()}}>聯絡我們</Link>

                                {
                                    loginState?
                                    (
                                        <OffcanvasUser handleClose={handleClose}/>
                                    )
                                    :
                                    (
                                        <button className="userImg-box" onClick={()=>{dispatch(open(MODALS.LOGIN));handleClose();}}>
                                            <img className="userImg-set" src={`/images/Header/log01.png`} alt="log01" />
                                        </button>
                                    )
                                }
                            </div>
                        </div>
                    </motion.div>
                </>
            )
        }
    </AnimatePresence>
  );
}

export default OffcanvasPage;
