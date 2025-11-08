import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useState } from 'react';
import MaterialMain3Css from "./_MaterialPageMain3.module.scss";
import { useDispatch } from 'react-redux';
import { MODALS, open } from "@/store/slice/modalSlice";



function MaterialPageMain3(){

    const[cardHover,setCardHover]=useState(null);

    //#region 讀取中央函式前置宣告
        //讀取中央函式前置宣告
        const dispatch = useDispatch();
    //#endregion

    const materiaPageMain3Card = [
    {
        img:`/images/MateriaPage/MaterialPageMain3SwiperImg01.png`,
        imgSm:`/images/MateriaPage/MaterialPageMain3SwiperSmImg01.png`,
        title: "FDM",
        MaterialIntroduction: "使用熱塑性 塑膠，如PLA、ABS、PETG等，透過擠出機加熱並層層堆積成型。",
        content01:"PLA為生物可分解材料，ABS可回收再利用，但燃燒時會產生有害氣體。",
        content02:"材料選擇影響強度與耐熱性，ABS需加熱平台，列印時可能產生氣味。",
        content03:"適合製作堅固耐用的零件，支撐結構易拆卸，精度適中，適合低成本製造。",
        content04:"適用於原型設計、教育模型、機械零件、家用製品及個人DIY製作。",
    },
    {
        img:`/images/MateriaPage/MaterialPageMain3SwiperImg02.png`,
        imgSm:`/images/MateriaPage/MaterialPageMain3SwiperSmImg02.png`,
        title: "SLA/DLP",
        MaterialIntroduction: "使用液態樹脂，透過UV光照射局部固化，逐層累積成型，表面光滑。",
        content01:"部分光敏樹脂可生物降解，但多數含化學成分，處理需符合環保規範。",
        content02:"樹脂具有刺激性，需佩戴防護裝備，列印後殘留物應妥善處理。",
        content03:"精度高，適合製作細緻模型，後處理需清洗與二次固化，易碎且脆。",
        content04:"廣泛用於牙科、珠寶設計、動畫模型、醫療器械及高精度零件製造。",
    },
    {
        img:`/images/MateriaPage/MaterialPageMain3SwiperImg03.png`,
        imgSm:`/images/MateriaPage/MaterialPageMain3SwiperSmImg03.png`,
        title: "SLM",
        MaterialIntroduction: "使用金屬粉末，如鋁、鈦、不鏽鋼等，透過高能雷射熔融並逐層成型。",
        content01:"可回收未使用金屬粉末，但粉塵與能耗較高，需良好防護與處理設備。",
        content02:"操作環境需控溫控濕，金屬粉塵易燃，需防爆與良好通風設備。",
        content03:"可製作高強度、耐高溫零件，無需支撐結構，適合精密與功能性部件。",
        content04:"廣泛應用於航空航太、醫療植入物、汽車工業及高端機械製造。",
    },
    {
        img:`/images/MateriaPage/MaterialPageMain3SwiperImg01.png`,
        imgSm:`/images/MateriaPage/MaterialPageMain3SwiperSmImg01.png`,
        title: "FDM",
        MaterialIntroduction: "使用熱塑性 塑膠，如PLA、ABS、PETG等，透過擠出機加熱並層層堆積成型。",
        content01:"PLA為生物可分解材料，ABS可回收再利用，但燃燒時會產生有害氣體。",
        content02:"材料選擇影響強度與耐熱性，ABS需加熱平台，列印時可能產生氣味。",
        content03:"適合製作堅固耐用的零件，支撐結構易拆卸，精度適中，適合低成本製造。",
        content04:"適用於原型設計、教育模型、機械零件、家用製品及個人DIY製作。",
    },
    {
        img:`/images/MateriaPage/MaterialPageMain3SwiperImg02.png`,
        imgSm:`/images/MateriaPage/MaterialPageMain3SwiperSmImg02.png`,
        title: "SLA/DLP",
        MaterialIntroduction: "使用液態樹脂，透過UV光照射局部固化，逐層累積成型，表面光滑。",
        content01:"部分光敏樹脂可生物降解，但多數含化學成分，處理需符合環保規範。",
        content02:"樹脂具有刺激性，需佩戴防護裝備，列印後殘留物應妥善處理。",
        content03:"精度高，適合製作細緻模型，後處理需清洗與二次固化，易碎且脆。",
        content04:"廣泛用於牙科、珠寶設計、動畫模型、醫療器械及高精度零件製造。",
    },
    {
        img:`/images/MateriaPage/MaterialPageMain3SwiperImg03.png`,
        imgSm:`/images/MateriaPage/MaterialPageMain3SwiperSmImg03.png`,
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
            <div className={MaterialMain3Css.MaterialPageMain3}>
                <div className={MaterialMain3Css.MaterialPageMain3Bg}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-10 mx-auto">
                                <div className={MaterialMain3Css.MaterialPageMain3Content}>
                                    
                                    <div className={MaterialMain3Css.MaterialPageMain3Title}>
                                        <h3 className={MaterialMain3Css.titleSet}>SLM(金屬)</h3>
                                    </div>
                                
                                    <div className={MaterialMain3Css.swiperBox}>
                                        {/* 按鈕區塊 */}
                                        <div className={MaterialMain3Css.Main3SwiperBtnSet}>
                                            <button className={`${MaterialMain3Css.Main3BtnLSet} Main3BtnL`}>
                                                <div className={MaterialMain3Css.imgBox}>
                                                    <img className={MaterialMain3Css.imgSet} 
                                                        src={`/images/MateriaPage/main1/MateriaPage-main1-arrowL.png`} 
                                                        alt="MateriaPage-main1-arrowL" />
                                                </div>
                                            </button>
                                            <button className={`${MaterialMain3Css.Main3BtnRSet} Main3BtnR`}>
                                                <div className={MaterialMain3Css.imgBox}>
                                                    <img className={MaterialMain3Css.imgSet} 
                                                        src={`/images/MateriaPage/main1/MateriaPage-main1-arrowR.png`} 
                                                        alt="MateriaPage-main1-arrowR" />
                                                </div>
                                            </button>
                                        </div>

                                        {/* 頁籤的內容區塊 */}
                                        <div className={MaterialMain3Css.main3SwiperContent}>
                                            <Swiper
                                                modules={[Navigation, Autoplay]}
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
                                                navigation={{ prevEl: ".Main3BtnL", nextEl: ".Main3BtnR" }}
                                                loop={true}
                                                className="mySwiper"
                                                >
                                                {
                                                    materiaPageMain3Card?.map((item, index) => {
                                                        return(
                                                            <SwiperSlide key={index}>
                                                                <div onClick={()=>{setCardHover(item.title)}} 
                                                                    className={`${MaterialMain3Css.main3SwiperCardSet} ${item.title === cardHover?(MaterialMain3Css.hover):(null)}`}>                       
                                                                    <div className={MaterialMain3Css.cardImgBox}>
                                                                        <picture>
                                                                            <source srcSet={item.img} media="(min-width:992px)" />
                                                                            <img className={MaterialMain3Css.cardImgSet} src={item.imgSm} alt="home-section2-1" />
                                                                        </picture>   
                                                                    </div>
                                                                    <div className={MaterialMain3Css.cardBtnBox}>
                                                                        <button onClick={()=>{dispatch(open(MODALS.MaterialPageModal))}} 
                                                                                className={`${MaterialMain3Css.main3SwiperBtnSet} btn02Set`}>
                                                                            材料簡介
                                                                            <span className="material-symbols-outlined">
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
                                    </div>
                                            
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MaterialPageMain3;

