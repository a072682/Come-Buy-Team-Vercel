
"use client";

import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import './_IndexPageMain3.scss';


function IndexPageMain3({triggerSet,fadeUp}){

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
            <AnimatePresence>
                <article className="main3">
                    <div className="container">        {/*外框 要增加y軸pd在這邊加*/}
                        <div className="row">                         {/*外框 不動*/}
                            <div className="col-12"> {/*外框 控制欄數 sm用*/}
                                <div className="main3-content">           {/*內層外框*/}
                                    <div className="row">
                                        <div className='col-12'>
                                            <motion.div className="main3-title"
                                                        initial={{ opacity: 0, y: 40 }}
                                                        whileInView={{ opacity: 1, y: 0 }}
                                                        transition={{ duration: 0.6, ease: "easeOut" }}
                                                        viewport={{ amount: 0, margin: "0% 0px 0% 0px" }} 
                                            >
                                                <h2 className=" main3-title-set">線上估價</h2>
                                            </motion.div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="main3-card">
                                            {
                                                main3Data?.map((item,index)=>{
                                                    return(
                                                        <div key={item.id} className='col-12'>
                                                            <motion.div className="main3-card-item"
                                                                        variants={triggerSet}
                                                                        initial="hidden"
                                                                        whileInView="show"                      
                                                                        viewport={{ amount: 0, margin: "0% 0px 0% 0px" }}>
                                                                <div className={`row row-gap-24 row-gap-lg-0 ${index === 1?("flex-row-reverse"):(null)}`}>
                                                                    <div className='col-12 col-lg-6'>
                                                                        <motion.div className={`main3-img-box ${index === 1?("ms-auto"):(null)}`}
                                                                                    variants={fadeUp}>
                                                                            <picture>
                                                                                <source media="(max-width: 991.98px)" srcSet={item.imgSm} />
                                                                                <img
                                                                                    className="main3-img-set"
                                                                                    src={item.img}
                                                                                    alt={item.alt}
                                                                                />
                                                                            </picture>
                                                                        </motion.div>
                                                                    </div>
                                                                    <div className='col-12 col-lg-6'>
                                                                        <motion.div className='d-flex flex-column justify-content-center align-items-center align-items-lg-start h-100'
                                                                                    variants={fadeUp}>
                                                                            <div className="main3-text-box">
                                                                                <p className="main3-text-set">{item.text}</p>
                                                                            </div>
                                                                            {
                                                                                item.haveBtn?(
                                                                                    <div className="main3-checkBtn-box">
                                                                                        <Link className="mian3-checkBtn-Set mian-btn1-set" href="/EstimatePage">
                                                                                            開始製作
                                                                                        </Link>
                                                                                    </div>
                                                                                )
                                                                                :
                                                                                (
                                                                                    null
                                                                                )
                                                                            }
                                                                        </motion.div>
                                                                    </div>
                                                                </div>
                                                            </motion.div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </AnimatePresence>
        </>
    )
}
export default IndexPageMain3;