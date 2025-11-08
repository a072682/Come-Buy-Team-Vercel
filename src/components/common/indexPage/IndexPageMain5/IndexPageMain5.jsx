"use client";

import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import IndexPageMain5Css from "./_IndexPageMain5.module.scss";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';

function IndexPageMain5(){

    const router = useRouter();

    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const main5Data = [
    {
        title:"2024材料與應用展即將來臨",
        content:"第十三屆材料與應用大展將於2024年10月20日盛大登場，聚焦前沿科技與創新應用，精彩不容錯過。",
        html:"https://www.imttaiwan.com/",
        img: `/images/IndexPage/main5/index-mian5-img01.png`,
        imgSm: `/images/IndexPage/main5/index-mian5-sm-img01.png`
    },
    {
        title:"Come&Buy榮獲藍點設計獎",
        content:"好消息！恭喜Come&Buy榮獲藍點設計獎，這一殊榮肯定了我們在3D列印與創新設計領域的卓越表現。",
        html:"https://www.imttaiwan.com/",
        img:`/images/IndexPage/main5/index-mian5-img02.png`,
        imgSm: `/images/IndexPage/main5/index-mian5-sm-img02.png`,
    },
    {
        title:"新材料現世！！！",
        content:"德國杜瓦實驗室發表最新型奈米級技術,將在材料科學與應用領域帶來突破性進展。",
        html:"https://www.imttaiwan.com/",
        img:`/images/IndexPage/main5/index-mian5-img03.png`,
        imgSm: `/images/IndexPage/main5/index-mian5-sm-img03.png`,
    },
    {
        title:"2024材料與應用展即將來臨",
        content:"第十三屆材料與應用大展將於2024年10月20日盛大登場，聚焦前沿科技與創新應用，精彩不容錯過。",
        html:"https://www.imttaiwan.com/",
        img: `/images/IndexPage/main5/index-mian5-img01.png`,
        imgSm: `/images/IndexPage/main5/index-mian5-sm-img01.png`
    },
    {
        title:"Come&Buy榮獲藍點設計獎",
        content:"好消息！恭喜Come&Buy榮獲藍點設計獎，這一殊榮肯定了我們在3D列印與創新設計領域的卓越表現。",
        html:"https://www.imttaiwan.com/",
        img:`/images/IndexPage/main5/index-mian5-img02.png`,
        imgSm: `/images/IndexPage/main5/index-mian5-sm-img02.png`,
    },
    {
        title:"新材料現世！！！",
        content:"德國杜瓦實驗室發表最新型奈米級技術,將在材料科學與應用領域帶來突破性進展。",
        html:"https://www.imttaiwan.com/",
        img:`/images/IndexPage/main5/index-mian5-img03.png`,
        imgSm: `/images/IndexPage/main5/index-mian5-sm-img03.png`,
    },
]

    return(
        <>  
            {/* 元件最外框 */}
            <div className={IndexPageMain5Css.main5}>
                <div className="container">        {/*外框 要增加y軸pd在這邊加*/}
                    <div className="row">
                        <div className="col-12">
                            {/* 元件外框 */}
                            <div className={IndexPageMain5Css.main5Content}>
                                {/* 標題外框 */}
                                <div className={IndexPageMain5Css.main5Title}>
                                    {/* 標題 */}
                                    <h2 className={IndexPageMain5Css.main5TitleSet}>最新消息</h2>
                                    {/* 標題 */}
                                </div>
                                {/* 標題外框 */}

                                {/* 輪播最外框 */}
                                <div className={IndexPageMain5Css.swiperBox}>
                                    {/* 輪播本體 */}
                                    <Swiper
                                        modules={[Navigation, Autoplay]}
                                        spaceBetween={0}
                                        slidesPerView={1}
                                        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
                                        loop={true}
                                        centeredSlides={true}
                                        className={IndexPageMain5Css.indexSwiper}
                                        breakpoints={{
                                            768: { 
                                                slidesPerView: 2,
                                                spaceBetween: 32,
                                                centeredSlides: false,
                                            }, // 電腦顯示 3 張
                                            1200: { 
                                                slidesPerView: 3,
                                                spaceBetween: 32,
                                                centeredSlides:true,
                                            }, // 電腦顯示 3 張
                                        }}
                                    >
                                        {
                                            main5Data?.map((itme,index)=>{
                                                return(
                                                    <SwiperSlide key={index}>
                                                        {/* 輪播卡片設定 */}
                                                        <div className={IndexPageMain5Css.main5Card}>
                                                            {/* 輪播圖片設定 */}
                                                            <div className={`${IndexPageMain5Css.main5CardImgBox} mx-auto`}>
                                                                <picture>
                                                                    <source srcSet={itme.img} media="(min-width:1400px)" />
                                                                    <Image  className={IndexPageMain5Css.imgSet} 
                                                                            src={itme.imgSm} 
                                                                            alt={itme.title} 
                                                                            fill
                                                                            sizes="400px"
                                                                            priority
                                                                    />
                                                                </picture>
                                                            </div>
                                                            {/* 輪播圖片設定 */}
                                                            
                                                            {/* 輪播文字外框 */}
                                                            <div className={IndexPageMain5Css.main5CardTextBox}>
                                                                <div className={IndexPageMain5Css.titleBox}>
                                                                    <h3 className={IndexPageMain5Css.titleSet}>
                                                                        {itme.title}
                                                                    </h3>
                                                                    <time className={IndexPageMain5Css.timeSet} dateTime="2024/04/01">
                                                                        2024/04/01
                                                                    </time>
                                                                    
                                                                </div>
                                                                <div className={IndexPageMain5Css.textBox}>
                                                                    <p className={IndexPageMain5Css.textSet}>
                                                                        {itme.content}
                                                                    </p>
                                                                </div>

                                                                <a className={`${IndexPageMain5Css.main5CardBtnSet} btn02Set`} 
                                                                    href={itme.html} target="_blank">
                                                                        閱讀更多
                                                                    <span className="material-symbols-outlined btn02IconSet">
                                                                        chevron_right
                                                                    </span>
                                                                </a>
                                                            </div>
                                                            {/* 輪播文字外框 */}
                                                        </div>
                                                        {/* 輪播卡片設定 */}
                                                    </SwiperSlide>
                                                )
                                            })
                                        }
                                    </Swiper>
                                    {/* 輪播本體 */}

                                    {/* swiper左右按鈕 */}
                                    <div className={IndexPageMain5Css.swiperBtnBox}>
                                        <button ref={nextRef} className={`${IndexPageMain5Css.swiperNextRBtn} swiperBtnR`}>
                                            <div className="imgBox">
                                                <Image  className="imgSet" 
                                                        src={`/images/IndexPage/main5/index-main5-arrowR.png`} 
                                                        alt="index-main5-arrowR"
                                                        fill
                                                        sizes="100px"
                                                        priority
                                                />
                                            </div>
                                        </button>
                                        <button ref={prevRef} className={`${IndexPageMain5Css.swiperNextLBtn} swiperBtnL`}>
                                            <div className="imgBox">
                                                <Image  className="imgSet" 
                                                        src={`/images/IndexPage/main5/index-main5-arrowL.png`} 
                                                        alt="index-main5-arrowL" 
                                                        fill
                                                        sizes="100px"
                                                        priority
                                                />
                                            </div>
                                        </button>
                                    </div>
                                    {/* swiper左右按鈕 */}
                                </div>
                                {/* 輪播最外框 */}
                            
                                {/* 連結按鈕 */}
                                <button className={`${IndexPageMain5Css.mian5CheckSmBtnSet} btn01Set`}
                                        type='button'
                                        onClick={() => {router.push('/')}}
                                >
                                    開始製作
                                </button>
                                {/* 連結按鈕 */}        
                                
                            </div>
                            {/* 元件外圍 */}
                        </div>
                    </div>
                </div>
            </div>
            {/* 元件最外圍 */}
        </>
    )
}
export default IndexPageMain5;