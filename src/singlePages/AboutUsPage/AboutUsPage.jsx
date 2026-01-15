"use client";

import AboutUsPageMain1 from "./AboutUsPageMain1/AboutUsPageMain1";
import AboutUsPageMain2 from "./AboutUsPageMain2/AboutUsPageMain2";
import AboutUsPageMain3 from "./AboutUsPageMain3/AboutUsPageMain3";
import AboutUsPageMain4 from "./AboutUsPageMain4/AboutUsPageMain4";

function AboutUsPage(){

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

    return(
        <>
            <section className="AboutUsPage">
                <h1 className="visually-hidden">
                   Come & BUY 3D列印｜關於我們頁面｜公司資訊
                </h1>
                <AboutUsPageMain1   triggerSet={triggerSet} fadeUp={fadeUp} />
                <AboutUsPageMain2   triggerSet={triggerSet} fadeUp={fadeUp} />
                <AboutUsPageMain3   triggerSet={triggerSet} fadeUp={fadeUp} />
                <AboutUsPageMain4   triggerSet={triggerSet} fadeUp={fadeUp} />
            </section>
        </>
    )
}
export default AboutUsPage;