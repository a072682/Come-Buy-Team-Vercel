"use client";

import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import './_OrderCheckModel.scss';
import { useRouter } from "next/navigation";
import { orderCheckMsgUpLoad, orderCheckStateUpLoad, orderDataClean } from "@/store/slice/orderSlice";


function OrderCheckModel ({ onClose }){

    //#region
    //#endregion

    //#region
    const dispatch = useDispatch();
    //#endregion

    //#region 跳轉網址前置宣告
    const router = useRouter();
    //#endregion

    //#region 讀取檢查訊息
    const checkMsg = useSelector((state)=>{
        return(
            state.order.orderModelCheckMsg
        )
    })
    useEffect(()=>{
        if(checkMsg === "訂單上傳完成，稍後傳送至首頁。"){
            //#region 觸發訂單資料送出後資料初始化動作
                setTimeout(() => {  

                    //清除錯誤訊息
                    dispatch(orderCheckMsgUpLoad(null));
                    //清除錯誤訊息

                    //重置錯誤狀態
                    dispatch(orderCheckStateUpLoad(false));
                    //重置錯誤狀態

                    //重置訂單資訊
                    dispatch(orderDataClean());
                    //重置訂單資訊

                    //關閉OrderCheck
                    onClose?.();
                    //關閉OrderCheck

                    //跳轉至首頁
                    router.push("/");
                    //跳轉至首頁
                    
                }, 2000); // 2000 毫秒 = 2 秒
            //#endregion
        }
        console.log("顯示訊息:",checkMsg)
    },[checkMsg]);
    //#endregion

    //#region 讀取檢查狀態資料
    const checkState = useSelector((state)=>{
        return(
            state.order.checkState
        )
    })
    useEffect(()=>{
        console.log("檢查狀態:",checkState)
    },[checkState]);
    //#endregion
    
    

    return(
        <>
            {/* 遮罩 */}
            <div className="modalSet orderCheckModel" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
                {/* 定位至置中效果 */}
                <div className="modal-dialog">

                    {/* model整體元件 */}
                    <div className="modal-content border-0 ">

                        {/* 本體設定 */}
                        <div className="modal-body orderCheckModelBodyBgSet">
                            {
                                checkState?
                                (
                                     <p className="text-set">{checkMsg}</p>
                                )
                                :
                                (
                                    <>
                                        <p className="text-set">{checkMsg}</p>
                                        <button onClick={()=>{  onClose?.();
                                                                
                                        }} type="button" className="orderCheckModelBtnClose" aria-label="Close">
                                            <img className="materialPageModalBtnCloseImgSet" src={`/images/EstimatePage/EstimatePage-main5-modal-btn-close.png`} alt="Close" />
                                        </button>
                                    </>
                                )
                            }
                            
                        </div>

                    </div>
                </div>
            </div>
            
        </>
    )
}
export default OrderCheckModel;