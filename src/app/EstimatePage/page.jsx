"use client"

import { useEffect, useState } from "react"
import EstimatePageMain1 from "./EstimatePageMain1/EstimatePageMain1";
import EstimatePageMain2 from "./EstimatePageMain2/EstimatePageMain2"
import EstimatePageMain3 from "./EstimatePageMain3/EstimatePageMain3"
import EstimatePageMain4 from "./EstimatePageMain4/EstimatePageMain4"
import EstimatePageMain5 from "./EstimatePageMain5/EstimatePageMain5"
import { useDispatch, useSelector } from "react-redux"
// import { resetTriggerOff } from "../../slice/orderSlice"




function EstimatePage(){

    //#region
    //#endregion

    //#region 讀取中央函式前置宣告
        //讀取中央函式前置宣告
        const dispatch = useDispatch();
    //#endregion

    //#region 讀取中央資料
        //讀取中央資料
        // const loginState = useSelector((state)=>{
        //     return(
        //         state.login.isLogin
        //     )
        // })

        // useEffect(()=>{
        //     console.log("loginState狀態:",loginState);
        // },[loginState])
    //#endregion

    //#region 讀取中央資料
        //讀取中央資料
        // const order = useSelector((state)=>{
        //     return(
        //         state.order.orderData
        //     )
        // })
        // useEffect(()=>{},[order]);
    //#endregion

    //#region 讀取中央資料
        //讀取中央資料
        // const resetTrigger = useSelector((state)=>{
        //     return(
        //         state.order.resetTrigger
        //     )
        // })

        // useEffect(()=>{
        //     if(!resetTrigger){
        //         return;
        //     }else if(resetTrigger){
        //         resetAll();
        //         dispatch(resetTriggerOff());
        //     }
        //     console.log("resetTrigger狀態:",resetTrigger);
        // },[resetTrigger])
    //#endregion

    //#region 創建訂單預設資料
        const [orderData, setOrderData] = useState({
            imgFileUrl: "",        // 縮圖檔案的 URL
            imgFileId:"",          // 縮圖檔案的id
            imgFile:null,          // 縮圖檔案
            num: 1,                // 數量
            technique:"3D列印",    // 製程
            material:"",           //材料
            color:"",              //顏色
            price:0,               //預設價格

            supportMaterial: 10,   // 支撐材（mm）
            wallThickness: 50,     // 壁厚（% 或 mm，看你定義）
            supportDensity: 10,    // 支撐材密度（% 或 mm）

            orderType: "",   // 工期類型：slow / normal / urgent
            productionTime: "",    // 訂單製作時間
            productionEndTime: "", // 預計訂單製作結束時間
        });

        useEffect(()=>{},[orderData]);
    //#endregion

    //#region 重置觸發狀態宣告
        const [main1ResetKey, setMain1ResetKey] = useState(null);
        const [main2ResetKey, setMain2ResetKey] = useState(null);
        const [main3ResetKey, setMain3ResetKey] = useState(null);
        const [main4ResetKey, setMain4ResetKey] = useState(null);
    //#endregion

    //#region 清除全選項函式
    const resetAll =()=>{          
        setMain1ResetKey(true);
        setMain2ResetKey(true);
        setMain3ResetKey(true);
        setMain4ResetKey(true);
        console.log("數據已清空");
    }
    //#endregion

    



    return(
        <>
            <div className="EstimatePageMain1-box">
                <EstimatePageMain1 />
            </div> 
            <div className="EstimatePageMain2-box">
                <EstimatePageMain2 />
            </div> 
            <div className="EstimatePageMain3-box">
                <EstimatePageMain3 />
            </div> 
            <div className="EstimatePageMain4-box">
                <EstimatePageMain4 />
            </div> 
            <div className="EstimatePageMain5-box">
                <EstimatePageMain5 />
            </div> 
        </>
    )
}
export default EstimatePage;