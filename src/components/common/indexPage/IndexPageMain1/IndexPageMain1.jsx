"use client";


// import { Link } from 'react-router-dom';
import Link from 'next/link';
import IndexPageMain1Css from "./_IndexPageMain1.module.scss";
import Image from 'next/image';
import { useRouter } from 'next/navigation';

function IndexPageMain1(){

    const router = useRouter();

    return(
        <>
            {/* 元件最外圍 */}
            <div className={IndexPageMain1Css.main1}>
                {/* 元件背景 */}
                <div className={IndexPageMain1Css.main1Bg}>
                    {/* 角落貼圖box */}
                    <div className={IndexPageMain1Css.cornerImgBox}>
                        {/* 角落貼圖本體 */}
                        <Image  className={IndexPageMain1Css.mainCornerImg} 
                                src={`/images/IndexPage/main-sm-corner.png`} 
                                alt="main-sm-corner" 
                                fill
                                sizes="100px"
                                priority
                        />
                        {/* 角落貼圖本體 */}
                    </div>
                    {/* 角落貼圖box */}
                
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-xl-6"> {/*外框 控制欄數*/}
                                {/* 左邊區塊外框 */}
                                <div className={IndexPageMain1Css.main1LeftContent}>
                                    {/* 標題 */}
                                    <h1 className={IndexPageMain1Css.main1Title}>
                                        <span className={IndexPageMain1Css.main1TitleTextSet}>從想像到實物</span>
                                        <span className={IndexPageMain1Css.main1TitleTextSet}>只需 Come & Buy</span>
                                    </h1>
                                    {/* 標題 */}
                                    
                                    {/* 連結按鈕 */}
                                    <button className={`${IndexPageMain1Css.main1Btn1Set} btn01Set`}
                                            type='button'
                                            onClick={() => router.push('/')}
                                    >
                                        開始製作
                                    </button>
                                    {/* 連結按鈕 */}

                                    {/* 圖片外框 */}
                                    <div className={IndexPageMain1Css.main1LeftImgBox}>
                                        <Image  className={IndexPageMain1Css.main1LeftImg} 
                                                src={"/images/IndexPage/main-frame.png"} 
                                                alt="main-frame" 
                                                fill
                                                sizes="500px"
                                                priority
                                        />
                                    </div>
                                    {/* 圖片外框 */}
                                </div>
                                 {/* 左邊區塊外框 */}
                            </div>
                            <div className="col-xl-6 d-none d-xl-block">
                                {/* 右邊區塊外框 */}
                                <div className={IndexPageMain1Css.main1RightContent}>
                                    <div className={IndexPageMain1Css.main1RightImgBox}>
                                        <Image  className={IndexPageMain1Css.main1RightImg} 
                                                src={"/images/IndexPage/main-frame.png"} 
                                                alt="main-frame"
                                                fill
                                                sizes="500px"
                                                priority 
                                        />
                                    </div>
                                </div>
                                {/* 右邊區塊外框 */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* 元件背景 */}
            </div>
            {/* 元件最外圍 */}
        </>
    )
}
export default IndexPageMain1;