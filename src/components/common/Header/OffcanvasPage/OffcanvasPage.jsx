"use client";



import OffcanvasPageCss from "./_OffcanvasPage.module.scss";
import { motion, AnimatePresence } from 'framer-motion';
import Link from "next/link";
import Image from "next/image";




function OffcanvasPage({onOpen, handleClose}) {

  return (
    
    <AnimatePresence mode="wait">
        {
            onOpen && (
            <>
                {/* 遮罩區（點擊後關閉） */}
                <motion.div
                    key="backdrop"
                    className={OffcanvasPageCss.offcanvasBackdrop}
                    onClick={()=>{handleClose()}}
                    initial={{ opacity: 0 }}// 進場動畫的起點
                    animate={{ opacity: 1 }}// 進場後的最終狀態
                    exit={{ opacity: 0 }}// 關閉時會淡出
                    transition={{ duration: 0.3 }}
                />

                {/* 側邊選單內容 */}
                <motion.div     key="panel"
                                className={OffcanvasPageCss.offcanvasPanel}
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
                    <div className={OffcanvasPageCss.offcanvasBox}>
                        <div className={OffcanvasPageCss.offcanvasHeader}>
                            <button onClick={()=>{handleClose()}} type="button" className={OffcanvasPageCss.offcanvasBtnClose} aria-label="Close">
                                <Image  className={OffcanvasPageCss.offcanvasCloseImgSet} 
                                        src="/images/header/offcanvas/Close.png" 
                                        alt="Close" fill priority/>
                            </button>
                        </div>
                        <div className={OffcanvasPageCss.offcanvasBody}>
                            
                            
                            
                            <Link href="/aaa" className={OffcanvasPageCss.offcanvasItemSet} onClick={()=>{handleClose()}}>AAA</Link>
                            <Link href="/index02" className={OffcanvasPageCss.offcanvasItemSet} onClick={()=>{handleClose()}}>INDEX</Link>
                            
                                
                            <button className={OffcanvasPageCss.userImgBox} onClick={()=>{handleClose();}}>
                                <Image  className={OffcanvasPageCss.offcanvasCloseImgSet} 
                                        src="/images/header/log01.png" 
                                        alt="Close" fill priority/>
                            </button>
                                
                            
                        </div>
                    </div>
                </motion.div>
            </>
            )
        }
    </AnimatePresence>
    )
    
}

export default OffcanvasPage;
