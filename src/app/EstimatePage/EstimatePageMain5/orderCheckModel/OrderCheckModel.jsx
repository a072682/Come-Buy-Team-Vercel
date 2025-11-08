import { useEffect, useState } from "react"
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from "react-redux";
import OrderCheckCss from "./_OrderCheckModel.module.scss";



function OrderCheckModel ({ onClose }){

    const dispatch = useDispatch();
    const navigate = useRouter();

    //#region
    //#endregion

    //#region 讀取中央資料
        //讀取中央資料
        // const errorMsg = useSelector((state)=>{
        //     return(
        //         state.order.OrderModelErrorMsg
        //     )
        // })
        // useEffect(()=>{
            
        //         //#region 觸發訂單資料送出後資料初始化動作
        //             // setTimeout(() => {  

        //             //     //關閉OrderCheck
        //             //     onClose?.();
        //             //     //關閉OrderCheck

        //             //     //跳轉至首頁
        //             //     navigate.push("/#top");
        //             //     //跳轉至首頁
                        
        //             // }, 2000); // 2000 毫秒 = 2 秒
        //         //#endregion
            
        //     console.log("錯誤訊息:",errorMsg)
        // },[errorMsg]);
    //#endregion
    
    

    return(
        <>
            {/* 遮罩 */}
            <div className={`${OrderCheckCss.modal} ${OrderCheckCss.orderCheckModel}`} style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
                {/* 定位至置中效果 */}
                <div className={OrderCheckCss.modalDialog}>

                    {/* model整體元件 */}
                    <div className={`${OrderCheckCss.modalContent} border-0`}>

                        {/* 本體設定 */}
                        <div className={`${OrderCheckCss.modalBody} ${OrderCheckCss.orderCheckModelBodyBgSet}`}>
                            <p className={OrderCheckCss.textSet}>切版用訊息</p>
                            <button onClick={()=>{  onClose?.();
                                                    
                            }} type="button" className={OrderCheckCss.orderCheckModelBtnClose} aria-label="Close">
                                <img className={OrderCheckCss.materialPageModalBtnCloseImgSet} src={`/images/EstimatePage/EstimatePage-main5-modal-btn-close.png`} alt="Close" />
                            </button>
                            {/* {
                                errorState?
                                (
                                     <p className={OrderCheckCss.textSet}>{errorMsg}</p>
                                )
                                :
                                (
                                    <>
                                        <p className={OrderCheckCss.textSet}>{errorMsg}</p>
                                        <button onClick={()=>{  onClose?.();
                                                                
                                        }} type="button" className={OrderCheckCss.orderCheckModelBtnClose} aria-label="Close">
                                            <img className={OrderCheckCss.materialPageModalBtnCloseImgSet} src={`/images/EstimatePage/EstimatePage-main5-modal-btn-close.png`} alt="Close" />
                                        </button>
                                    </>
                                )
                            } */}
                            
                        </div>

                    </div>
                </div>
            </div>
            
        </>
    )
}
export default OrderCheckModel;