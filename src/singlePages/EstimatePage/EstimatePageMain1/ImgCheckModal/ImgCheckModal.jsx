"use client";

import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import './_ImgCheckModal.scss';
import { useRouter } from "next/navigation";


function ImgCheckModal ({ onClose }){

    //#region
    //#endregion

    //#region 讀取圖片上傳狀態訊息
    const imgState = useSelector((state)=>{
        return(
            state.order.imgLoadState
        )
    })
    useEffect(()=>{
        if(!imgState){
            //#region 觸發訂單資料送出後資料初始化動作
                setTimeout(() => {  

                    //關閉OrderCheck
                    onClose?.();
                    //關閉OrderCheck
                    
                }, 1000); // 2000 毫秒 = 2 秒
            //#endregion
        }
        console.log("圖片上傳狀態:",imgState)
    },[imgState]);
    //#endregion
    
    

    return(
        <>
            {/* 遮罩 */}
            <div className="modalSet imgCheckModal" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
                {/* 定位至置中效果 */}
                <div className="modal-dialog">

                    {/* model整體元件 */}
                    <div className="modal-content border-0 ">

                        {/* 本體設定 */}
                        <div className="modal-body orderCheckModelBodyBgSet">
                            {
                                imgState?
                                (
                                    <p className="text-set">圖片上傳中請稍後...</p>
                                )
                                :
                                (
                                    <p className="text-set">圖片上傳已完成</p>
                                )
                            }
                            
                        </div>

                    </div>
                </div>
            </div>
            
        </>
    )
}
export default ImgCheckModal;