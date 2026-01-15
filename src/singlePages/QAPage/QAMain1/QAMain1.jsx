
import './_QAMain1.scss';
import { AnimatePresence, motion } from 'framer-motion';
import { Fragment } from "react";

function QAMain1({triggerSet,fadeUp}){

    const QAMain1Data = [
        {
            id:"QAMain1Data01",
            title:"繪圖建模",
            text:"使用3D繪圖軟體(如SketchUp、Blender)設計模型,確定形狀、尺寸和細節。完成後,將文件儲存為STL格式,以便後續處理。注意確認模型尺寸是否在列印機範圍內,以避免列印失敗。"
        },
        {
            id:"QAMain1Data02",
            title:"切片處理",
            text:"使用切片軟體(如Cura、Slic3r)將3D模型分解成一層層的2D圖像,並設置列印參數,如速度、溫度和填充密度。生成的G-Code檔案將用於控制列印機的每一步操作。"
        },
        {
            id:"QAMain1Data03",
            title:"列印準備",
            text:"在開始列印前,校正3D列印機,包括調整X、Y、Z軸和平台水平度。選擇適合的材料,如塑料、樹脂,並決定是否需要添加支撐結構,以確保列印穩定性。"
        },
        {
            id:"QAMain1Data04",
            title:"正式列印",
            text:"啟動列印機進行3D列印,並定期檢查進度。確保材料供應充足,並在過程中處理可能出現的問題,如材料斷裂或列印錯誤。列印時間取決於模型的複雜度和大小。"
        },
        {
            id:"QAMain1Data05",
            title:"後製加工",
            text:"完成列印後,移除支撐結構,使用工具打磨和拋光表面,以提高產品的外觀和品質。若有需求,可進行上色或塗層處理。最後,將多個部件組裝成完整的成品。"
        },
    ]

    return(
        <>  
            <AnimatePresence>
                <article className="QAMain1">
                    <div className="QAMain1-bg">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-lg-10 mx-auto">
                                    <motion.div className='QAMain1-content'
                                                variants={triggerSet}
                                                initial="hidden"
                                                whileInView="show"                      
                                                viewport={{ amount: 0, margin: "0% 0px -20% 0px" }}
                                    >
                                        <motion.div className="QAMain1-title"
                                                    variants={fadeUp}>
                                            <h2 className="title-set">客製化流程</h2>
                                        </motion.div>
                                        <div className='QAMain1-contetn-box'>
                                            <motion.div className="sec-title-box mb-40"
                                                        variants={fadeUp}>
                                                <h3 className="title-set">3D列印步驟</h3>
                                            </motion.div>
                                            <motion.div className="text-box"
                                                        variants={fadeUp}>
                                                <ol>
                                                    {
                                                        QAMain1Data?.map((item)=>{
                                                            return(
                                                                <Fragment key={item.id}>
                                                                    <li>{item.title}</li>
                                                                    <p className="text-set">{item.text}</p>
                                                                </Fragment>
                                                            )
                                                        })
                                                    }
                                                </ol>
                                            </motion.div>  
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
export default QAMain1;


