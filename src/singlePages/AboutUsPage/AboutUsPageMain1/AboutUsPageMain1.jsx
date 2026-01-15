"use client";

import './_AboutUsPageMain1.scss';
import { AnimatePresence, motion } from 'framer-motion';


function AboutUsPageMain1({triggerSet,fadeUp}){
    return(
        <>
            <AnimatePresence>
                <article className="AboutUsMain1">
                    <div className="AboutUsMain1-bg">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <motion.div className='AboutUsMain1-content'
                                                variants={triggerSet}
                                                initial="hidden"
                                                whileInView="show"                      
                                                viewport={{ amount: 0, margin: "0% 0px -20% 0px" }}
                                    >
                                        <div className="row row-gap-24 row-gap-lg-0">
                                            <div className="col-12 col-lg-6">
                                                <motion.div className='AboutUsMain1-Introduce-box'
                                                            variants={fadeUp}>
                                                    <div className="AboutUsMain1-title">
                                                        <h2 className="title-set ">關於我們</h2>
                                                    </div>
                                                    <div className="AboutUsMain1-text-box">
                                                        <p className="text-set">歡迎來到Come & Buy！</p>
                                                        <p className="text-set">自2018年成立以來，我們專注於3D列印技術，致力於為全球客戶提供高品質、精確且客制化的列印解決方案。</p>
                                                        <p className="text-set">我們的專業團隊擁有豐富的技術經驗，秉持著創新與卓越的精神，不斷突破技術極限，為每一位客戶實現創意與想像。</p>
                                                    </div>
                                                </motion.div>
                                            </div>
                                            <div className="col-12 col-lg-6">
                                                
                                                <motion.div className="AboutUsMain1-img-box-set"
                                                            variants={fadeUp}>
                                                    <picture>
                                                        <source srcSet={`/images/AboutUs/main1/aboutUs-main1-img01.png`} 
                                                                media="(min-width:992px)" />
                                                        <img    className="AboutUsMain1-img-set"
                                                                src={`/images/AboutUs/main1/aboutUs-main1-sm-img01.png`} 
                                                                alt="images/aboutUs-main1-img01" />
                                                    </picture>  
                                                </motion.div>
                                                
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </AnimatePresence>
        </>
    )
}
export default AboutUsPageMain1;