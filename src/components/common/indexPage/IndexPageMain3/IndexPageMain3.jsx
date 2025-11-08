"use client";


import Image from 'next/image';
import { useRouter } from 'next/navigation';
import IndexPageMain3Css from "./_IndexPageMain3.module.scss";


function IndexPageMain3(){

    const router = useRouter();

    const main3Data = [
        {
            id:"main3-01",
            img:`/images/IndexPage/main3/index-mian3-img01.png`,
            imgSm:`/images/IndexPage/main3/index-mian3-sm-img01.png`,
            alt:"index-mian3-img01",
            text:"上傳你的創意，我們將它變成現實,體驗定制化3D列印的無限可能。",
            haveBtn:false,
        },
        {
            id:"main3-02",
            img:`/images/IndexPage/main3/index-mian3-img02.png`,
            imgSm:`/images/IndexPage/main3/index-mian3-sm-img02.png`,
            alt:"index-mian3-img02",
            text:"24小時內快速報價，讓你的3D列印計劃立即起步。",
            haveBtn:true,

        },
        {
            id:"main3-03",
            img:`/images/IndexPage/main3/index-mian3-img03.png`,
            imgSm:`/images/IndexPage/main3/index-mian3-sm-img03.png`,
            alt:"index-mian3-img03",
            text:"打樣快速交付,讓你的創意即刻成真。",
            haveBtn:false,
        },
    ]

    return(
        <>  
            {/* 元件最外框 */}
            <div className={IndexPageMain3Css.main3}>
                <div className="container">        
                    <div className="row">                         
                        <div className="col-12"> 
                            {/* 元件外框 */}
                            <div className={IndexPageMain3Css.main3Content}>         
                                <div className="row">
                                    <div className='col-12'>
                                        {/* 標題外框 */}
                                        <div className={IndexPageMain3Css.main3Title}>
                                            {/* 標題 */}
                                            <h2 className={IndexPageMain3Css.main3TitleSet}>線上估價</h2>
                                            {/* 標題 */}
                                        </div>
                                        {/* 標題外框 */}
                                    </div>
                                </div>
                                <div className="row">
                                    {/* 卡片設定 */}
                                    <div className={IndexPageMain3Css.main3Card}>
                                        {
                                            main3Data?.map((item,index)=>{
                                                return(
                                                    <div key={item.id} className='col-12'>
                                                        {/* 單一卡片設定 */}
                                                        <div className={IndexPageMain3Css.main3CardItem}>
                                                            <div className={`row row-gap-24 row-gap-lg-0 ${index === 1?("flex-row-reverse"):(null)}`}>
                                                                <div className='col-12 col-lg-6'>
                                                                    {/* 圖片外框 */}
                                                                    <div className={`${IndexPageMain3Css.main3ImgBox} ${index === 1?("ms-auto"):(null)}`}>
                                                                        <picture>
                                                                            <source media="(max-width: 991.98px)" srcSet={item.imgSm} />
                                                                            {/* 圖片 */}
                                                                            <Image 
                                                                                className={IndexPageMain3Css.main3ImgSet}
                                                                                src={item.img}
                                                                                alt={item.alt}
                                                                                fill
                                                                                sizes="300px"
                                                                                priority
                                                                            />
                                                                            {/* 圖片 */}
                                                                        </picture>
                                                                    </div>
                                                                    {/* 圖片外框 */}
                                                                </div>
                                                                <div className='col-12 col-lg-6'>
                                                                    <div className='d-flex flex-column justify-content-center align-items-center align-items-lg-start h-100'>
                                                                        {/* 文字外框 */}
                                                                        <div className={IndexPageMain3Css.main3TextBox}>
                                                                            {/* 文字 */}
                                                                            <p className={IndexPageMain3Css.main3TextSet}>{item.text}</p>
                                                                            {/* 文字 */}
                                                                        </div>
                                                                        {/* 文字外框 */}
                                                                        {
                                                                            item.haveBtn?(
                                                                                <>
                                                                                    {/* 連結按鈕 */}
                                                                                    <button className={`${IndexPageMain3Css.mian3CheckBtnSet} btn01Set`}
                                                                                            type='button'
                                                                                            onClick={() => router.push('/')}
                                                                                    >
                                                                                        開始製作
                                                                                    </button>
                                                                                    {/* 連結按鈕 */}
                                                                                </>
                                                                            )
                                                                            :
                                                                            (
                                                                                null
                                                                            )
                                                                        }
                                                                    </div>
                                                                    
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* 單一卡片設定 */}
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                    {/* 卡片設定 */}
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
export default IndexPageMain3;