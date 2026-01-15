

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './_EstimatePageMain4.scss';
import { Dropdown } from 'react-bootstrap';
import Calendar from './Calendar/Calendar';
import { useRouter } from 'next/navigation';




function EstimatePageMain4({ orderData, setOrderData, triggerSet,fadeUp }){

    //#region
    //#endregion 

    //#region 跳轉網址前置宣告
        const router = useRouter();
    //#endregion

    //#region 控制工期選擇Dropdown狀態
        const [workTimeShow, setWorkTimeShow] = useState(false);
        useEffect(()=>{},[workTimeShow]);
    //#endregion 

    //#region 控制日歷Dropdown狀態
        const [calendarShow, setCalendarShow] = useState(false);
        useEffect(()=>{},[calendarShow]);
    //#endregion 

    //#region 工期選擇input顯示資料
        const [workTimeData,setWorkTimeData] = useState("選擇工期");
        useEffect(()=>{},[workTimeData]);
    //#endregion

    //#region 日歷input顯示資料
        const [selectedDate, setSelectedDate] = useState("年 / 月 / 日");
        useEffect(()=>{},[selectedDate]);
    //#endregion

    //#region 預計完成日期的狀態
        const [workFinishDate, setWorkFinishDate] = useState("");
        useEffect(()=>{},[workFinishDate]);
    //#endregion

    //#region 工期選擇Dropdown內容資料
        const options = [
            {
                id:"01",
                item:"急單 3個工作天",
            },
            {
                id:"02",
                item:"一般單 3-6個工作天",
            },
            {
                id:"03",
                item:"不急單 6-10個工作天",
            },
        ];
    //#endregion

    

    // 當工期(workTimeData)或開始日期(selectedDate)變動時，重新計算
    useEffect(() => {
        // 只有在工期已選、開始日期已選時才計算
        if (workTimeData == "選擇工期" && selectedDate !== "年 / 月 / 日"){
            alert("請先選擇工期");
            setSelectedDate("年 / 月 / 日");
        }
    }, [workTimeData, selectedDate]);

    //#region 工期選擇資料寫入訂單函式
        const handleOrderTypeData = (data) => {
            let orderType = "";

            if (data === "急單 3個工作天") {
                orderType = "urgent";
            } else if (data === "一般單 3-6個工作天") {
                orderType = "normal";
            } else if (data === "不急單 6-10個工作天") {
                orderType = "slow";
            }

            setOrderData({
                ...orderData,         // 保留原本的資料
                orderType: orderType, // 新增或覆蓋 orderType
            });
        };
    //#endregion

    //#region 日期資料寫入訂單函式
        const handleWorkTimeData = (time) =>{
            
            //先檢查工期
            if(workTimeData === "選擇工期"){
                return;
            }

            // 抓出所有數字並取最大值
            const addDays = Math.max(...workTimeData.match(/\d+/g)?.map(Number));

            // 取出開始製作日期物件
            const start = new Date(time);

            // 4. 複製一份 start，避免直接修改
            let finish = new Date(start);
            //finish會是start的日期且是一個日期物件

            // 已加上的工作天數
            let endDay = 0; 
            while (endDay < addDays) {
                finish.setDate(finish.getDate() + 1); // 日期往後一天
                //.getDate()是取得當天日期
                //.setDate()是設定新的日期

                const dayOfWeek = finish.getDay();    
                // 0 = 星期日, 6 = 星期六
                //.getDay會取得星期幾
                if (dayOfWeek !== 0 && dayOfWeek !== 6) {
                // 如果不是六日，就算一天
                    endDay++;
                }
            }

            // 5. 格式化日期 (yyyy/mm/dd)
            const finishDate = `${finish.getFullYear()}/${finish.getMonth() + 1}/${finish.getDate()}`;

            // 6. 更新狀態
            setWorkFinishDate(finishDate);
            
            setOrderData(prev => ({
                ...prev,
                productionTime: time,
                productionEndTime: finishDate,
            }));
        }
    //#endregion

    //#region 跳轉下一個子元件函式
        const handleScrollToNextEstimatePage = () => {
            const id = "EstimatePageMain5";

            document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

            window.history.replaceState(null, "", `#${id}`);
        }
    //#endregion

    return(
        <>
        <AnimatePresence>
            <article className="EstimatePageMain4" id="EstimatePageMain4">
                <div className="EstimatePageMain4-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <motion.div className='EstimatePageMain4-content'
                                            variants={triggerSet}
                                            initial="hidden"
                                            whileInView="show"                      
                                            viewport={{ amount: 0, margin: "0% 0px -20% 0px" }}
                                >
                                    <motion.div className="EstimatePageMain4-title"
                                                variants={fadeUp}>
                                        <h2 className="title-set">規格設置</h2>
                                    </motion.div>
                                    <motion.div className="EstimatePageMain4-note-box"
                                                variants={fadeUp}>
                                        <span className="material-symbols-outlined note-icon-set">
                                            error
                                        </span>
                                        <div className="note-text-box">
                                            <p className="text-set">
                                                選擇工期後<span className='d-none d-lg-inline'>，</span><span className='d-block d-lg-none'></span>工作人員會在確認訂單時間是否可訂做。
                                            </p>
                                        </div>
                                    </motion.div>
                                    <motion.div className='w-100 d-flex flex-column flex-xl-row justify-content-between align-items-center gap-xl-72 gap-40'
                                                variants={fadeUp}>

                                        <div className="EstimatePageMain4-group-box">
                                            <label htmlFor="EstimatePageMain4-input" className="label-set">
                                                工期選擇
                                            </label>

                                            <div className="EstimatePageMain4-groupBody-box">
                                                <Dropdown className='dropdown' show={workTimeShow} onToggle={(isOpen) => setWorkTimeShow(isOpen)}>
                                                    <Dropdown.Toggle as="div" onClick={() => {setWorkTimeShow(!workTimeShow)}}> 
                                                        <input
                                                            className="inputBody-set"
                                                            type="text" 
                                                            id="EstimatePageMain4-input" 
                                                            placeholder="工期選擇" 
                                                            value={workTimeData}
                                                            readOnly 
                                                        />
                                                    </Dropdown.Toggle>
                                                    {/* 下按鈕 */}
                                                    <div className='groupBtn-box'>
                                                        <button className="downBtn-set" type="button" id="oEstimate-main3-increment01">
                                                            <picture>
                                                                <source srcSet={`/images/EstimatePage/main4/EstimatePage-main4-Keyboardarrowdown.png`}   
                                                                        media="(min-width:1200px)" />
                                                                <img className="downBtn-img-set" 
                                                                    src={`/images/EstimatePage/main4/EstimatePage-main4-Keyboardarrowdown.png`} alt="home-section2-1" />
                                                            </picture>
                                                        </button>
                                                    </div>
                                                    {/* 下按鈕 */}

                                                    {/* 選項部分 */}
                                                    <Dropdown.Menu className="dropdown-menu">
                                                        <div className="menu-column">
                                                        {
                                                            options.map((main, i) => (
                                                            <button key={main.id} className='menu-btn' onClick={() => {
                                                                setWorkTimeShow(!workTimeShow);setWorkTimeData(main.item);handleOrderTypeData(main.item);
                                                            }}>
                                                                {main.item}
                                                            </button>
                                                            ))
                                                        }
                                                        </div>
                                                    </Dropdown.Menu>
                                                    {/* 選項部分 */}
                                                </Dropdown>
                                            </div>
                                        </div>

                                        <div className="EstimatePageMain4-calendarGroup-box">
                                            <label htmlFor="EstimatePageMain4Calendar-input" className="label-set">
                                                日歷
                                            </label>

                                            <div className="EstimatePageMain4-groupBody-box">
                                                <Dropdown show={calendarShow} onToggle={(isOpen) => setCalendarShow(isOpen)}>
                                                    <Dropdown.Toggle as="div" onClick={() => {setCalendarShow(!calendarShow)}}> 
                                                        <input
                                                            className="inputBody-set"
                                                            type="text" 
                                                            id="EstimatePageMain4Calendar-input" 
                                                            placeholder={selectedDate} 
                                                            value={selectedDate}
                                                            readOnly 
                                                        />
                                                    </Dropdown.Toggle>
                                                    {/* 日歷icon&下按鈕 */}
                                                    
                                                    <div className='groupBtn-box'>
                                                        <div className="calendarIcon-set" type="button">
                                                            <picture>
                                                                <source srcSet={`/images/EstimatePage/main4/EstimatePage-main4-Calendar.png`}   
                                                                        media="(min-width:992px)" />
                                                                <img className="calendarIcon-img-set" 
                                                                    src={`/images/EstimatePage/main4/EstimatePage-main4-Calendar.png`} alt="home-section2-1" />
                                                            </picture>
                                                        </div>
                                                        <button className="downBtn-set" type="button" id="oEstimate-main3-increment01">
                                                            <picture>
                                                                <source srcSet={`/images/EstimatePage/main4/EstimatePage-main4-Keyboardarrowdown.png`}   
                                                                        media="(min-width:1200px)" />
                                                                <img className="downBtn-img-set" 
                                                                    src={`/images/EstimatePage/main4/EstimatePage-main4-Keyboardarrowdown.png`} alt="home-section2-1" />
                                                            </picture>
                                                        </button>
                                                    </div>
                                                    {/* 日歷icon&下按鈕 */}

                                                    {/* 日歷部分 */}
                                                    <Dropdown.Menu className="dropdown-menu">
                                                        <Calendar handleWorkTimeData={handleWorkTimeData} 
                                                                setSelectedDate={setSelectedDate} 
                                                                setCalendarShow={setCalendarShow} 
                                                                calendarShow={calendarShow}/>
                                                    </Dropdown.Menu>
                                                    {/* 日歷部分 */}
                                                </Dropdown>
                                            </div>
                                        </div>

                                    </motion.div>
                                    <motion.div className="EstimatePageMain4-NextBtn-box"
                                                variants={fadeUp}>
                                        <button className="pagination-btn02" 
                                        onClick={()=>{router.push("#EstimatePageMain5");}}>
                                            <img className="pagination-img02-set" 
                                                src={`/images/EstimatePage/main2/EstimatePage-main2-Vector16.png`} 
                                                alt="Vector 16" 
                                            />
                                        </button>
                                        <div className='EstimatePageMain4-next-btn-box'>
                                            <p className='nextBtnTipText-set'><span className='d-none d-sm-inline'>前往下一頁</span>送出訂單</p>
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
export default EstimatePageMain4;





