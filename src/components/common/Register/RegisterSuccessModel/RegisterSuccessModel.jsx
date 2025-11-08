'use client';

import { useEffect } from "react";
import Image from "next/image";
import RegisterSuccessCss from "./_RegisterSuccessModel.module.scss";
import { useRouter } from 'next/navigation';

function RegisterSuccessModel({onClose}){

    const router = useRouter();

    useEffect(()=>{
        //#region 觸發訂單資料送出後資料初始化動作
        const id = setTimeout(() => {  
            //關閉OrderCheck
            onClose?.();
            //關閉OrderCheck

            //跳轉至首頁
            router.push('/');
            //跳轉至首頁
        }, 2000); // 2000 毫秒 = 2 秒
        //#endregion
        // 清理：如果在 2 秒內就 unmount（或依賴變動），取消尚未執行的計時器
        return () => clearTimeout(id);
    },[]);

    return(
        <>  
            {/* 元件最外框 */}
            <div    className={RegisterSuccessCss.registerSuccessModal} 
                    style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
                {/* 定位效果 */}
                <div className={RegisterSuccessCss.modalDialog}>
                    {/* model整體元件 */}
                    <div className={`${RegisterSuccessCss.modalContent} border-0 shadow`}>
                        {/* header設定 */}
                        <div className={`${RegisterSuccessCss.modalHeader} ${RegisterSuccessCss.registerSuccessModalHeaderBgSet}`}>
                            <button onClick={()=>{onClose?.();}} 
                                type="button" 
                                className={RegisterSuccessCss.registerSuccessModalBtnClose} 
                                aria-label="Close">
                                <Image  className={RegisterSuccessCss.materialPageModalBtnCloseImgSet} 
                                        src={`/images/RegisterPage/btn-close.png`} 
                                        alt="Close"
                                        fill
                                        size="50px"
                                        priority
                                />
                            </button>
                        </div>
                        {/* header設定 */}

                        {/* model本體背景 */}
                        <div className={RegisterSuccessCss.registerSuccessModalBodySet}>
                            {/* 文字 */}
                            <p className={RegisterSuccessCss.textSet}>會員創立成功，請稍後回到首頁後重新登入。</p>
                            {/* 文字 */}
                        </div>
                        {/* model本體背景 */}  
                    </div>
                    {/* model整體元件 */}
                </div>
                {/* 定位效果 */}
            </div>
            {/* 元件最外框 */}
        </>
    )
}

export default RegisterSuccessModel;