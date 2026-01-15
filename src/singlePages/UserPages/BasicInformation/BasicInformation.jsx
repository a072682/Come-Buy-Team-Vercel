"use client";

import { useEffect, useMemo, useState } from 'react';
import './_BasicInformation.scss';
import { Dropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { AnimatePresence, motion } from 'framer-motion';
import axios from 'axios';
import { getProfile, updateProfile } from '@/store/slice/profileSlice';


function BasicInformation ({userData,setUserData,originUserData,triggerSet,fadeUp}){

    //#region
    //#endregion

    //#region 讀取中央函式前置宣告
        const dispatch = useDispatch();
    //#endregion

    //#region 時間相關函式
        //#region 紀錄年欄位狀態宣告
            const [yearValue, setYearValue] = useState("年");
            useEffect(()=>{},[yearValue]);
        //#endregion
        //#region 控制年欄位下拉選單
            const [yearShow, setYearShow] = useState(false);
            useEffect(()=>{},[yearShow]);
        //#endregion

        //#region 紀錄月欄位狀態宣告
            const [mouthValue, setMouthValue] = useState("月");
        //#endregion
        //#region 控制月欄位下拉選單
            const [mouthShow, setMouthShow] = useState(false);
        //#endregion

        //#region 控制日欄位下拉選單
            const [dayValue, setDayValue] = useState("日");
        //#endregion
        //#region 控制日欄位下拉選單
            const [dayShow, setDayShow] = useState(false);
        //#endregion
        
        //#region 取得"現在"的時間物件
            const now = new Date();
        //#endregion

        //#region 取得現在的年份
            const currentYear = now.getFullYear();
            //.getFullYear()：從日期物件取出 4 位數的西元年（例如 2025）
        //#endregion

        //#region 函式功能:近 20 年（例如：2006～2025），依需求你可改成反向排序
            const years = useMemo(() => Array.from({ length: 100 }, (_, i) => currentYear - 99 + i),[currentYear]);
            //#region useMemo作用說明
                //useMemo記憶一段「計算後的值」
                //語法：useMemo(createFn, [deps]) 
                //createFn：回傳要被記住的結果
                //[deps]：相依陣列，只有當裡面的任一值改變時，createFn 才會再被呼叫
            //#endregion
            //#region 不用useMemo的函式寫法
                //const years = Array.from({ length: 20 }, (_, i) => currentYear - 19 + i);
            //#endregion
            //#region Array.from作用說明
                // Array.from({ length: 20 }, mapFn)
                //建立長度 20 的陣列 → [0, 0, 0...]//長度20，內容為空 → 依序套用 mapFn 放入內容\
                //(_, i): _ 是「當前值」（這裡沒用到所以用底線），i 是索引（0 到 19）。
                //currentYear - 19 + i 
                //當 i = 0 → currentYear(今年) - 19 + 0（最早的年份）
                //當 i = 19 → currentYear(今年) - 19 + 19（最新的年份）
                //只有 currentYear 變了，才會重算 years。
                // 近 20 年（例如：2006～2025），依需求你可改成反向排序 
                // 如果要反向由新到舊則
                // (_, i) => currentYear - i)
            //#endregion
        //#endregion

        //#region 函式功能:取得1～12月
            const months = useMemo(() => Array.from({ length: 12 }, (_, i) => i + 1), []);
        //#endregion

        //#region 函式功能:取得某年某月的天數（month 1-12）
            const getDaysInMonth = (year, month) => {
                if (!year || !month) return 31; // 還沒選完就先給 31（或你想先不顯示）
                return new Date(year, month, 0).getDate(); // month 取「下個月的 0 號」剛好是這個月最後一天
            };
            //new Date(2025, 2, 0) // month=2 表示「3 月」的第 0 天 → 2025-02-28
            //實際範例
            //getDaysInMonth(2025, 2) // → 28  (2025 年 2 月有 28 天)
            //getDaysInMonth(2025, 1) // → 31  (2025 年 1 月有 31 天)
            //語法new Date(年, 月(0~11), 日)
            //new Date是「建立一個日期物件」，內容是 某一天的完整資訊
            //.getDate()：只會回傳今天為幾號(純數字)部分。
        //#endregion

        //#region 套用getDaysInMonth函式取得該月總天數
            const daysInThisMonth = getDaysInMonth( Number(userData?.birthYear), Number(userData?.birthMonth));
        //#endregion
        
        //#region 套用該月總天數的資料引入至下拉選單
            const days = useMemo(
                () => Array.from({ length: daysInThisMonth }, (_, i) => i + 1),
                [daysInThisMonth]
            );
        //#endregion
    //#endregion

    //#region 讀取會員名稱資料
        const nameData = useSelector((state)=>{
            return(
                state.auth.username
            )
        })
        useEffect(()=>{
            console.log("名稱資料:",nameData);
        },[nameData])
    //#endregion

    //#region 將資料寫入userData
        const inputUserData = (e) => {
            const { name, value, type, checked, files } = e.target;
            setUserData(prev => {
                if (type === 'checkbox') {
                    return { ...prev, [name]: checked };
                } else if (type === 'file') {
                    return { ...prev, [name]: files?.[0] ?? null };
                } else {
                    return { ...prev, [name]: value };
                }
            });
        };
    //#endregion

    //#region 將資料寫入userData(Dropdown專用)
        const onDropdownSelect = ({ name, value }) => {
            setUserData(prev => {
                const next = { ...prev, [name]: value };

                // 只有年/月改變時才檢查日的合法性
                if (name === 'birth_year' || name === 'birth_month') {
                    const nextYear  = Number(next.birth_year);   // 用 next 而不是 prev/formData
                    const nextMonth = Number(next.birth_month);
                    const nextMax   = getDaysInMonth(nextYear, nextMonth);

                    if (Number(next.birth_day) > nextMax) {      // 比較也用 next
                        next.birth_day = '';                       // 清空不合法的日
                    }
                }
                return next;
            });
        };
    //#endregion

    //#region 會員頭像圖片上傳函式
    const avatarImgUpload = async(event)=>{

        const file = event.target.files?.[0];
        if (!file) {
            console.log("請選擇檔案")
            return;
        }

        // 建立FormData檔案
        const formData = new FormData();
        formData.append("folder", "avatarImg");
        formData.append('file', file);

        try{
            const avatarImgUploadRef = await axios.post(`api/cloudinary/uploadImage`,formData);
            console.log("圖片上傳成功",avatarImgUploadRef.data);
            setUserData({
                ...userData,
                avatar_id: avatarImgUploadRef.data.result.public_id,             
                avatar_url: avatarImgUploadRef.data.result.url, 
            });
        }catch(error){
            console.log("圖片上傳失敗",error.response.data);
        }
    }
    //#endregion

    //#region 會員頭像圖片覆蓋函式
    const avatarImgUpChange = async(event)=>{

        const file = event.target.files?.[0];
        if (!file) {
            console.log("請選擇檔案")
            return;
        }

        // 建立FormData檔案
        const formData = new FormData();
        formData.append("folder", "avatarImg");
        formData.append("oldPublicId", userData?.avatar_id);
        formData.append('file', file);

        try{
            const avatarImgUpChangeRef = await axios.put(`api/cloudinary/replaceImage`,formData);
            console.log("圖片覆蓋成功",avatarImgUpChangeRef.data);
            setUserData({
                ...userData,
                avatar_id: avatarImgUpChangeRef.data.data.public_id,               
                avatar_url: avatarImgUpChangeRef.data.data.url,        
            });
        }catch(error){
            console.log("圖片覆蓋失敗",error.response.data);
        }
    }
    //#endregion

    //#region 更新會員個人資料函式
    const handleUserDataUpLoadChange = async()=>{
        if(originUserData === userData){
            console.log("資料相同");
            return;
        }
        try{
            const { user_list_id, ...newUserData } = userData;
            await dispatch(updateProfile(newUserData)).unwrap();
            //console.log("會員個人資料更新成功",userProfileDataUpLoadChangeRef);
            dispatch(getProfile());
        }catch(error){
            console.log("會員個人資料更新失敗",error);
        }
    }
    //#endregion
    
    //#region 確認送出函式
    const handleSubmit = (e) => {
        e.preventDefault();
        handleUserDataUpLoadChange();
    };
    //#endregion

    return(
        <AnimatePresence>
            <article className='BasicInformation'>
                <motion.div className='formBox'
                            variants={triggerSet}
                            initial="hidden"
                            whileInView="show"                      
                            viewport={{ amount: 0, margin: "0% 0px -20% 0px" }}>
                    <form className='form-content' onSubmit={handleSubmit}>
                        <motion.div className='salutation'
                                    variants={fadeUp}>
                            {/* 稱謂 */}
                            <h6 className='salutation-title title'>稱謂：</h6>
                            <div className='salutation-item-box mt-24'>
                                <div className='salutation-item'>
                                    <input  id="salutation01" 
                                            type="radio" 
                                            name="salutation" 
                                            value="先生" 
                                            checked={userData?.salutation === "先生"} 
                                            onChange={inputUserData}/>
                                    <label htmlFor="salutation01" className="mb-0 custom-checkout-label">
                                        先生
                                    </label>
                                </div>
                                    
                                <div className='salutation-item'>
                                    <input  id="salutation02" 
                                            type="radio" 
                                            name="salutation" 
                                            value="女士" 
                                            checked={userData?.salutation === "女士"} 
                                            onChange={inputUserData}/>
                                    <label htmlFor="salutation02" className="mb-0 custom-checkout-label">
                                        女士
                                    </label>
                                </div>
                            </div>
                        </motion.div>
                        
                        <motion.div className='name'
                                    variants={fadeUp}>
                            <h6 className='name-title title'>姓名：</h6>
                            <div className='name-box mt-24'>
                                <input
                                    className='name-item form-item'
                                    type="text"
                                    name="last_name"
                                    placeholder="請輸入姓氏"
                                    value={userData?.last_name ?? ""}
                                    onChange={inputUserData}
                                />
                                <input
                                    className='name-item form-item'
                                    type="text"
                                    name="first_name"
                                    placeholder="請輸入名字"
                                    value={userData?.first_name ?? ""}
                                    onChange={inputUserData}
                                />
                            </div>
                        </motion.div>
                        
                        <motion.div className='birthday'
                                    variants={fadeUp}>
                            <h6 className='title-dropdown title'>生日</h6>
                            <div className='birthday-box mt-24'>

                                <div className='yearData'>
                                    <Dropdown show={yearShow} onToggle={(isOpen) => setYearShow(isOpen)}>

                                        <Dropdown.Toggle as="div" onClick={() => {setYearShow(!yearShow);}}> 
                                            <div className='title-dropdown form-item'>{userData?.birth_year ? (userData?.birth_year):(yearValue)}</div>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu  className="triple-dropdown-menu" 
                                                        popperConfig={{
                                                            modifiers: [
                                                                { name: 'offset', options: { offset: [0, 0] } }, // [skid, distance]
                                                            ],
                                                        }}>
                                            <div className="menu-column main-menu">
                                            {
                                                years.map((main, i) => (
                                                    <span key={i} className='menu-btn' onClick={() => {
                                                        setYearValue(main); onDropdownSelect({ name: 'birth_year', value:Number(main)}); setYearShow(!yearShow)
                                                    }}>
                                                        {main} 
                                                    </span>
                                                ))
                                            }
                                            </div>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                                
                                <div className='mouthData'>
                                    <Dropdown show={mouthShow} onToggle={(isOpen) => setMouthShow(isOpen)}>

                                        <Dropdown.Toggle as="div" onClick={() => {setMouthShow(!mouthShow);}}> 
                                            <div className='title-dropdown form-item'>{userData?.birth_month ? (userData?.birth_month):(mouthValue)}</div>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu  className="triple-dropdown-menu" 
                                                        popperConfig={{
                                                            modifiers: [
                                                                { name: 'offset', options: { offset: [0, 0] } }, // [skid, distance]
                                                            ],
                                                        }}>
                                            <div className="menu-column main-menu">
                                            {
                                                months.map((main, i) => (
                                                    <span key={i} className='menu-btn' onClick={() => {
                                                        setMouthValue(main); onDropdownSelect({ name: 'birth_month', value:Number(main) }); setMouthShow(!mouthShow)
                                                    }}>
                                                        {main}
                                                    </span>
                                                ))
                                            }
                                            </div>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>

                                <div className='dayData'>
                                    <Dropdown show={dayShow} onToggle={(isOpen) => setDayShow(isOpen)}>

                                        <Dropdown.Toggle as="div" onClick={() => {setDayShow(!dayShow);}}> 
                                            <div className='title-dropdown form-item'>{userData?.birth_day ? (userData?.birth_day):(dayValue)}</div>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu  className="triple-dropdown-menu" 
                                                        popperConfig={{
                                                            modifiers: [
                                                                { name: 'offset', options: { offset: [0, 0] } }, // [skid, distance]
                                                            ],
                                                        }}>
                                            <div className="menu-column main-menu">
                                            {
                                                days.map((main, i) => (
                                                    <span key={i} className='menu-btn' onClick={() => {
                                                        setDayValue(main); onDropdownSelect({ name: 'birth_day', value:Number(main) }); setDayShow(!dayShow)
                                                    }}>
                                                        {main}
                                                    </span>
                                                ))
                                            }
                                            </div>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                        </motion.div>
                        
                        <motion.div className='homePhone'
                                    variants={fadeUp}>
                            <h6 className='title'>連絡電話：</h6>
                            <input
                                className='form-item mt-24 w-100'
                                type="text"
                                name="phone"
                                value={userData?.phone ?? ""}
                                onChange={inputUserData}
                                placeholder="請輸入電話號碼"
                            />
                        </motion.div>

                        <motion.div className='phone'
                                    variants={fadeUp}>
                            <h6 className='title'>手機：</h6>
                            <input
                                className='form-item mt-24 w-100'
                                type="text"
                                name="mobile"
                                value={userData?.mobile ?? ""}
                                onChange={inputUserData}
                                placeholder="請輸入手機號碼"
                            />
                        </motion.div>

                        {/* <motion.div className='email'
                                    variants={fadeUp}>
                            <h6 className='title'>電子信箱：</h6>
                            <input
                            className='form-item mt-24 w-100'
                                type="email"
                                name="email"
                                value={email || ""}
                                onChange={(event) => {setEmail(event.target.value)}}
                                placeholder="請輸入電子信箱"
                            />
                        </motion.div> */}
                        
                        {/* 訂閱電子報 */}
                        {/* <div className='subscribe'>
                            <div className='subscribe-item'>
                                <input  id="subscribe"
                                        type="checkbox" 
                                        name="subscribe" 
                                        value="訂閱" 
                                        checked={formData.subscribe} 
                                        onChange={onInputChange}/>
                                <label htmlFor="subscribe" className="mb-0 custom-checkout-label">
                                    電子報訂閱
                                </label>
                            </div>
                        </div> */}
                        
                        <motion.div className='img'
                                    variants={fadeUp}>
                            <h6 className='title'>照片更改：</h6>
                            {
                                userData?.avatar_url || userData?.google_avatar_url ?
                                (
                                    <img    className='imgData' 
                                            src={userData?.avatar_url || userData?.google_avatar_url} 
                                            alt="使用者頭像" />
                                )
                                :
                                (
                                    <div className="imgData textVer">{(nameData?.trim()?.charAt(0) || '?').toUpperCase()}</div>
                                )
                            }
                            
                            <input
                                className='img-input'
                                id="avatarFileInput"
                                type="file"
                                name="image"
                                accept="image/*"
                                onChange={userData?.avatar_url || userData?.google_avatar_url?
                                    ((event)=>{avatarImgUpChange(event)}):((event)=>{avatarImgUpload(event)})}
                            />
                            <button className='imgBtn' 
                                    type='button'
                                    onClick={()=>{document.getElementById("avatarFileInput").click()}}
                                    >
                                    上傳照片
                            </button>
                                

                        </motion.div>
                        
                        <motion.button  type="submit" 
                                        className='formBtn submitBtn mian-btn1-set'
                                        variants={fadeUp}
                        >儲存</motion.button>
                    </form>
                </motion.div>
            </article>
        </AnimatePresence>
        
    )
}
export default BasicInformation;