"use client";

import Link from 'next/link';
import './_IndexPageMain1.scss';
import { AnimatePresence, motion } from 'framer-motion';

function IndexPageMain1({triggerSet,fadeUp}){

    return(
        <>
            <AnimatePresence>
                <article className="main1">   
                    {/* 背景貼圖 */}
                    <div className="main1-bg"></div>
                    {/* 背景貼圖 */}

                    {/* 角落貼圖 */}
                    <img className="main-corner-img" src="/images/IndexPage/main1/main-sm-corner.png" alt="main-sm-corner" />
                    {/* 角落貼圖 */}

                    {/* 主要內容顯示區 */}
                    <motion.div className='mainBox'
                                variants={triggerSet}
                                initial="hidden"
                                whileInView="show"                      
                                viewport={{ amount: 0, margin: "0% 0px -40% 0px" }} 
                    >
                        <div className="container containerBox">{/*外框 要增加y軸pd在這邊加 sm用*/}
                            {/* 右方/上方內容 */}
                            <motion.div className="main1-right-content"
                                        variants={fadeUp}
                            >
                                {/* 標題區塊 */}
                                <h2 className="main1-titleSet">
                                    <p className='titleTextSet'>從想像到實物</p>
                                    <p className='titleTextSet'>只需Come & Buy</p>
                                </h2>
                                {/* 標題區塊 */}

                                {/* 按鈕設定 */}
                                <Link className="main1-btn1-set mian-btn1-set" href="/EstimatePage">
                                    開始製作
                                </Link>
                                {/* 按鈕設定 */}

                                {/*內層外框*/}
                            </motion.div>
                            {/* 右邊/上方內容 */}

                            {/* 左方/下方內容 */}
                            <motion.div className='main1-left-content'
                                        variants={fadeUp}
                            >
                                {/* 圖片區塊 */}
                                <div className="main1-img-box">
                                    <img className="main1-img" src={`/images/IndexPage/main1/main-frame.png`} alt="main-frame" />
                                </div>
                                {/* 圖片區塊 */}
                            </motion.div>
                            {/* 左方/下方內容 */}
                        </div>
                    </motion.div>
                    {/* 主要內容顯示區 */}
                </article>
            </AnimatePresence>
            
        </>
    )
}
export default IndexPageMain1;