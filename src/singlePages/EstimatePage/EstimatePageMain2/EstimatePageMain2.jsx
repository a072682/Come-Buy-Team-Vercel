"use client";

import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css";// 核心 CSS
import { Nav, Tab } from "react-bootstrap"
import { AnimatePresence, motion } from 'framer-motion';
import './_EstimatePageMain2.scss';
import { useState } from 'react';
import { useRouter } from 'next/navigation';



function EstimatePageMain2({orderData, setOrderData, triggerSet, fadeUp}){

    //#region
    //#endregion

    //#region 跳轉網址前置宣告
        const router = useRouter();
    //#endregion

    //#region 顯示內容資料
        const PLAData = [
                {   
                    id:"PLA01",
                    img: `/images/EstimatePage/main2/EstimatePage-main2-tab2-img1.png`,
                    color: "白",
                    material: "PLA聚乳酸",
                    price: 100,
                },
                {   
                    id:"PLA02",
                    img: `/images/EstimatePage/main2/EstimatePage-main2-tab2-img2.png`,
                    color: "透明",
                    material: "PLA聚乳酸",
                    price: 150,
                },
                {   
                    id:"PLA03",
                    img:`/images/EstimatePage/main2/EstimatePage-main2-tab2-img3.png`,
                    color: "黑",
                    material: "PLA聚乳酸",
                    price: 100,
                },
                {
                    id:"PLA04",
                    img: `/images/EstimatePage/main2/EstimatePage-main2-tab2-img1.png`,
                    color: "白",
                    material: "PLA聚乳酸",
                    price: 100,
                },
                {
                    id:"PLA05",
                    img: `/images/EstimatePage/main2/EstimatePage-main2-tab2-img2.png`,
                    color: "透明",
                    material: "PLA聚乳酸",
                    price: 150,
                },
                {
                    id:"PLA06",
                    img:`/images/EstimatePage/main2/EstimatePage-main2-tab2-img3.png`,
                    color: "黑",
                    material: "PLA聚乳酸",
                    price: 100,
                },
            ];
        
        const SLAData = [
            {
                id:"SLA01",
                img: `/images/EstimatePage/main2/EstimatePage-main2-tab-img1.png`,
                color: "黑",
                material: "光固化樹脂",
                price: 300,
            },
            {   
                id:"SLA02",
                img: `/images/EstimatePage/main2/EstimatePage-main2-tab-img2.png`,
                color: "白",
                material: "光固化樹脂",
                price: 300,
            },
            {
                id:"SLA03",
                img: `/images/EstimatePage/main2/EstimatePage-main2-tab-img3.png`,
                color: "透明",
                material: "光固化樹脂",
                price: 450,
            },
            {
                id:"SLA04",
                img: `/images/EstimatePage/main2/EstimatePage-main2-tab-img1.png`,
                color: "黑",
                material: "光固化樹脂",
                price: 300,
            },
            {   
                id:"SLA05",
                img: `/images/EstimatePage/main2/EstimatePage-main2-tab-img2.png`,
                color: "白",
                material: "光固化樹脂",
                price: 300,
            },
            {
                id:"SLA06",
                img: `/images/EstimatePage/main2/EstimatePage-main2-tab-img3.png`,
                color: "透明",
                material: "光固化樹脂",
                price: 450,
            },
        ];

        const swiperData = [
            {
                key:"3D-Print",
                title:"3D列印",
                swiperData:PLAData,
            },
            {
                key:"Light-Print",
                title:"光固化",
                swiperData:SLAData,
            },
        ]
    //#endregion
    
    //#region tab選單控制狀態
        const [activeTab, setActiveTab] = useState("3D-Print");
    //#endregion

    //#region 訂單資料寫入函式
        const handleMaterialTypeData = (Technique,Material,Color,Price)=>{
            setOrderData((prev)=>({
                ...prev,
                technique: Technique ?? prev.technique,    // 製程
                material: Material ?? prev.material,           //材料
                color: Color ?? prev.color,             //顏色
                price: Price ?? prev.price,             //價格
            }))
        }
    //#endregion

    //#region 材料選擇狀態(被選擇的會觸發active的class)
        const [activeBtn,setActiveBtn] = useState(null);
    //#endregion

    return(
        <>
        <AnimatePresence>
            <Tab.Container className="EstimatePageMain2-tab" activeKey={activeTab} onSelect={(key) => setActiveTab(key)} >
                <article className="EstimatePageMain2" id="EstimatePageMain2">
                    <div className="EstimatePageMain2-bg">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <motion.div className='EstimatePageMain2-content'
                                                variants={triggerSet}
                                                initial="hidden"
                                                whileInView="show"                      
                                                viewport={{ amount: 0, margin: "0% 0px -20% 0px" }}
                                    >
                                        <motion.div className="EstimatePageMain2-title"
                                                    variants={fadeUp}>
                                            <h2 className="title-set">材料選擇</h2>
                                        </motion.div>
                                        <motion.div className='EstimatePageMain2-Nav-box'
                                                    variants={fadeUp}>
                                            <div className="EstimatePageMain2-NavTabs-box">
                                                {/* 這是 TABS 的最外層，負責管理不同分頁的內容 */}
                                                <Nav >
                                                    {
                                                        swiperData?.map((item)=>{
                                                            return(
                                                                
                                                                <Nav.Item key={item.key}>
                                                                    <Nav.Link className="EstimatePageMain2-tab-btn" eventKey={item.key} 
                                                                            onClick={()=>{handleMaterialTypeData(item.title, null, null)}}
                                                                    >
                                                                        {item.title}
                                                                    </Nav.Link>
                                                                </Nav.Item>
                                                                
                                                            )
                                                        })
                                                    }
                                                </Nav>
                                                    
                                                {/* 頁籤的內容區塊 */}
                                            </div>
                                            <div className="EstimatePageMain2-NavContent-box">
                                                {/* 🔹 內容區塊（一次只顯示一個頁面） */}
                                                <Tab.Content className="">
                                                    {
                                                        swiperData?.map((item)=>{

                                                            const prevCls = `oEstimate-main2-swiper-prev-${item.key}`;
                                                            const nextCls = `oEstimate-main2-swiper-next-${item.key}`;

                                                            return(
                                                                    
                                                                <Tab.Pane key={item.key} eventKey={item.key}>

                                                                    {/* swiper左右按鈕 */}
                                                                    <div className='EstimatePageMain2-Btn-box'>
                                                                        <button className={nextCls}>
                                                                            <picture>
                                                                                <source srcSet={`/images/EstimatePage/main2/EstimatePage-main2-tab-arrowR.png`} 
                                                                                        media="(min-width:992px)" />
                                                                                <img className="prev-img-set" src={`/images/EstimatePage/main2/EstimatePage-main2-tab-sm-arrowR.png`} 
                                                                                        alt="215x144" 
                                                                                />
                                                                            </picture>
                                                                        </button>
                                                                        <button className={prevCls}>
                                                                                <picture>
                                                                                    <source srcSet={`/images/EstimatePage/main2/EstimatePage-main2-tab-arrowL.png`} 
                                                                                            media="(min-width:992px)" />
                                                                                    <img className="next-img-set" src={`/images/EstimatePage/main2/EstimatePage-main2-tab-sm-arrowL.png`} 
                                                                                            alt="215x144" />
                                                                                </picture>
                                                                        </button>
                                                                    </div>
                                                                    {/* swiper左右按鈕 */}

                                                                    <div className="EstimatePageMain2-swiper-box">
                                                                        <Swiper
                                                                            
                                                                            modules={[Navigation, Pagination, Autoplay]}
                                                                            spaceBetween={6}
                                                                            slidesPerView={1}
                                                                            breakpoints={{
                                                                                768: { slidesPerView: 2 },
                                                                                992: { slidesPerView: 3 },
                                                                                }}
                                                                            navigation={{   prevEl: `.${prevCls}`, 
                                                                                            nextEl: `.${nextCls}` }}
                                                                            loop={true}
                                                                            centeredSlides={false}
                                                                            observer={true}          // ← 在隱藏/顯示時重新偵測
                                                                            observeParents={true}    // ← Pane 切換時更新
                                                                            className="mySwiper"
                                                                            >
                                                                            {
                                                                                item.swiperData?.map((itemIn)=>{
                                                                                    return(
                                                                                        
                                                                                        <SwiperSlide key={itemIn.id}>
                                                                                            <div className={`EstimatePageMain2-swiperItem-set 
                                                                                                            ${activeBtn === itemIn.id?("active"):(null)}`}>

                                                                                                <div className="swiperItem-img-box">
                                                                                                    <img className="swiperItem-img-set" src={itemIn.img} alt="oEstimate-main2-tab2-img2" />     
                                                                                                </div>

                                                                                                <div className="swiperItem-body-box">
                                                                                        
                                                                                                    <div className="body-text-box">
                                                                                                        
                                                                                                        <p className="text-set">{itemIn.material}</p>
                                                                                                        <p className="text-set">{itemIn.color}</p>
                                                                                                        
                                                                                                    </div>

                                                                                                    <div className="body-btn-box secondary-btn1-box">
                                                                                                        <button 
                                                                                                            className="body-btn-set secondary-btn1-set" 
                                                                                                            onClick={()=>{handleMaterialTypeData(null,itemIn.material,itemIn.color,itemIn.price);setActiveBtn(itemIn.id);}}
                                                                                                        >
                                                                                                            選擇我
                                                                                                            <span className="material-symbols-outlined">
                                                                                                                chevron_right
                                                                                                            </span>
                                                                                                        </button>
                                                                                                    </div>

                                                                                                </div>   
                                                                                            </div>
                                                                                        </SwiperSlide>
                                                                                    )
                                                                                })
                                                                            }
                                                                        </Swiper> 
                                                                    </div>
                                                                </Tab.Pane>
                                                                
                                                            )
                                                        })   
                                                    }
                                                </Tab.Content>
                                            </div>
                                        </motion.div>
                                        
                                        <motion.div className="EstimatePageMain2-NextBtn-box"
                                                    variants={fadeUp}>
                                            <button className="pagination-btn02" 
                                            onClick={()=>{router.push("#EstimatePageMain3");}}>
                                                <img className="pagination-img02-set" 
                                                    src={`/images/EstimatePage/main2/EstimatePage-main2-Vector16.png`} 
                                                    alt="Vector 16" 
                                                />
                                            </button>
                                            <div className='EstimatePageMain2-next-btn-box'>
                                                <p className='nextBtnTipText-set'><span className='d-none d-sm-inline'>前往下一頁</span>選擇規格</p>
                                            </div>
                                        </motion.div>   
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </Tab.Container>
        </AnimatePresence>
        </>
    )
}
export default EstimatePageMain2;

