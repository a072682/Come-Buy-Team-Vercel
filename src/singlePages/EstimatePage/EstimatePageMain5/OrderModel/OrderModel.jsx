"use client";

import { useDispatch, useSelector } from "react-redux";
import './_OrderModel.scss';
import { open, MODALS } from "@/store/slice/modalSlice";
import { useEffect } from "react";
import { orderCheckMsgUpLoad, orderCheckStateUpLoad, registerOrder } from "@/store/slice/orderSlice";

function OrderModel ({ onClose }){

    //#region
    //#endregion

    //#region 讀取中央函式前置宣告
        const dispatch = useDispatch();
    //#endregion

    //#region 讀取訂單資料
        const order = useSelector((state)=>{
            return(
                state.order.orderData
            )
        })
        useEffect(()=>{
            console.log("訂單資料",order);
        },[order]);
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
                content:order.imgFileUrl || null,
            },
            {
                id:"orderItemData02",
                title:"價格估算",
                content:order.num * order.price,
            },
            {
                id:"orderItemData03",
                title:"製程",
                content:order.technique,
            },
            {
                id:"orderItemData04",
                title:"材料",
                content:order.material,
            },
            {
                id:"orderItemData05",
                title:"顏色",
                content:order.color,
            },
            {
                id:"orderItemData06",
                title:"數量",
                content:order.num,
            },
            {
                id:"orderItemData07",
                title:"支撐材",
                content:order.supportMaterial,
            },
            {
                id:"orderItemData08",
                title:"支撐材密度",
                content:order.supportDensity,
            },
            {
                id:"orderItemData09",
                title:"壁厚",
                content:order.wallThickness,
            },
            {
                id:"orderItemData10",
                title:"工期類型",
                content: orderTypeMap[order.orderType],
            },
            {
                id:"orderItemData11",
                title:"預計訂單製作時間",
                content:order.productionTime,
            },
            {
                id:"orderItemData12",
                title:"預計訂單完成時間",
                content:order.productionEndTime,
            },
        ]
    //#endregion
        
    //#region 檢查內容函式
    const checkOrderData = async() => {
        try{
            if (order.imgFileUrl === "") {
                dispatch(orderCheckMsgUpLoad("檔案縮圖尚未上傳"));
                dispatch(orderCheckStateUpLoad(false));
                throw new Error("檔案縮圖尚未上傳");
            }else if (order.material === "" || order.color === "") {
                dispatch(orderCheckMsgUpLoad("列印材料尚未選擇"));
                dispatch(orderCheckStateUpLoad(false));
                throw new Error("列印材料尚未選擇");
            }else if (order.orderType === "") {
                dispatch(orderCheckMsgUpLoad("工期尚未選擇"));
                dispatch(orderCheckStateUpLoad(false));
                throw new Error("工期尚未選擇");
            }else if (order.productionTime === "" || order.productionEndTime === "") {
                dispatch(orderCheckMsgUpLoad("訂單製作時間尚未設定"));
                dispatch(orderCheckStateUpLoad(false));
                throw new Error("訂單製作時間尚未設定");
            }else{
                dispatch(orderCheckMsgUpLoad("訂單檢查中，請稍後。"));
                dispatch(orderCheckStateUpLoad(true));
            }
        }catch(error){
            console.log("訂單檢查失敗原因",error.message);
            dispatch(orderCheckMsgUpLoad(error.message));
            dispatch(orderCheckStateUpLoad(false));
            throw(error); 
        }
    };
    //#endregion

    //#region 訂單上傳函式
    const handleOrderCheckModelOpen = async()=>{

        //開啟OrderCheckModel
        dispatch(open(MODALS.OrderCheckModel));
        //開啟OrderCheckModel

        try{

            //檢查
            await checkOrderData();
            //檢查

            //上傳
            const orderUploadRef = await dispatch(registerOrder( order )).unwrap();
            console.log("訂單上傳成功",orderUploadRef);
            //上傳

            dispatch(orderCheckMsgUpLoad("訂單上傳完成，稍後傳送至首頁。"));

            return(orderUploadRef);

        }catch(error){
            console.log("訂單送出失敗原因",error.message);
            dispatch(orderCheckMsgUpLoad(error.message));
        }
    }
    //#endregion

    return(
        <>
            {/* 遮罩 */}
            <div className="modalSet orderModel" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
                {/* 定位至置中效果 */}
                <div className="modal-dialog">
                    {/* model整體元件 */}
                    <div className="modal-content border-0">
                        
                        {/* header設定 */}
                        <div className="modal-header orderModalHeaderBgSet">
                            <h3 className="title-set">估價訂單明細</h3>
                            <button onClick={()=>{onClose?.()}} type="button" className="orderModalBtnClose" aria-label="Close">
                                <img className="materialPageModalBtnCloseImgSet" src={`/images/EstimatePage/EstimatePage-main5-modal-btn-close.png`} alt="Close" />
                            </button>
                        </div>

                        {/* model本體背景 */}
                        <div className="orderModal-body-set">
                            <div className="bodyContent-box">
                                {
                                    orderItemData?.map((item)=>{
                                        return(
                                            item.title === "樣品圖縮圖"?
                                            (
                                                
                                                <div key={item.id} className="item-set">
                                                    <div className="title-box">
                                                        <h4 className="title-set">樣品圖縮圖</h4>
                                                    </div>
                                                    <div className="img-box">
                                                        <img className="img-set" 
                                                            src={item.content} 
                                                            alt={item.title} />
                                                    </div>
                                                </div>
                                            )
                                            :
                                            (
                                                <div key={item.id} className="item-set">
                                                    <div className="title-box">
                                                        <h4 className="title-set">{item.title}</h4>
                                                    </div>
                                                    <div className="text-box">
                                                        <p className="text-set">{item.content}</p>
                                                    </div>
                                                </div>
                                            )
                                            
                                        )
                                    })
                                }
                                
                            </div>
                            <div className="orderBtn-box">
                                <button type="button" 
                                        className="orderBtn-set mian-btn1-set"
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