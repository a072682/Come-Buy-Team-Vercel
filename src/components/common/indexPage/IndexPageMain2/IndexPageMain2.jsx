"use client";


import IndexPageMain2Css from "./_IndexPageMain2.module.scss";
import Image from 'next/image';
import { useRouter } from 'next/navigation';

function IndexPageMain2(){

    const router = useRouter();

    const main2Data = [
        {
            id:"main2-01",
            img:`/images/IndexPage/main2/index-mian2-img01.png`,
            alt:"index-mian2-img01",
            text:"設計流程標準化",
        },
        {
            id:"main2-02",
            img:`/images/IndexPage/main2/index-mian2-img02.png`,
            alt:"index-mian2-img01",
            text:"降低前期製造成本",
        },
        {
            id:"main2-03",
            img:`/images/IndexPage/main2/index-mian2-img03.png`,
            alt:"index-mian2-img01",
            text:"細節精準調教",
        },
    ]

    return(
        <>
            {/* 元件最外框 */}
            <div className={IndexPageMain2Css.main2}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* 元件外框 */}
                            <div className={IndexPageMain2Css.main2Content}>
                                <div className='w-100 row row-gap-64 row-gap-lg-96'>
                                    {
                                        main2Data?.map((item)=>{
                                            return(
                                                <div key={item.id} className='col-8 mx-auto col-lg-4'>
                                                    {/* 卡片設定 */}
                                                    <div className={IndexPageMain2Css.main2CardSet}>
                                                        {/* 圖片最外框 */}
                                                        <div className={IndexPageMain2Css.main2CardImgBoxSet}>
                                                            {/* 圖片外框 */}
                                                            <div className={IndexPageMain2Css.main2CardImgBoxInSet}>
                                                                <Image  src={item.img} 
                                                                        alt={item.alt}
                                                                        className="imgSet"
                                                                        fill
                                                                        sizes="300px"
                                                                        priority
                                                                />
                                                            </div>
                                                            {/* 圖片外框 */}
                                                        </div>
                                                        {/* 圖片外框 */}

                                                        {/* 文字外框 */}
                                                        <div className={`${IndexPageMain2Css.main2TextBox} d-flex justify-content-center align-items-center`}>
                                                            <p className={`${IndexPageMain2Css.main2TextSet} `}>{item.text}</p>
                                                        </div>
                                                        {/* 文字外框 */}
                                                    </div>
                                                    {/* 卡片設定 */}
                                                </div> 
                                            )
                                        })
                                    }
                                    <div className='col-12'>
                                        {/* 連結按鈕 */}
                                        <button className={`${IndexPageMain2Css.mian2CheckBtnBoxSet} btn01Set`}
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
export default IndexPageMain2;