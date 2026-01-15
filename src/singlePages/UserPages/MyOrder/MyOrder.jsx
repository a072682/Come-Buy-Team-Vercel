"use client";

import { useEffect, useState } from 'react';
import './_MyOrder.scss';
import { useDispatch, useSelector } from 'react-redux';
import { MODALS, open } from '@/store/slice/modalSlice';
import { AnimatePresence, motion } from 'framer-motion';
import { deleteOrder, getOrder, orderDataUpLoad } from '@/store/slice/orderSlice';




function MyOrder ({triggerSet,fadeUp}){
    
    //#region
    //#endregion

    //#region 讀取中央函式前置宣告
    const dispatch = useDispatch();
    //#endregion

    //#region 儲存訂單列表資料
    const[orderListData,setOrderListData] = useState([]);
    useEffect(()=>{},[orderListData]);
    //#endregion

    //#region 取得所有訂單函式
    const allOrderData = useSelector((state)=>{
        return(
            state.order.allOrderData
        )
    })

    useEffect(()=>{
        console.log("所有訂單資料:",allOrderData);
        setOrderListData(allOrderData);
    },[allOrderData])
    //#endregion

    //#region 取得所有訂單函式
    useEffect(()=>{
        dispatch(getOrder());
    },[])
    //#endregion

    //#region 開啟Modal函式
    const handleOpenOrderDetailModal = (data) =>{
        dispatch(orderDataUpLoad(data));
        dispatch(open(MODALS.OrderDetailModal));
    }
    //#endregion

    //#region 審核狀態列表
    const statusLabel = {
        approved: "已審核",
        rejected: "已駁回",
        wait: "審核中",
    };
    //#endregion

    //#region 刪除訂單函式
    const handleDeleteOrderData = (id) =>{
        dispatch(deleteOrder(id));
    }
    //#endregion

    

    return(
        <>
        <AnimatePresence>
            <article className="MyOrder">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <motion.div className='MyOrder-content-box'
                                        variants={triggerSet}
                                        initial="hidden"
                                        whileInView="show"                      
                                        viewport={{ amount: 0, margin: "0% 0px -20% 0px" }}>
                                <motion.h2  className='title-set'
                                            variants={fadeUp}>我的訂單</motion.h2>
                                <motion.div className='orderList-box'
                                            variants={fadeUp}>
                                    <div className='order-title-box'>
                                        <div className='title-set'>
                                            <p className='title-text-set'>訂單<span>編號</span></p>
                                        </div>
                                        <div className='title-set'>
                                            <p className='title-text-set'>檔案<span>縮圖</span></p>
                                        </div>
                                        <div className='title-set'>
                                            <p className='title-text-set'>訂單<span>詳情</span></p>
                                        </div>
                                        <div className='title-set'>
                                            <p className='title-text-set'>審核<span>狀態</span></p>
                                        </div>
                                        <div className='title-set'>
                                            <p className='title-text-set'>移除<span>訂單</span></p>
                                        </div>
                                        {/* 樣品材料.樣品規格.製作開始日期.預定完成日期.付款方式 */}
                                    </div>
                                    <div className='order-item-box'>
                                        {
                                            orderListData?.map((item)=>{
                                                return(
                                                    <div key={item.id} className='item-set'>
                                                        <div className='text-set-box'>
                                                            <p className='text-set'>{item.id}</p>
                                                        </div>
                                                        <div className='img-set-box'>
                                                            <img className='img-set' src={item.imgfileurl} alt={item.imgfileid} />
                                                        </div>
                                                        <div className='btn-set-box'>
                                                            <button className='btn-set' 
                                                                    onClick={()=>{handleOpenOrderDetailModal(item)}}>
                                                                <p className='btn-text-set'>訂單<span>詳情</span></p>
                                                                
                                                            </button>
                                                        </div>
                                                        <div className='text-set-box'>
                                                            <p className='text-set'>
                                                            {
                                                                statusLabel[item.state] ?? "未知狀態"
                                                            }
                                                            </p>
                                                        </div>
                                                        <div className='btn-set-box'>
                                                            {
                                                                item?.state === "rejected" && (
                                                                    <button className='btn-set' 
                                                                            onClick={()=>{handleDeleteOrderData(item.id)}}>
                                                                        訂單移除
                                                                    </button>
                                                                )
                                                            }
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </article>
        </AnimatePresence>
        </>
    )
}
export default MyOrder;