

import { AnimatePresence, motion } from 'framer-motion';
import './_EstimatePageMain5.scss';
import { useDispatch } from 'react-redux';
import { open, MODALS } from '@/store/slice/modalSlice';
import { orderDataUpLoad } from '@/store/slice/orderSlice';


function EstimatePageMain5({ loginState,orderData,triggerSet,fadeUp }){

    //#region 讀取中央函式前置宣告
    const dispatch = useDispatch();
    //#endregion

    //#region 開啟訂單詳細資料
    const handleOrderModelOpen = () =>{
        dispatch(orderDataUpLoad(orderData));
        dispatch(open(MODALS.OrderModel));
    }
    //#endregion


    return(
        <>
        <AnimatePresence>
            <article className="EstimatePageMain5" id="EstimatePageMain5">
                <div className="EstimatePageMain5-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <motion.div className='EstimatePageMain5-content'
                                            variants={triggerSet}
                                            initial="hidden"
                                            whileInView="show"                      
                                            viewport={{ amount: 0, margin: "0% 0px -20% 0px" }}
                                >
                                    <motion.div className="EstimatePageMain5-title"
                                                variants={fadeUp}>
                                        <h3 className="title-set">注意事項！！！<span className='d-block d-lg-none'></span>產品交期說明</h3>
                                    </motion.div>

                                    <motion.div className="EstimatePageMain5-text-box"
                                                variants={fadeUp}> 
                                        <p className="text-set">急單：3個工作天出貨，且有失敗風險，請與業務聯繫。</p>
                                        <p className="text-set">一般單：3~6個工作天出貨。</p>
                                        <p className="text-set">不急單：6~10個工作天出貨、依排程而定。</p>
                                    </motion.div>

                                    <motion.div className="EstimatePageMain5-note-box"
                                                variants={fadeUp}>
                                        <span className="material-symbols-outlined note-icon-set">
                                            error
                                        </span>
                                        <div className="note-text-box">
                                            <p className="text-set">
                                                此時間為出貨時間，非到貨時間
                                            </p>
                                            <p className="text-set">
                                                產品實際交期及價格依訂單回覆內容而定如有特殊狀況將由客服人員與您聯繫
                                            </p>
                                        </div>
                                    </motion.div>

                                    <motion.div className="EstimatePageMain5-checkBtn-box"
                                                variants={fadeUp}>
                                        <button className="EstimatePageMain5-checkBtn-set mian-btn1-set" 
                                                type="button" 
                                                onClick={()=>{loginState ? (handleOrderModelOpen()):(dispatch(open(MODALS.LOGIN)))}}
                                        > 
                                            送出估價
                                        </button>
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
export default EstimatePageMain5;





