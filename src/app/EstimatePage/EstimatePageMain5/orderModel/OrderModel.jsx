import { useEffect, useState } from "react"
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector, useStore } from "react-redux";
import OrderModelCss from "./_OrderModel.module.scss";
import { open, MODALS } from "@/store/slice/modalSlice";




function OrderModel ({onClose}){

    //#region 取得實例
        const store = useStore();
    //#endregion

    //#region 讀取中央函式前置宣告
        //讀取中央函式前置宣告
        const dispatch = useDispatch();
    //#endregion

    const navigate = useRouter();

    //#region 讀取中央資料
        //讀取中央資料
        // const order = useSelector((state)=>{
        //     return(
        //         state.order.orderData
        //     )
        // })
        // useEffect(()=>{},[order]);
    //#endregion

    //#region
    //#endregion
    
    //#region顯示訂單用資料
        const orderTypeMap = {
            slow: '不急單',
            normal: '一般單',
            urgent: '急單',
        };
        const orderItemData = [
            {
                id:"orderItemData01",
                title:"樣品圖縮圖",
                content:"order.imgFileUrl",
            },
            {
                id:"orderItemData02",
                title:"價格估算",
                content:"order.num * order.price",
            },
            {
                id:"orderItemData03",
                title:"製程",
                content:"order.technique",
            },
            {
                id:"orderItemData04",
                title:"材料",
                content:"order.material",
            },
            {
                id:"orderItemData05",
                title:"顏色",
                content:"order.color",
            },
            {
                id:"orderItemData06",
                title:"數量",
                content:"order.num",
            },
            {
                id:"orderItemData07",
                title:"支撐材",
                content:"order.supportMaterial",
            },
            {
                id:"orderItemData08",
                title:"支撐材密度",
                content:"order.supportDensity",
            },
            {
                id:"orderItemData09",
                title:"壁厚",
                content:"order.wallThickness",
            },
            {
                id:"orderItemData10",
                title:"工期類型",
                content: "orderTypeMap[order.orderType]",
            },
            {
                id:"orderItemData11",
                title:"預計訂單製作時間",
                content:"order.productionTime",
            },
            {
                id:"orderItemData12",
                title:"預計訂單完成時間",
                content:"order.productionEndTime",
            },
        ]
    //#endregion
        
    //#region 確認內容函式
        // const checkOrderData = async() => {
        //     try{
        //         if (order.imgFileUrl === "") {
        //             dispatch(orderModelErrorMsgUpLoad("檔案縮圖尚未上傳"));
        //             dispatch(orderModelErrorStateUpLoad(false));
        //             throw new Error("檔案縮圖尚未上傳");
        //         }else if (order.material === "" || order.color === "") {
        //             dispatch(orderModelErrorMsgUpLoad("列印材料尚未選擇"));
        //             dispatch(orderModelErrorStateUpLoad(false));
        //             throw new Error("列印材料尚未選擇");
        //         }else if (order.orderType === "") {
        //             dispatch(orderModelErrorMsgUpLoad("工期尚未選擇"));
        //             dispatch(orderModelErrorStateUpLoad(false));
        //             throw new Error("工期尚未選擇");
        //         }else if (order.productionTime === "" || order.productionEndTime === "") {
        //             dispatch(orderModelErrorMsgUpLoad("訂單製作時間尚未設定"));
        //             dispatch(orderModelErrorStateUpLoad(false));
        //             throw new Error("訂單製作時間尚未設定");
        //         }else{
        //             dispatch(orderModelErrorMsgUpLoad("訂單檢查中，請稍後。"));
        //             dispatch(orderModelErrorStateUpLoad(true));
        //         }
        //     }catch(error){
        //         console.log("訂單檢查失敗",error);
        //         dispatch(orderModelErrorMsgUpLoad(error.message));
        //         dispatch(orderModelErrorStateUpLoad(false));
        //         throw error;
        //     }
        // };
    //#endregion

    //#region 訂單上傳函式
        // const orderUpload = async(finalOrder)=>{
        //     try{
        //         const orderUploadRef = await dispatch(orderDataUpLoad( {order:finalOrder})).unwrap();
        //         console.log("訂單上傳成功",orderUploadRef);
        //     }catch(error){
        //         console.log("訂單上傳失敗",error);
        //         throw error; 
        //         //將錯誤拋回上一層
        //     }
        // }
    //#endregion

    // const waitForImageUpload = () => {
    //     return new Promise((resolve) => {
    //         //store.subscribe() 是 Redux 的監聽器
    //         // 每當 state 改變，這個函式就會被執行一次

    //         //對狀態進行監聽
    //         const unsubscribe = store.subscribe(() => {
    //             //store代表store.js的所有內容
    //             //固定寫法
    //         //對狀態進行監聽

    //             //取得某個狀態
    //             const state = store.getState();
    //                 //store代表store.js的所有內容
    //                 //.getState代表取得某個狀態
    //             //取得某個狀態

    //             // 如果發現上傳完成（imgUploadDone = true）
    //             if (state.order.imgUploadDone) {
    //                 // console.log("取得回應");
    //                 unsubscribe(); // ✅ 解除監聽（避免重複觸發）
    //                 resolve(state.order.orderData); // ✅ 結束等待，並回傳最新的 orderData
    //             }
    //         });
    //     });
    // };


    
    const handleOrderCheckModelOpen = async()=>{
        try{

            //開啟OrderCheckModel
            dispatch(open(MODALS.OrderCheckModel));
            //開啟OrderCheckModel
            
            // //檢查
            // await checkOrderData();
            // //檢查

            // // 先把完成旗標清掉，避免沿用上次的 true
            //     dispatch(imgUploadDoneOff());
            //     console.log("旗標已清除");
            // // 先把完成旗標清掉，避免沿用上次的 true

            // // 觸發Trigger
            //     dispatch(imgTriggerOn());
            //     console.log("觸發Trigger");
            // // 觸發Trigger

            // //等待圖片上傳
            //     const finalOrder = await waitForImageUpload();
            // //等待圖片上傳

            // console.log("最終訂單資料:",finalOrder);

            // //上傳
            //     await dispatch(orderDataUpLoad({ order: finalOrder })).unwrap();
            // //上傳

            // dispatch(orderModelErrorMsgUpLoad("訂單上傳完成，稍後傳送至首頁。"));

        }catch(error){
            console.log("訂單送出失敗",error.message);
            // dispatch(orderModelErrorMsgUpLoad(error.message));
        }
    }

    

    


    return(
        <>
            {/* 遮罩 */}
            <div className={`${OrderModelCss.modal} ${OrderModelCss.orderModel}`} style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
                {/* 定位至置中效果 */}
                <div className={OrderModelCss.modalDialog}>
                    {/* model整體元件 */}
                    <div className={`${OrderModelCss.modalContent} border-0`}>
                        
                        {/* header設定 */}
                        <div className={`${OrderModelCss.modalHeader} ${OrderModelCss.orderModalHeaderBgSet}`}>
                            <h3 className={OrderModelCss.titleSet}>估價訂單明細</h3>
                            <button onClick={()=>{onClose?.()}} type="button" className={OrderModelCss.orderModalBtnClose} aria-label="Close">
                                <img className={OrderModelCss.materialPageModalBtnCloseImgSet} src={`/images/EstimatePage/EstimatePage-main5-modal-btn-close.png`} alt="Close" />
                            </button>
                        </div>

                        {/* model本體背景 */}
                        <div className={OrderModelCss.orderModalBodySet}>
                            <div className={OrderModelCss.bodyContentBox}>
                                {
                                    orderItemData?.map((item)=>{
                                        return(
                                            item.title === "樣品圖縮圖"?
                                            (
                                                
                                                <div key={item.id} className={OrderModelCss.itemSet}>
                                                    <div className={OrderModelCss.titleBox}>
                                                        <h4 className={OrderModelCss.titleSet}>樣品圖縮圖</h4>
                                                    </div>
                                                    <div className={OrderModelCss.imgBox}>
                                                        <img className={OrderModelCss.imgSet} 
                                                            src={item.content || null} 
                                                            alt={item.title} />
                                                    </div>
                                                </div>
                                            )
                                            :
                                            (
                                                <div key={item.id} className={OrderModelCss.itemSet}>
                                                    <div className={OrderModelCss.titleBox}>
                                                        <h4 className={OrderModelCss.titleSet}>{item.title}</h4>
                                                    </div>
                                                    <div className={OrderModelCss.textBox}>
                                                        <p className={OrderModelCss.textSet}>{item.content}</p>
                                                    </div>
                                                </div>
                                            )
                                            
                                        )
                                    })
                                }
                                
                            </div>
                            <div className={OrderModelCss.orderBtnBox}>
                                <button type="button" 
                                        className={`${OrderModelCss.orderBtnSet} btn01Set`}
                                        onClick={()=>{handleOrderCheckModelOpen();}}
                                        >
                                    送出估價訂單
                                </button>
                            </div>
                        </div>
                            
                    </div>
                </div>
            </div>
        </>
    )
}
export default OrderModel;