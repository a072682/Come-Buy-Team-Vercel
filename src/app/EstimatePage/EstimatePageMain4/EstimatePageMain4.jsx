

import { useEffect, useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import Calendar from './Calendar/Calendar';
import EstimateMain4Css from "./_EstimatePageMain4.module.scss";



function EstimatePageMain4(){

    //#region
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

   

    return(
        <>
            <div className={EstimateMain4Css.EstimatePageMain4}>
                <div className={EstimateMain4Css.EstimatePageMain4Bg}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className={EstimateMain4Css.EstimatePageMain4Content}>
                                    <div className={EstimateMain4Css.EstimatePageMain4Title}>
                                        <h3 className={EstimateMain4Css.titleSet}>規格設置</h3>
                                    </div>
                                    <div className={EstimateMain4Css.EstimatePageMain4NoteBox}>
                                        <span className={`${EstimateMain4Css.noteIconSet} material-symbols-outlined`}>
                                            error
                                        </span>
                                        <div className={EstimateMain4Css.noteTextBox}>
                                            <p className={EstimateMain4Css.textSet}>
                                                選擇工期後<span className='d-none d-lg-inline'>，</span><span className='d-block d-lg-none'></span>工作人員會在確認訂單時間是否可訂做。
                                            </p>
                                        </div>
                                    </div>

                                    <div className='w-100 d-flex flex-column flex-xl-row justify-content-between align-items-center gap-xl-72 gap-40'>

                                        <div className={EstimateMain4Css.EstimatePageMain4GroupBox}>
                                            <label htmlFor="EstimatePageMain4-input" className={EstimateMain4Css.labelSet}>
                                                工期選擇
                                            </label>

                                            <div className={EstimateMain4Css.EstimatePageMain4GroupBodyBox}>
                                                <Dropdown className={EstimateMain4Css.dropdown} show={workTimeShow} onToggle={(isOpen) => setWorkTimeShow(isOpen)}>
                                                    <Dropdown.Toggle as="div" onClick={() => {setWorkTimeShow(!workTimeShow)}}> 
                                                        <input
                                                            className={EstimateMain4Css.inputBodySet}
                                                            type="text" 
                                                            id="EstimatePageMain4-input" 
                                                            placeholder="工期選擇" 
                                                            value={workTimeData}
                                                            readOnly 
                                                        />
                                                    </Dropdown.Toggle>
                                                    {/* 下按鈕 */}
                                                    <div className={EstimateMain4Css.groupBtnBox}>
                                                        <button className={EstimateMain4Css.downBtnSet} type="button" id="oEstimate-main3-increment01">
                                                            <picture>
                                                                <source srcSet={`/images/EstimatePage/main4/EstimatePage-main4-Keyboardarrowdown.png`}   
                                                                        media="(min-width:1200px)" />
                                                                <img className={EstimateMain4Css.downBtnImgSet} 
                                                                    src={`/images/EstimatePage/main4/EstimatePage-main4-Keyboardarrowdown.png`} alt="home-section2-1" />
                                                            </picture>
                                                        </button>
                                                    </div>
                                                    {/* 下按鈕 */}

                                                    {/* 選項部分 */}
                                                    <Dropdown.Menu className={EstimateMain4Css.dropdownMenu}>
                                                        <div className={EstimateMain4Css.menuColumn}>
                                                        {
                                                            options.map((main, i) => (
                                                            <button key={main.id} className={EstimateMain4Css.menuBtn} onClick={() => {
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

                                        <div className={EstimateMain4Css.EstimatePageMain4CalendarGroupBox}>
                                            <label htmlFor="EstimatePageMain4Calendar-input" className={EstimateMain4Css.labelSet}>
                                                日歷
                                            </label>

                                            <div className={EstimateMain4Css.EstimatePageMain4GroupBodyBox}>
                                                <Dropdown className={EstimateMain4Css.dropdown} show={calendarShow} onToggle={(isOpen) => setCalendarShow(isOpen)}>
                                                    <Dropdown.Toggle as="div" onClick={() => {setCalendarShow(!calendarShow)}}> 
                                                        <input
                                                            className={EstimateMain4Css.inputBodySet}
                                                            type="text" 
                                                            id="EstimatePageMain4Calendar-input" 
                                                            placeholder={selectedDate} 
                                                            value={selectedDate}
                                                            readOnly 
                                                        />
                                                    </Dropdown.Toggle>
                                                    {/* 日歷icon&下按鈕 */}
                                                    
                                                    <div className={EstimateMain4Css.groupBtnBox}>
                                                        <div className={EstimateMain4Css.calendarIconSet} type="button">
                                                            <picture>
                                                                <source srcSet={`/images/EstimatePage/main4/EstimatePage-main4-Calendar.png`}   
                                                                        media="(min-width:992px)" />
                                                                <img className={EstimateMain4Css.calendarIconImgSet} 
                                                                    src={`/images/EstimatePage/main4/EstimatePage-main4-Calendar.png`} alt="home-section2-1" />
                                                            </picture>
                                                        </div>
                                                        <button className={EstimateMain4Css.downBtnSet} type="button" id="oEstimate-main3-increment01">
                                                            <picture>
                                                                <source srcSet={`/images/EstimatePage/main4/EstimatePage-main4-Keyboardarrowdown.png`}   
                                                                        media="(min-width:1200px)" />
                                                                <img className={EstimateMain4Css.downBtnImgSet} 
                                                                    src={`/images/EstimatePage/main4/EstimatePage-main4-Keyboardarrowdown.png`} alt="home-section2-1" />
                                                            </picture>
                                                        </button>
                                                    </div>
                                                    {/* 日歷icon&下按鈕 */}

                                                    {/* 日歷部分 */}
                                                    <Dropdown.Menu className={EstimateMain4Css.dropdownMenu}>
                                                        <Calendar  
                                                                setSelectedDate={setSelectedDate} 
                                                                setCalendarShow={setCalendarShow} 
                                                                calendarShow={calendarShow}/>
                                                    </Dropdown.Menu>
                                                    {/* 日歷部分 */}
                                                </Dropdown>
                                            </div>
                                        </div>

                                    </div>
                                    

                                    <div className={EstimateMain4Css.EstimatePageMain4NextBtnBox}>
                                        <button className="pagination-btn02">
                                            <img className="pagination-img02-set" 
                                                src={`/images/EstimatePage/main2/EstimatePage-main2-Vector16.png`} 
                                                alt="Vector 16" 
                                            />
                                        </button>
                                        <div className={EstimateMain4Css.EstimatePageMain4NextBtnBox}>
                                            <p className={EstimateMain4Css.nextBtnTipTextSet}><span className='d-none d-sm-inline'>前往下一頁</span>送出訂單</p>
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
export default EstimatePageMain4;





