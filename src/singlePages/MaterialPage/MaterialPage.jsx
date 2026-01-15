"use client";

import { useDispatch } from "react-redux";
import MaterialPageMain1 from "./MaterialPageMain1/MaterialPageMain1";
import MaterialPageMain2 from "./MaterialPageMain2/MaterialPageMain2";
import MaterialPageMain3 from "./MaterialPageMain3/MaterialPageMain3";
import { materialDataUpLoad } from "@/store/slice/materialSlice";
import { MODALS, open } from "@/store/slice/modalSlice";




function MateriaPage(){

    //#region 讀取中央函式前置宣告
        //讀取中央函式前置宣告
        const dispatch = useDispatch();
    //#endregion
    
    const handleOpenMaterialModal = (data) =>{
        dispatch(materialDataUpLoad(data));
        dispatch(open(MODALS.MaterialPageModal));
    }

    //#region 動畫設定
    const triggerSet = {
        hidden: { opacity: 0 },                 // 父層只當觸發器，不做淡入
        show: {
            opacity: 1,
            transition: {
            duration: 0,                        // 0：不要讓父層自己動畫造成等待
            //觸發動畫到第一個動畫的延遲時間
            delayChildren: 0.08,
            //第二個動畫到第三以及後續的延遲時間
            staggerChildren: 0.1,
            // 想骨牌再開：delayChildren: 0.08, staggerChildren: 0.06,
            },
        },
    };
    const fadeUp = { 
        hidden:{opacity:0,y: 40}, 
        show:{opacity:1,y:0, 
        transition:{duration:0.6, ease:"easeOut"}} 
    };
    //#endregion

    return(
        <>
            <section className="MateriaPage">
                <h1 className="visually-hidden">
                   Come & BUY 3D列印 ｜材料介紹
                </h1>
                <MaterialPageMain1  handleOpenMaterialModal={handleOpenMaterialModal}
                                    triggerSet={triggerSet}
                                    fadeUp={fadeUp}
                />
                <MaterialPageMain2  handleOpenMaterialModal={handleOpenMaterialModal}
                                    triggerSet={triggerSet}
                                    fadeUp={fadeUp}
                />
                <MaterialPageMain3  handleOpenMaterialModal={handleOpenMaterialModal}
                                    triggerSet={triggerSet}
                                    fadeUp={fadeUp}
                />
            </section>
        </>
    )
}

export default MateriaPage;