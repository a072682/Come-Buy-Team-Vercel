"use client";

import './_MaterialPageMain2.scss';
import { AnimatePresence, motion } from 'framer-motion';
import { Autoplay, Navigation, Pagination, } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css";// 核心 CSS
import "swiper/css/navigation";// 左右箭頭
//import MaterialPageModal from '../MaterialPageModal/MaterialPageModal';
import { useState } from 'react';



function MaterialPageMain2({handleOpenMaterialModal,triggerSet,fadeUp}){

    const[cardHover,setCardHover]=useState(null);

    const materiaPageMain2Card = [
    {
        img:`/images/MateriaPage/MaterialPageMain2SwiperImg01.png`,
        imgSm:`/images/MateriaPage/MaterialPageMain2SwiperSmImg01.png`,
        title: "FDM",
        MaterialIntroduction: "使用熱塑性 塑膠，如PLA、ABS、PETG等，透過擠出機加熱並層層堆積成型。",
        content01:"PLA為生物可分解材料，ABS可回收再利用，但燃燒時會產生有害氣體。",
        content02:"材料選擇影響強度與耐熱性，ABS需加熱平台，列印時可能產生氣味。",
        content03:"適合製作堅固耐用的零件，支撐結構易拆卸，精度適中，適合低成本製造。",
        content04:"適用於原型設計、教育模型、機械零件、家用製品及個人DIY製作。",
    },
    {
        img:`/images/MateriaPage/MaterialPageMain2SwiperImg02.png`,
        imgSm:`/images/MateriaPage/MaterialPageMain2SwiperSmImg02.png`,
        title: "SLA/DLP",
        MaterialIntroduction: "使用液態樹脂，透過UV光照射局部固化，逐層累積成型，表面光滑。",
        content01:"部分光敏樹脂可生物降解，但多數含化學成分，處理需符合環保規範。",
        content02:"樹脂具有刺激性，需佩戴防護裝備，列印後殘留物應妥善處理。",
        content03:"精度高，適合製作細緻模型，後處理需清洗與二次固化，易碎且脆。",
        content04:"廣泛用於牙科、珠寶設計、動畫模型、醫療器械及高精度零件製造。",
    },
    {
        img:`/images/MateriaPage/MaterialPageMain2SwiperImg03.png`,
        imgSm:`/images/MateriaPage/MaterialPageMain2SwiperSmImg03.png`,
        title: "SLM",
        MaterialIntroduction: "使用金屬粉末，如鋁、鈦、不鏽鋼等，透過高能雷射熔融並逐層成型。",
        content01:"可回收未使用金屬粉末，但粉塵與能耗較高，需良好防護與處理設備。",
        content02:"操作環境需控溫控濕，金屬粉塵易燃，需防爆與良好通風設備。",
        content03:"可製作高強度、耐高溫零件，無需支撐結構，適合精密與功能性部件。",
        content04:"廣泛應用於航空航太、醫療植入物、汽車工業及高端機械製造。",
    },
    {
        img:`/images/MateriaPage/MaterialPageMain2SwiperImg01.png`,
        imgSm:`/images/MateriaPage/MaterialPageMain2SwiperSmImg01.png`,
        title: "FDM",
        MaterialIntroduction: "使用熱塑性 塑膠，如PLA、ABS、PETG等，透過擠出機加熱並層層堆積成型。",
        content01:"PLA為生物可分解材料，ABS可回收再利用，但燃燒時會產生有害氣體。",
        content02:"材料選擇影響強度與耐熱性，ABS需加熱平台，列印時可能產生氣味。",
        content03:"適合製作堅固耐用的零件，支撐結構易拆卸，精度適中，適合低成本製造。",
        content04:"適用於原型設計、教育模型、機械零件、家用製品及個人DIY製作。",
    },
    {
        img:`/images/MateriaPage/MaterialPageMain2SwiperImg02.png`,
        imgSm:`/images/MateriaPage/MaterialPageMain2SwiperSmImg02.png`,
        title: "SLA/DLP",
        MaterialIntroduction: "使用液態樹脂，透過UV光照射局部固化，逐層累積成型，表面光滑。",
        content01:"部分光敏樹脂可生物降解，但多數含化學成分，處理需符合環保規範。",
        content02:"樹脂具有刺激性，需佩戴防護裝備，列印後殘留物應妥善處理。",
        content03:"精度高，適合製作細緻模型，後處理需清洗與二次固化，易碎且脆。",
        content04:"廣泛用於牙科、珠寶設計、動畫模型、醫療器械及高精度零件製造。",
    },
    {
        img:`/images/MateriaPage/MaterialPageMain2SwiperImg03.png`,
        imgSm:`/images/MateriaPage/MaterialPageMain2SwiperSmImg03.png`,
        title: "SLM",
        MaterialIntroduction: "使用金屬粉末，如鋁、鈦、不鏽鋼等，透過高能雷射熔融並逐層成型。",
        content01:"可回收未使用金屬粉末，但粉塵與能耗較高，需良好防護與處理設備。",
        content02:"操作環境需控溫控濕，金屬粉塵易燃，需防爆與良好通風設備。",
        content03:"可製作高強度、耐高溫零件，無需支撐結構，適合精密與功能性部件。",
        content04:"廣泛應用於航空航太、醫療植入物、汽車工業及高端機械製造。",
    },
];

    return(
        <>
            <AnimatePresence>
                <article className="MaterialPageMain2">
                    <div className="MaterialPageMain2-bg">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-lg-10 mx-auto">
                                    <motion.div className='MaterialPageMain2-content'
                                                variants={triggerSet}
                                                initial="hidden"
                                                whileInView="show"                      
                                                viewport={{ amount: 0, margin: "0% 0px -20% 0px" }}
                                    >
                                        
                                        <motion.div className="MaterialPageMain2-title"
                                                    variants={fadeUp}>
                                            <h2 className="title-set">材料類型:光固化</h2>
                                        </motion.div>
                                    
                                        <motion.div className='swiper-box'
                                                    variants={fadeUp}>
                                            {/* 按鈕區塊 */}
                                            <div className="Main1SwiperBtn-set">
                                                <button className="Main1BtnL">
                                                    <div className="img-box">
                                                        <img className="img-set" 
                                                            src={`/images/MateriaPage/main1/MateriaPage-main1-arrowL.png`} 
                                                            alt="MateriaPage-main1-arrowL" />
                                                    </div>
                                                </button>
                                                <button className="Main1BtnR">
                                                    <div className="img-box">
                                                        <img className="img-set" 
                                                            src={`/images/MateriaPage/main1/MateriaPage-main1-arrowR.png`} 
                                                            alt="MateriaPage-main1-arrowR" />
                                                    </div>
                                                </button>
                                            </div>

                                            {/* 頁籤的內容區塊 */}
                                            <div className="main1SwiperContent">
                                                <Swiper
                                                    modules={[Navigation, Pagination, Autoplay]}
                                                    spaceBetween={0}
                                                    slidesPerView={1}
                                                    centeredSlides={true}
                                                    breakpoints={{
                                                        768: { 
                                                            slidesPerView: 3,
                                                            spaceBetween: 12,
                                                        }, 
                                                        1200: { 
                                                            slidesPerView: 3,
                                                            spaceBetween: 24,
                                                        }, 
                                                        // 電腦顯示 3 張
                                                    }}
                                                    navigation={{ prevEl: ".Main1BtnL", nextEl: ".Main1BtnR" }}
                                                    loop={true}
                                                    className="mySwiper"
                                                    >
                                                    {
                                                        materiaPageMain2Card?.map((item, index) => {
                                                            return(
                                                                <SwiperSlide key={index}>
                                                                    <div onClick={()=>{setCardHover(item.title)}} 
                                                                        className={`main1SwiperCardSet ${item.title === cardHover?("hover"):(null)}`}>                       
                                                                        <div className="cardImgBox">
                                                                            <picture>
                                                                                <source srcSet={item.img} media="(min-width:992px)" />
                                                                                <img className="cardImg-set" src={item.imgSm} alt="home-section2-1" />
                                                                            </picture>   
                                                                        </div>
                                                                        <div className="cardBtnBox">
                                                                            <button onClick={()=>{handleOpenMaterialModal(item)}} 
                                                                                    className="main1SwiperBtn-set secondary-btn1-set">
                                                                                材料簡介
                                                                                <span className="material-symbols-outlined sec-btn1-img-set">
                                                                                    chevron_right
                                                                                </span>
                                                                            </button>
                                                                        </div>         
                                                                    </div> 
                                                                </SwiperSlide>
                                                        )
                                                    })}
                                                </Swiper>
                                            </div>
                                        </motion.div>
                                                
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </AnimatePresence>
        </>
    )
}
export default MaterialPageMain2;


