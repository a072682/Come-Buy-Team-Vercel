
"use client";

import IndexPageMain1 from "./IndexPageMain1/IndexPageMain1";
import IndexPageMain2 from "./IndexPageMain2/IndexPageMain2";
import IndexPageMain3 from "./IndexPageMain3/IndexPageMain3";
import IndexPageMain4 from "./IndexPageMain4/IndexPageMain4";
import IndexPageMain5 from "./IndexPageMain5/IndexPageMain5";

export default function IndexPage() {

    //#region 
    //#endregion

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

    return (
        <>
        <section className="IndexPage">
            <h1 className="visually-hidden">
                Come & BUY 3D列印 ｜官方網站
            </h1>

            <IndexPageMain1 triggerSet={triggerSet} fadeUp={fadeUp} />

            <IndexPageMain2 triggerSet={triggerSet} fadeUp={fadeUp} />

            <IndexPageMain3 triggerSet={triggerSet} fadeUp={fadeUp} />

            <IndexPageMain4 triggerSet={triggerSet} fadeUp={fadeUp} />
            
            <IndexPageMain5 triggerSet={triggerSet} fadeUp={fadeUp} />
            
        </section>
        </>
    );
}