"use client";

import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import './_IndexPageMain2.scss';


function IndexPageMain2({triggerSet,fadeUp}){

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
            <AnimatePresence>
                <article className="main2">
                    <h2 className="visually-hidden">
                        Come & BUY 3D列印 ｜技術特點
                    </h2>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <motion.div className='main2-content'
                                            variants={triggerSet}
                                            initial="hidden"
                                            whileInView="show"                      
                                            viewport={{ amount: 0, margin: "0% 0px -40% 0px" }}
                                >
                                    <div className='w-100 row row-gap-64 row-gap-lg-96'>
                                        {
                                            main2Data?.map((item)=>{
                                                return(
                                                    <motion.div key={item.id} 
                                                                className='col-12 col-sm-8 mx-sm-auto col-lg-4'
                                                                variants={fadeUp}
                                                    >
                                                        <div className="main2-card-set">
                                                            <div className="main2-card-img-box-set">
                                                                <img src={item.img} alt={item.alt} />
                                                            </div>
                                                            <div className="main2-box d-flex justify-content-center align-items-center">
                                                                <p className="main2-box-text d-flex justify-content-center align-items-center">{item.text}</p>
                                                            </div>
                                                        </div>
                                                    </motion.div> 
                                                )
                                            })
                                        }
                                        <div className='col-12'>
                                            <motion.div className="mian2-checkBtn-Box-Set"
                                                        variants={fadeUp}>
                                                <Link className="mian2-checkBtn-Set mian-btn1-set" href="/EstimatePage">
                                                    開始製作
                                                </Link>
                                            </motion.div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </article>
            </AnimatePresence>
        </>
    )
}
export default IndexPageMain2;