import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Nav, Tab } from "react-bootstrap"
import { useEffect, useState } from 'react';
import EstimateMain2Css from "./_EstimatePageMain2.module.scss";


function EstimatePageMain2(){

    //#region
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
                key:"3DPrint",
                title:"3D列印",
                swiperData:PLAData,
            },
            {
                key:"LightPrint",
                title:"光固化",
                swiperData:SLAData,
            },
        ]
    //#endregion

    
    //#region tab選單控制狀態
        const [activeTab, setActiveTab] = useState("3DPrint");
    //#endregion

    return(
        <>
            <Tab.Container className="EstimatePageMain2Tab" activeKey={activeTab} onSelect={(key) => setActiveTab(key)} >
                <div className={EstimateMain2Css.EstimatePageMain2}>
                    <div className={EstimateMain2Css.EstimatePageMain2Bg}>
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className={EstimateMain2Css.EstimatePageMain2Content}>
                                        <div className={EstimateMain2Css.EstimatePageMain2Title}>
                                            <h3 className={EstimateMain2Css.titleSet}>材料選擇</h3>
                                        </div>
                                        <div className={EstimateMain2Css.EstimatePageMain2NavBox}>
                                            <div className={EstimateMain2Css.EstimatePageMain2NavTabsBox}>
                                                {/* 這是 TABS 的最外層，負責管理不同分頁的內容 */}
                                                <Nav >
                                                    {
                                                        swiperData?.map((item)=>{
                                                            return(
                                                                
                                                                <Nav.Item key={item.key}>
                                                                    <Nav.Link className={EstimateMain2Css.EstimatePageMain2TabBtn} eventKey={item.key}>
                                                                        {item.title}
                                                                    </Nav.Link>
                                                                </Nav.Item>
                                                                
                                                            )
                                                        })
                                                    }
                                                </Nav>
                                                    
                                                {/* 頁籤的內容區塊 */}
                                            </div>
                                            <div className={EstimateMain2Css.EstimatePageMain2NavContentBox}>
                                                {/* 🔹 內容區塊（一次只顯示一個頁面） */}
                                                <Tab.Content className="">
                                                    {
                                                        swiperData?.map((item)=>{

                                                            // 產生唯一 class（純字串，用來讓 Swiper 找到按鈕）
                                                            const prevCls = `oEstimate-prev-${item.key}`;
                                                            const nextCls = `oEstimate-next-${item.key}`;

                                                            return(
                                                                    
                                                                <Tab.Pane key={item.key} eventKey={item.key}>

                                                                    {/* swiper左右按鈕 */}
                                                                    <div className={EstimateMain2Css.EstimatePageMain2BtnBox}>
                                                                        <button className={`${EstimateMain2Css.oEstimateMain2SwiperPrev} ${prevCls}`}>
                                                                            <picture>
                                                                                <source srcSet={`/images/EstimatePage/main2/EstimatePage-main2-tab-arrowL.png`} 
                                                                                        media="(min-width:992px)" />
                                                                                <img    className={EstimateMain2Css.prevImgSet} 
                                                                                        src={`/images/EstimatePage/main2/EstimatePage-main2-tab-sm-arrowL.png`} 
                                                                                        alt="215x144" 
                                                                                />
                                                                            </picture>
                                                                        </button>
                                                                        <button className={`${EstimateMain2Css.oEstimateMain2SwiperNext} ${nextCls}`}>
                                                                                <picture>
                                                                                    <source srcSet={`/images/EstimatePage/main2/EstimatePage-main2-tab-arrowR.png`} 
                                                                                            media="(min-width:992px)" />
                                                                                    <img    className={EstimateMain2Css.nextImgSet} 
                                                                                            src={`/images/EstimatePage/main2/EstimatePage-main2-tab-sm-arrowR.png`} 
                                                                                            alt="215x144" />
                                                                                </picture>
                                                                        </button>
                                                                    </div>
                                                                    {/* swiper左右按鈕 */}

                                                                    <div className={EstimateMain2Css.EstimatePageMain2SwiperBox}>
                                                                        <Swiper
                                                                            
                                                                            modules={[Navigation, Autoplay]}
                                                                            spaceBetween={6}
                                                                            slidesPerView={1}
                                                                            breakpoints={{
                                                                                768: { slidesPerView: 2 },
                                                                                992: { slidesPerView: 3 },
                                                                                }}
                                                                            navigation={{ prevEl: `.${prevCls}`, nextEl: `.${nextCls}` }}
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
                                                                                            <div className={`${EstimateMain2Css.EstimatePageMain2SwiperItemSet}`}>

                                                                                                <div className={EstimateMain2Css.swiperItemImgBox}>
                                                                                                    <img className={EstimateMain2Css.swiperItemImgSet} src={itemIn.img} alt="oEstimate-main2-tab2-img2" />     
                                                                                                </div>

                                                                                                <div className={EstimateMain2Css.swiperItemBodyBox}>
                                                                                        
                                                                                                    <div className={EstimateMain2Css.bodyTextBox}>
                                                                                                        
                                                                                                        <p className={EstimateMain2Css.textSet}>{itemIn.material}</p>
                                                                                                        <p className={EstimateMain2Css.textSet}>{itemIn.color}</p>
                                                                                                        
                                                                                                    </div>

                                                                                                    <div className={EstimateMain2Css.bodyBtnBox}>
                                                                                                        <button 
                                                                                                            className={`${EstimateMain2Css.bodyBtnSet} btn02Set`} 
                                                                                                            // onClick={()=>{handleMaterialTypeData(null,itemIn.material,itemIn.color,itemIn.price);setActiveBtn(itemIn.id);}}
                                                                                                        >
                                                                                                            選擇我
                                                                                                            <span className="material-symbols-outlined btn02IconSet">
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
                                        </div>
                                        
                                        <div className={EstimateMain2Css.EstimatePageMain2NextBtnBox}>
                                            <button className="pagination-btn02">
                                                <img className="pagination-img02-set" 
                                                    src={`/images/EstimatePage/main2/EstimatePage-main2-Vector16.png`} 
                                                    alt="Vector 16" 
                                                />
                                            </button>
                                            <div className={EstimateMain2Css.EstimatePageMain2NextBtnBox}>
                                                <p className={EstimateMain2Css.nextBtnTipTextSet}><span className='d-none d-sm-inline'>前往下一頁</span>選擇規格</p>
                                            </div>
                                        </div>   
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Tab.Container>
        </>
    )
}
export default EstimatePageMain2;

