
"use client";


import { useRouter } from 'next/navigation';
import IndexPageMain4Css from "./_IndexPageMain4.module.scss";

function IndexPageMain4(){

    const router = useRouter();

    const main4Data = [
        {
            id:"main3-R-01",
            text:"連續碳纖維尼龍",
        },
        {
            id:"main3-R-02",
            text:"SLA雷射\n光固化",
        },
        {
            id:"main3-R-03",
            text:"層疊製造成型",
        },
        {
            id:"main3-L-01",
            text:"FDM技術",
        },
        {
            id:"main3-L-02",
            text:"SLM技術",
        },
        {
            id:"main3-L-03",
            text:"SLS選擇性\n雷射燒結",
        },
    ]

    const R_Data = main4Data.filter(d => d.id.includes("-R-"));
    const L_Data = main4Data.filter(d => d.id.includes("-L-"));
    const result = [L_Data, R_Data];

    return(
        <>
            {/* 元件最外框 */}
            <div className={IndexPageMain4Css.main4}>
                <div className="container">        
                    <div className="row">
                        <div className="col-12">
                            {/* 元件外框 */}
                            <div className={IndexPageMain4Css.main4Content}>
                                <div className='w-100 row gap-48 gap-lg-0'>
                                    <div className='col-12 col-lg-4'>
                                        {/* 左邊區塊 */}
                                        <div className={IndexPageMain4Css.main4LeftBox}>
                                            {/* 標題外框 */}
                                            <div className={IndexPageMain4Css.main4Title}>
                                                {/* 標題 */}
                                                <h2 className={IndexPageMain4Css.main4TitleSet}>服務項目</h2>
                                                {/* 標題 */}
                                            </div>
                                            {/* 標題外框 */}

                                            {/* 連結按鈕 */}
                                            <button className={`${IndexPageMain4Css.mian4CheckBtnSet} btn01Set d-none d-lg-block`}
                                                    type='button'
                                                    onClick={() => router.push('/')}
                                            >
                                                開始製作
                                            </button>
                                            {/* 連結按鈕 */}
                                        </div>
                                        {/* 左邊區塊 */}
                                    </div>

                                    <div className='col-12 col-lg-8'>
                                         <div className='row'>
                                            {
                                                result.map((group,index)=>{
                                                    return(
                                                        <div key={index} className="col-6">
                                                            {/* 卡片設定 */}
                                                            <div className={IndexPageMain4Css.main4CardBox}>
                                                                {
                                                                    group.map((item) => (
                                                                        // 單一卡片設定
                                                                        <div key={item.id} className={`${IndexPageMain4Css.cardItem} box01Set`}>
                                                                            {/* 文字設定 */}
                                                                            <p className={IndexPageMain4Css.textSet}>
                                                                                {item.text}
                                                                            </p>
                                                                            {/* 文字設定 */}
                                                                        </div>
                                                                        // 單一卡片設定
                                                                    ))
                                                                }
                                                            </div>
                                                            {/* 卡片設定 */}
                                                        </div>
                                                    )
                                                })
                                               
                                            }
                                         </div>
                                    </div>
                                    

                                    <div className="col-12 d-block d-lg-none">
                                        {/* 連結按鈕 */}
                                        <button className={`${IndexPageMain4Css.mian4CheckSmBtnSet} btn01Set`}
                                                type='button'
                                                onClick={() => router.push('/')}
                                        >
                                            開始製作
                                        </button>
                                        {/* 連結按鈕 */}
                                    </div>
                                </div>
                            </div>
                            {/* 元件外框 */}
                        </div>                                       
                    </div>
                </div>
            </div>
            {/* 元件最外框 */}
        </>
    )
}
export default IndexPageMain4;