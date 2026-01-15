"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import './_AboutUsPageMain4.scss';
import { AnimatePresence, motion } from 'framer-motion';
import { messageDataUpLoad } from "@/store/slice/messageSlice";
import { useDispatch, useSelector } from "react-redux";
import { open,MODALS } from "@/store/slice/modalSlice";


function AboutUsPageMain4({triggerSet,fadeUp}){

    //#region 讀取中央登入資料
        const loginState = useSelector((state)=>{
            return(
                state.auth.isLogin
            )
        })

        useEffect(()=>{
            //console.log("loginState狀態:",loginState);
        },[loginState])
    //#endregion

    //#region 讀取中央函式前置宣告
        //讀取中央函式前置宣告
        const dispatch = useDispatch();
    //#endregion

    //#region 表單資料狀態初始化
        const[aboutusPageMessage,setAboutusPageMessage]=useState(
            {
                message:""
            });
    //#endregion

    //#region 更新表單資料
        useEffect(()=>{
            //console.log("目前聯絡我們的留言資訊:",aboutusPageMessage)
        },[aboutusPageMessage]);
    //#endregion

    //初始化表格
    const {
        //把 <input>、<textarea> 等表單元素跟 react-hook-form 綁定
        register,
        //幫你處理表單送出事件，會自動跑驗證
        handleSubmit,
        //儲存表單的錯誤訊息
        formState: { errors },
        //監聽某個欄位或整個表單的值（例如即時顯示字數）
        watch,
        //重置整個表單到初始狀態，或指定重置的值
        reset
    } = useForm(); // 初始化 useForm
    //useForm 建立並初始化一個表單管理器

    // 監聽 textarea 內容長度
    const messageDataNum = watch("message", "").length; 
    //"message"對應{...register("message", {...})}的欄位
    //預設回傳空字串 ""

    
    const onSubmit = async(data) => {
        try{
            if(messageDataNum === 0){
                return;
            }else{
                await dispatch(messageDataUpLoad({messageData:data})).unwrap();

                //開啟Moda
                dispatch(open(MODALS.AboutUsModal));
                //開啟Modal
                // 清除表單數據
                reset();
                // 清除表單數據
            }
        }catch(error){
            console.log("留言上傳失敗:",error);
        }
    };
    //onSubmit={handleSubmit(onSubmit)}
    //等於
    // <form onSubmit={(e) => {
    // e.preventDefault();               
    // const data = {...};      
    // onSubmit(data);          
    // }}></form>

    //#region
    useEffect(() => {
        //從網址中取得id資料
        const hash = window.location.hash;
        if (!hash) {
            return;
        }
        //找尋id標籤位置
        const idData = document.querySelector(hash);
        if (!idData) {
            return;
        }
        //滾動到指定id標籤位製
        requestAnimationFrame(() => {
            idData.scrollIntoView({ behavior: "smooth" });
        });
    }, []);
    //#endregion

    return(
        <>  
            <AnimatePresence>
                <article className="AboutUsMain4" id="contactUs">
                    <div className="AboutUsMain4-bg">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-lg-8 mx-auto">
                                    <motion.div className='AboutUsMain4-content'
                                                variants={triggerSet}
                                                initial="hidden"
                                                whileInView="show"                      
                                                viewport={{ amount: 0, margin: "0% 0px -20% 0px" }}
                                    >
                                        <motion.div className="AboutUsMain4-title"
                                                    variants={fadeUp}>
                                            <h2 className="title-set">聯絡我們</h2>
                                        </motion.div>
                                        <motion.form    className="from-set" 
                                                        onSubmit={handleSubmit(onSubmit)}
                                                        variants={fadeUp}
                                        >

                                            <div className="message-group ">
                                                {/* 🔹 留言 */}
                                                <label className="aboutUs-label-set message-label-set" htmlFor="aboutUs-textarea">
                                                    留言
                                                </label>
                                                <div className="aboutUs-textarea-box">
                                                    <textarea
                                                    {...register("message", {
                                                        required: "請輸入您的留言",
                                                        maxLength: { value: 500, message: "最多只能輸入 500 個字" }
                                                    })}
                                                    className={`aboutUs-textarea-set aboutUs-input-set message-input-set  ${
                                                        errors.message ? "is-invalid" : ""
                                                    }`}
                                                    id="aboutUs-textarea"
                                                    rows="4"
                                                    placeholder="請留下您想告知的內容">
                                                    </textarea>
                                                    <p className="aboutUs-textarea-result fs-16 fs-lg-24">{`${messageDataNum}/500`}</p>
                                                </div>
                                                {errors.message && <p className="text-danger mb-24">{errors.message.message}</p>}
                                            </div>
                                        
                                            {/* 🔹 送出按鈕 */}
                                            <button
                                                className="form-btn-set mian-btn1-set"
                                                type={loginState ? "submit" : "button"}
                                                onClick={loginState ? () => null : () => dispatch(open(MODALS.LOGIN))}
                                            >
                                                送出留言
                                            </button>
                                        </motion.form>
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
export default AboutUsPageMain4;
