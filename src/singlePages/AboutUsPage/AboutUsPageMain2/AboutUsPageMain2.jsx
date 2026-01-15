"use client";


import './_AboutUsPageMain2.scss';
import { AnimatePresence, motion } from 'framer-motion';

function AboutUsPageMain2({triggerSet,fadeUp}){

    const AboutUsImgMain2Data = [
        {
            id: "AboutUsImgMain2Data01",
            items: [
            {
                id: "ImgData01",
                img: `/images/AboutUs/main2/aboutUs-main2-img01.png`,
                imgSm: `/images/AboutUs/main2/aboutUs-main2-sm-img01.png`,
            },
            {
                id: "ImgData02",
                img: `/images/AboutUs/main2/aboutUs-main2-img02.png`,
                imgSm: `/images/AboutUs/main2/aboutUs-main2-sm-img02.png`,
            },
            ],
        },
        {
            id: "AboutUsImgMain2Data02",
            items: [
            {
                id: "ImgData03",
                img: `/images/AboutUs/main2/aboutUs-main2-img03.png`,
                imgSm: `/images/AboutUs/main2/aboutUs-main2-sm-img03.png`,
            },
            {
                id: "ImgData04",
                img: `/images/AboutUs/main2/aboutUs-main2-img04.png`,
                imgSm: `/images/AboutUs/main2/aboutUs-main2-sm-img04.png`,
            },
            ],
        },
        {
            id: "AboutUsImgMain2Data03",
            items: [
            {
                id: "ImgData05",
                img: `/images/AboutUs/main2/aboutUs-main2-img05.png`,
                imgSm: `/images/AboutUs/main2/aboutUs-main2-sm-img05.png`,
            },
            {
                id: "ImgData06",
                img: `/images/AboutUs/main2/aboutUs-main2-img06.png`, 
                imgSm: `/images/AboutUs/main2/aboutUs-main2-sm-img06.png`,
            },
            ],
        },
    ];


    return(
        <>
            <AnimatePresence>
                <article className="AboutUsMain2">
                    <div className="AboutUsMain2-bg">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <motion.div className='AboutUsMain2-content'
                                                variants={triggerSet}
                                                initial="hidden"
                                                whileInView="show"                      
                                                viewport={{ amount: 0, margin: "0% 0px -20% 0px" }}
                                    >
                                        <div className="row row-gap-48 row-gap-lg-0 flex-lg-row-reverse">
                                            <div className="col-12 col-lg-7">
                                                <div className='AboutUsMain2-Introduce-box'>
                                                    <motion.div className="AboutUsMain2-title"
                                                                variants={fadeUp}>
                                                        <h2 className="title-set">公司介紹</h2>
                                                    </motion.div>
                                                    <motion.div className="AboutUsMain2-text-box"
                                                                variants={fadeUp}>
                                                        <p className="text-set d-block d-lg-none">3D列印服務：</p>
                                                        <p className="text-set d-block d-lg-none mb-32">各類材料的3D列印,包括PLA ABS 樹脂等。適用於原型製作、小批量生產及個性化定制。</p>
                                                        <p className="text-set d-none d-lg-block">3D列印服務：各類材料的3D列印,包括PLA ABS 樹脂等。適用於原型製作、小批量生產及個性化定制。</p>
                                                        <p className="text-set d-block d-lg-none">設計服務：</p>
                                                        <p className="text-set d-block d-lg-none">我們的專業設計團隊可根據客戶需求，提供3D建模和設計服務，幫助客戶實現創意構思。</p>
                                                        <p className="text-set d-none d-lg-block">設計服務：我們的專業設計團隊可根據客戶需求，提供3D建模和設計服務，幫助客戶實現創意構思。</p>
                                                    </motion.div>
                                                </div>
                                            </div>
                                            <div className="col-12 col-lg-5">
                                                <motion.div className="AboutUsMain2-left-box-set"
                                                            variants={fadeUp}>
                                                    <div className="row">
                                                        {
                                                            AboutUsImgMain2Data?.map((item,index)=>{
                                                                return(
                                                                    
                                                                        <div key={item.id} className='col-4'>
                                                                            <div className={`AboutUsMain2-img-box-set ${index === 1?("mb-50"):("mt-50")}`}>
                                                                                {
                                                                                    item.items?.map((itemIn)=>{
                                                                                        return(
                                                                                            <picture key={itemIn.id}>
                                                                                                <source srcSet={itemIn.img} 
                                                                                                        media="(min-width:576px)" />
                                                                                                <img    className="AboutUsMain2-img-set" 
                                                                                                        src={itemIn.imgSm}  alt="aboutUs-main2-img01" />
                                                                                            </picture> 
                                                                                        )
                                                                                    })
                                                                                }
                                                                            </div>
                                                                        </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
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
export default AboutUsPageMain2;

