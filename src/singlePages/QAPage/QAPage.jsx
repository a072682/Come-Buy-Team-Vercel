"use client";


import './_QAPage.scss';
import { Tab, Nav } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'
import 'swiper/css';
import { useEffect, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import QAMain1 from './QAMain1/QAMain1';
import QAMain2 from './QAMain2/QAMain2';
import QAMain3 from './QAMain3/QAMain3';
import QAMain4 from './QAMain4/QAMain4';





function QAPage(){

    //#region
    //#endregion

    //#region 取得網址
    const searchParams = useSearchParams();
    const tab = searchParams.get("tab");
    //#endregion

    //#region 新手指南頁面tab控制
    const [activeTab, setActiveTab] = useState('客製化流程');
    //#endregion

    useEffect(() => {
        if (tab) {
            setActiveTab(tab);
        }
    }, [tab]);

    //#region 修改網址前置宣告
    const router = useRouter();
    //#endregion

    //#region 取得網址前置宣告
    const pathname = usePathname();
    //#endregion

    //#region 網址設定
    useEffect(() => {
        router.replace(`${pathname}?tab=${encodeURIComponent(activeTab)}`,{ scroll: false });
    }, [activeTab]);
    //#endregion

    //#region 動畫設定
    const triggerSet = {
        hidden: { opacity: 0 },                 // 父層只當觸發器，不做淡入
        show: {
            opacity: 1,
            transition: {
            duration: 0,                        // 0：不要讓父層自己動畫造成等待
            //觸發動畫到第一個動畫的延遲時間
            delayChildren: 0.08,
            //第二個動畫到第三以及後續的延遲時間
            staggerChildren: 0.1,
            // 想骨牌再開：delayChildren: 0.08, staggerChildren: 0.06,
            },
        },
    };
    const fadeUp = { 
        hidden:{opacity:0,y: 40}, 
        show:{opacity:1,y:0, 
        transition:{duration:0.6, ease:"easeOut"}} 
    };
    //#endregion

    //#region 新手指南頁面tab顯示內容
    const tabdata = [
        {
            id:"QaPageTab_01",
            title:"客製化流程",
            key:"客製化流程",
            pageData: <QAMain1  triggerSet={triggerSet}
                                fadeUp={fadeUp}/>,
            disabled: false,
        },
        {
            id:"QaPageTab_02",
            title:"設計需求介紹",
            key:"設計需求介紹",
            pageData: <QAMain2  triggerSet={triggerSet}
                                fadeUp={fadeUp}/>,
            disabled: false,
        },
        {
            id:"QaPageTab_03",
            title:"運費說明",
            key:"運費說明",
            pageData:<QAMain3   triggerSet={triggerSet}
                                fadeUp={fadeUp}/>,
            disabled: false,
        },
        {
            id:"QaPageTab_04",
            title:"常見問題",
            key:"常見問題",
            pageData:<QAMain4   triggerSet={triggerSet}
                                fadeUp={fadeUp}/>,
            disabled: false,
        },
    ]
    //#endregion

    return(
        <>
            <Tab.Container activeKey={activeTab} onSelect={(key) => setActiveTab(key)}>
                <section className="QAPage">
                    <div className="QAPage-bg">
                        <div className="QAPage-title">
                            <h1 className="title-set">新手指南/QA</h1>
                        </div>
                        <div className='QAPage-content'>
                            {/* Tab-手機板 選單區 */}
                            <div className='tab-mb-box'>
                                <div className='tab-mb-btn-box'>
                                    <span className="material-symbols-outlined tab-mb-btnR">
                                        keyboard_arrow_right
                                    </span>
                                    <span className="material-symbols-outlined tab-mb-btnL">
                                        keyboard_arrow_left
                                    </span>
                                </div>
                                <Nav className='tab-mb-nav'>
                                    <Swiper
                                        className='w-100'
                                        modules={[ Navigation, ]}
                                        slidesPerView={3}
                                        navigation={{ prevEl: ".tab-mb-btnL", nextEl: ".tab-mb-btnR" }}
                                        loop={true}
                                        spaceBetween={0}
                                        breakpoints={{
                                            576: { 
                                                slidesPerView:4,
                                                loop:false,
                                            },
                                        }}
                                        >
                                        {
                                            tabdata?.map((item)=>{
                                                return(
                                                    
                                                    <SwiperSlide key={item.id}>
                                                        <Nav.Item  className='tab-mb-item'>
                                                            <Nav.Link className={`tab-mb-link ${item.disabled ? 'is-disabled' : ''}`} 
                                                                        aria-disabled={item.disabled} 
                                                                        eventKey={item.key}>
                                                                {item.title}
                                                            </Nav.Link>
                                                        </Nav.Item>
                                                    </SwiperSlide>
                                                    
                                                )
                                                
                                            })
                                        }
                                        </Swiper>
                                </Nav>
                            </div>
                            {/* Tab-手機板 選單區 */}
                            <div className='container'>
                                <div className='row'>
                                    <div className='col-12'>
                                        {/* 整體頁面 */}
                                        <div className="QAPage-BodyContents">
                                            {/* Tab 選單區 */}
                                            <div className='tab-box'>
                                                <Nav className='tab-nav'>
                                                    {
                                                        tabdata?.map((item)=>{
                                                            return(
                                                                
                                                                <Nav.Item key={item.id} className='tab-item'>
                                                                    <Nav.Link className={`tab-link ${item.disabled ? 'is-disabled' : ''}`} aria-disabled={item.disabled} eventKey={item.key}>
                                                                        {item.title}
                                                                    </Nav.Link>
                                                                </Nav.Item>
                                                                
                                                            )
                                                        })
                                                    }
                                                </Nav>
                                            </div>
                                            {/* Tab 選單區 */}
                                            
                                            {/* Tab 內容區 */}
                                            <Tab.Content className='content-box'>
                                                {
                                                    tabdata?.map((item)=>{
                                                        return(
                                                            
                                                            <Tab.Pane key={item.id} eventKey={item.key}>
                                                                {item.pageData}
                                                            </Tab.Pane>
                                                            
                                                        )
                                                    })
                                                }
                                            </Tab.Content>
                                            {/* Tab 內容區 */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Tab.Container>
        </>
    )
}
export default QAPage;

