

import { useEffect, useState } from 'react';
import { open, MODALS } from '@/store/slice/modalSlice';
import { useDispatch, useSelector } from 'react-redux';
// import { upLoad } from '../../../slice/orderSlice';
import EstimateMain5Css from "./_EstimatePageMain5.module.scss";




function EstimatePageMain5(){

    //#region 讀取中央函式前置宣告
        //讀取中央函式前置宣告
        const dispatch = useDispatch();
    //#endregion

    //#region 讀取中央資料
        //讀取中央資料
        // const order = useSelector((state)=>{
        //     return(
        //         state.order.orderData
        //     )
        // })
    //#endregion

    //#region 讀取中央資料
        const handleOrderModelOpen = () =>{
            // dispatch(upLoad(orderData));
            dispatch(open(MODALS.OrderModel));
        }
    //#endregion


    return(
        <>
            <div className={EstimateMain5Css.EstimatePageMain5}>
                <div className={EstimateMain5Css.EstimatePageMain5Bg}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className={EstimateMain5Css.EstimatePageMain5Content}>
                                    <div className={EstimateMain5Css.EstimatePageMain5Title}>
                                        <h3 className={EstimateMain5Css.titleSet}>注意事項！！！<span className='d-block d-lg-none'></span>產品交期說明</h3>
                                    </div>

                                    <div className={EstimateMain5Css.EstimatePageMain5TextBox}> 
                                        <p className={EstimateMain5Css.textSet}>急單：3個工作天出貨，且有失敗風險，請與業務聯繫。</p>
                                        <p className={EstimateMain5Css.textSet}>一般單：3~6個工作天出貨。</p>
                                        <p className={EstimateMain5Css.textSet}>不急單：6~10個工作天出貨、依排程而定。</p>
                                    </div>

                                    <div className={EstimateMain5Css.EstimatePageMain5NoteBox}>
                                        <span className={`${EstimateMain5Css.noteIconSet} .material-symbols-outlined`}>
                                            error
                                        </span>
                                        <div className={EstimateMain5Css.noteTextBox}>
                                            <p className={EstimateMain5Css.textSet}>
                                                此時間為出貨時間，非到貨時間
                                            </p>
                                            <p className={EstimateMain5Css.textSet}>
                                                產品實際交期及價格依訂單回覆內容而定如有特殊狀況將由客服人員與您聯繫
                                            </p>
                                        </div>
                                    </div>

                                    <div className={EstimateMain5Css.EstimatePageMain5CheckBtnBox}>
                                        <button className={`${EstimateMain5Css.EstimatePageMain5CheckBtnSet} btn01Set`} 
                                                type="button" 
                                                onClick={()=>{handleOrderModelOpen();}}
                                        >   
                                            送出估價
                                        </button>
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
export default EstimatePageMain5;





