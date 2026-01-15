"use client";

import { AnimatePresence, motion } from 'framer-motion';
import './_EstimatePageMain3.scss';
import { useRouter } from 'next/navigation';


function EstimatePageMain3({orderData, setOrderData, triggerSet, fadeUp}){

    //#region
    //#endregion 

    //#region 跳轉網址前置宣告
        const router = useRouter();
    //#endregion

    //#region 加號函式
    const handleIncrement = (id) => {
        if(id === "wallThickness"){
            setOrderData(prev => ({
                ...prev,
                [id]: Math.min(prev[id] + 10, 50), 
                //上限50
            }));
        }else{
            setOrderData(prev => ({
                ...prev,
                [id]: Math.min(prev[id] + 1, 50), 
                //上限50
            }));
        }
    };
    //#endregion

    //#region 減號函式
    const handleDecrement = (id) => {
        if(id === "wallThickness"){
            setOrderData(prev => ({
                ...prev,
                [id]: Math.max(prev[id] - 10, 1), 
                //下限1
            }));
        }else{
            setOrderData(prev => ({
                ...prev,
                [id]: Math.max(prev[id] - 1, 1), 
                //下限1
            }));
        }
    };
    //#endregion

    //#region 預設配置設定
    const handleMaterialDefault = ()=>{
        setOrderData((item)=>(({
            ...item,
            supportMaterial: 10,
            wallThickness: 50,
            supportDensity: 10,
        })))
    }
    //#endregion

    //#region  顯示內容列表
    const main3GroupData = [
        {
            id:"supportMaterial",
            labelTitle:"支撐材",
            unit:"mm",
        },
        {
            id:"wallThickness",
            labelTitle:"壁厚",
            unit:"%",
        },
        {
            id:"supportDensity",
            labelTitle:"支撐材密度",
            unit:"mm",
        },
    ]
    //#endregion

    return(
        <>
        <AnimatePresence>
            <article className="EstimatePageMain3" id="EstimatePageMain3">
                <div className="EstimatePageMain3-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <motion.div className='EstimatePageMain3-content'
                                            variants={triggerSet}
                                            initial="hidden"
                                            whileInView="show"                      
                                            viewport={{ amount: 0, margin: "0% 0px -20% 0px" }}
                                >
                                    <motion.div className="EstimatePageMain3-title"
                                                variants={fadeUp}>
                                        <h2 className="title-set">規格設置</h2>
                                    </motion.div>

                                    <motion.div className="EstimatePageMain3-note-box"
                                                variants={fadeUp}>
                                        <span className="material-symbols-outlined note-icon-set">
                                            error
                                        </span>
                                        <div className="note-text-box">
                                            <p className="text-set">
                                                若無法確定規格，可點擊預設配置<span className='d-none d-lg-inline'>，</span><span className='d-block d-lg-none'></span>系統會自動帶出適合的規格設置。
                                            </p>
                                        </div>
                                    </motion.div>
                                    <motion.form    className='EstimatePageMain3-form-box'
                                                    variants={fadeUp}>
                                        <div className='EstimatePageMain3-form-group-box'>
                                        {
                                            main3GroupData?.map((item,index)=>{
                                                return(
                                                    
                                                    <div key={item.id} className="EstimatePageMain3-group-box">
                                                        <label htmlFor={`EstimatePageMain3-input${index}`} className="label-set">
                                                            {item.labelTitle}
                                                        </label>

                                                        <div className="groupBody-box">
                                                            <input
                                                                className="input-set"
                                                                type="text" 
                                                                id={`EstimatePageMain3-input${index}`} 
                                                                placeholder="1mm" 
                                                                value={`${orderData?.[item.id]}${item.unit}`}
                                                                onChange={(e) => {
                                                                    const value = parseInt(e.target.value.replace(/\D/g, ""), 10) || 0;
                                                                    setOrderData(prev => ({
                                                                        ...prev,
                                                                        [item.id]: Math.min(Math.max(value, 0), 50),
                                                                    }));
                                                                }}
                                                            />
                                                            {/* 上下按鈕 */}
                                                            <div className='groupBtn-box'>
                                                                <button onClick={()=>{handleIncrement(item.id)}}
                                                                        className="addBtn-set" type="button">
                                                                    <picture>
                                                                        <source srcSet={`/images/EstimatePage/main3/EstimatePage-main3-arrowUP.png`}   
                                                                                media="(min-width:1200px)" />
                                                                        <img className="addBtn-img-set" 
                                                                            src={`/images/EstimatePage/main3/EstimatePage-main3-sm-arrowUP.png`} alt="home-section2-1" />
                                                                    </picture>
                                                                </button>
                                                                <button onClick={()=>{handleDecrement(item.id)}} 
                                                                        className="subBtn-set" type="button">
                                                                    <picture>
                                                                        <source srcSet={`/images/EstimatePage/main3/EstimatePage-main3-arrowDOWN.png`}
                                                                                media="(min-width:1200px)" />
                                                                        <img className="subBtn-img-set" 
                                                                            src={`/images/EstimatePage/main3/EstimatePage-main3-sm-arrowDOWN.png`}
                                                                            alt="home-section2-1" />
                                                                    </picture>
                                                                </button>
                                                            </div>
                                                            {/* 上下按鈕 */}
                                                        </div>
                                                    </div>
                                                    
                                                )
                                            })
                                        }
                                        </div>

                                        <div className="EstimatePageMain3-groupCheckBtn-box">
                                            <button onClick={()=>{handleMaterialDefault()}} className="groupCheckBtn-set mian-btn1-set" type="button">
                                                預設配置
                                            </button>
                                        </div>
                                        
                                    </motion.form>
                                    <motion.div className="EstimatePageMain3-next-btn"
                                                variants={fadeUp}>
                                        <button type='button' className='pagination-btn01' 
                                        onClick={()=>{router.push("#EstimatePageMain4");}}>
                                            <img className="pagination-img01-set" 
                                                src={`/images/EstimatePage/main3/EstimatePage-main3-Vector15.png`} 
                                                alt="Vector 15" 
                                            />
                                        </button>
                                        <div className='EstimatePageMain3-next-btn-box'>
                                            <p className='nextBtnTipText-set'><span className='d-none d-sm-inline'>前往下一頁</span>選擇日期</p>
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
export default EstimatePageMain3;



