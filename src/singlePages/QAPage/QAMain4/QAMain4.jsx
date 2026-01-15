import { Accordion } from 'react-bootstrap';
import { AnimatePresence, motion } from 'framer-motion';
import './_QAMain4.scss';


function QAMain4({triggerSet,fadeUp}){

    const QAMain4Data = [
        {
            id:"QAMain401",
            key:"1",
            header:"如何上傳我的3D模型圖檔?",
            content:"將圖片拖曳至圖片上傳區",
        },
        {
            id:"QAMain402",
            key:"2",
            header:"支持哪些3D文件格式?",
            content:"支持STL、OBJ、STEP等常見3D模型文件格式",
        },
        {
            id:"QAMain403",
            key:"3",
            header:"如何計算3D列印的費用?",
            content:"費用根據材料、模型尺寸和複雜度由專人計算",
        },
        {
            id:"QAMain404",
            key:"4",
            header:"列印需要多長時間?",
            content:"一般列印時間為3-7個工作天，視複雜度而定",
        },
        {
            id:"QAMain405",
            key:"5",
            header:"有哪些可用的材料選擇?",
            content:"我們提供PLA聚乳酸、光固化樹脂等市場主力的3D列印材料",
        },
        {
            id:"QAMain406",
            key:"6",
            header:"如何查看列印進度?",
            content:"登錄會員帳戶後，可以在訂單詳情中查看列印進度",
        },
        {
            id:"QAMain407",
            key:"7",
            header:"是否提供設計優化建議?",
            content:"是的,我們提供專業的設計優化服務，以確保最佳列印效果",
        },
        {
            id:"QAMain408",
            key:"8",
            header:"可以取消或修改訂單嗎?",
            content:"需要視各別情況而定，如想知道詳細資訊歡迎與我們聯繫。",
        },
    ]

    return(
        <>  
            <AnimatePresence>
                <article className="QAMain4">
                    <div className="QAMain4-bg">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-lg-10 mx-auto">
                                    <motion.div className='QAMain4-content'
                                                variants={triggerSet}
                                                initial="hidden"
                                                whileInView="show"                      
                                                viewport={{ amount: 0, margin: "0% 0px -20% 0px" }}
                                    >
                                        <motion.div className="QAMain4-title"
                                                    variants={fadeUp}>
                                            <h2 className="title-set">常見問題</h2>
                                        </motion.div>
                                        <motion.div className="QAMain4-content-box"
                                                    variants={fadeUp}>
                                            <Accordion alwaysOpen defaultActiveKey="1" className="Accordion-set" >
                                                {
                                                    QAMain4Data?.map((item)=>{
                                                        return(
                                                            
                                                            <Accordion.Item key={item.id} className="accordionItemSet" eventKey={item.key} >
                                                                <Accordion.Header >{item.header}</Accordion.Header>
                                                                <Accordion.Body className='accordion-body-set'>
                                                                    {item.content}
                                                                </Accordion.Body>
                                                            </Accordion.Item>
                                                            
                                                        )
                                                    })
                                                }
                                            </Accordion>
                                        </motion.div>
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
export default QAMain4;





