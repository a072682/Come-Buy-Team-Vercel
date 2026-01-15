import './_QAMain2.scss';
import { AnimatePresence, motion } from 'framer-motion';
import { Fragment } from "react";

function QAMain2({triggerSet,fadeUp}){

    const QAMain2Data = [
        {
            key:"DKType",
            id:"DK01",
            rowTitle:[
                {
                    id:"dk-title01",
                    title:"示意圖"
                },
                {
                    id:"dk-title02",
                    title:"3D列印設計需求"
                },
                {
                    id:"dk-title03",
                    title:"作品大小"
                },
                {
                    id:"dk-title04",
                    title:"整體厚度(mm)"
                },
                {
                    id:"dk-title05",
                    title:"材質"
                },
            ],
            content:[
                {
                    id:"dk-group01",
                    content:[
                        {
                            id:"dk-group01-content01",
                            item:null,
                            img:`/images/QaPage/main2/qP-main2-img1.png`,
                        },
                        {
                            id:"dk-group01-content02",
                            item:[
                                {
                                    id:"1-2-1",
                                    text:"壁厚大小"
                                },
                            ],
                            img:null,
                        },
                        {
                            id:"dk-group01-content03",
                            item:[
                                {
                                    id:"1-3-1",
                                    text:"80以下",
                                },
                                {
                                    id:"1-3-2",
                                    text:"80以上",
                                },
                            ],
                            img:null,
                        },
                        {
                            id:"dk-group01-content04",
                            item:[
                                {
                                    id:"1-4-1",
                                    text:"0.8以下",
                                },
                                {
                                    id:"1-4-2",
                                    text:"1.2以上",
                                },
                            ],
                            img:null,
                        },
                        {
                            id:"dk-group01-content05",
                            item:[
                                {
                                    id:"1-5-1",
                                    text:"--",
                                },
                            ],
                            img:null,
                        },
                    ]
                },
                {
                    id:"dk-group02",
                    content:[
                        {
                            id:"dk-group02-content01",
                            item:null,
                            img:`/images/QaPage/main2/qP-main2-img2.png`,
                        },
                        {
                            id:"dk-group02-content02",
                            item:[
                                {
                                    id:"2-2-1",
                                    text:"支撐設計"
                                },
                            ],
                            img:null,
                        },
                        {
                            id:"dk-group02-content03",
                            item:[
                                {
                                    id:"2-3-1",
                                    text:"--",
                                },
                            ],
                            img:null,
                        },
                        {
                            id:"dk-group02-content04",
                            item:[
                                {
                                    id:"2-4-1",
                                    text:"1.2",
                                },
                                {
                                    id:"2-4-2",
                                    text:"1.5",
                                },
                            ],
                            img:null,
                        },
                        {
                            id:"dk-group02-content05",
                            item:[
                                {
                                    id:"2-5-1",
                                    text:"PLA白",
                                },
                                {
                                    id:"2-5-2",
                                    text:"PLA透明",
                                },
                            ],
                            img:null,
                        },
                    ]
                }
            ]
        },
        {
            key:"mbType",
            id:"MB01",
            rowTitle:[
                {
                    id:"mb-title01",
                    title:"示意圖"
                },
                {
                    id:"mb-title02",
                    title:"3D列印需求"
                },
                {
                    id:"mb-title03",
                    title:"作品大小"
                },
                {
                    id:"mb-title04",
                    title:"整體厚度(mm)"
                },
                {
                    id:"mb-title05",
                    title:"材質"
                },
            ],
            content:[
                {
                    id:"mb-group01-content01",
                    item:null,
                    img:`/images/QaPage/main2/qP-main2-img1.png`,
                },
                {
                    id:"mb-group01-content02",
                    item:[
                        {
                            id:"1-2-1",
                            text:"壁厚大小"
                        },
                    ],
                    img:null,
                },
                {
                    id:"mb-group01-content03",
                    item:[
                        {
                            id:"1-3-1",
                            text:"80以下",
                        },
                        {
                            id:"1-3-2",
                            text:"80以上",
                        },
                    ],
                    img:null,
                },
                {
                    id:"mb-group01-content04",
                    item:[
                        {
                            id:"1-4-1",
                            text:"0.8以下",
                        },
                        {
                            id:"1-4-2",
                            text:"1.2以上",
                        },
                    ],
                    img:null,
                },
                {
                    id:"mb-group01-content05",
                    item:[
                        {
                            id:"1-5-1",
                            text:"--",
                        },
                    ],
                    img:null,
                }, 
            ]
        },
        {
            key:"mbType",
            id:"MB02",
            rowTitle:[
                {
                    id:"mb-title01-2",
                    title:"示意圖"
                },
                {
                    id:"mb-title02-2",
                    title:"3D列印需求"
                },
                {
                    id:"mb-title03-2",
                    title:"作品大小"
                },
                {
                    id:"mb-title04-2",
                    title:"整體厚度(mm)"
                },
                {
                    id:"mb-title05-2",
                    title:"材質"
                },
            ],
            content:[
                {
                    id:"dk-group02-content01",
                    item:null,
                    img:`/images/QaPage/main2/qP-main2-img2.png`,
                },
                {
                    id:"dk-group02-content02",
                    item:[
                        {
                            id:"2-2-1",
                            text:"支撐設計"
                        },
                    ],
                    img:null,
                },
                {
                    id:"dk-group02-content03",
                    item:[
                        {
                            id:"2-3-1",
                            text:"--",
                        },
                    ],
                    img:null,
                },
                {
                    id:"dk-group02-content04",
                    item:[
                        {
                            id:"2-4-1",
                            text:"1.2",
                        },
                        {
                            id:"2-4-2",
                            text:"1.5",
                        },
                    ],
                    img:null,
                },
                {
                    id:"dk-group02-content05",
                    item:[
                        {
                            id:"2-5-1",
                            text:"PLA白",
                        },
                        {
                            id:"2-5-2",
                            text:"PLA透明",
                        },
                    ],
                    img:null,
                },
            ]
        }
    ]

    return(
        <>  
            <AnimatePresence>
                <article className="QAMain2">
                    <div className="QAMain2-bg">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-lg-10 mx-auto">
                                    <motion.div className='QAMain2-content'
                                                variants={triggerSet}
                                                initial="hidden"
                                                whileInView="show"                      
                                                viewport={{ amount: 0, margin: "0% 0px -20% 0px" }}>
                                        <motion.div className="QAMain2-title"
                                                    variants={fadeUp}>
                                            <h2 className="title-set">設計需求介紹</h2>
                                        </motion.div>
                                        {/* 桌面板 */}
                                        <motion.div className="QAMain2-table-box"
                                                    variants={fadeUp}>
                                            <table className="QAMain2-table">
                                                <thead>
                                                    <tr className="table-row-set">
                                                        {
                                                            QAMain2Data?.filter( (item)=> item.key === "DKType")[0].rowTitle.map((item)=>{
                                                                return(
                                                                    <Fragment key={item.id}>
                                                                        <th className="text-set">{item.title}</th>
                                                                    </Fragment>
                                                                )
                                                            })
                                                        }
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        QAMain2Data?.filter( (item)=> item.key === "DKType")[0].content.map((item)=>{
                                                            return(
                                                                <Fragment key={item.id}>
                                                                    <tr className="table-row-content-set">
                                                                        {
                                                                            item.content.map((itemIn)=>{
                                                                                return(
                                                                                    itemIn.img?
                                                                                    (
                                                                                        <Fragment key={itemIn.id}>
                                                                                            <td className="detail-Img-box">
                                                                                                <img
                                                                                                    className="detail-Img-set border border-primary3"
                                                                                                    src={itemIn.img}
                                                                                                    alt="qP-main1-img1"
                                                                                                />
                                                                                            </td>
                                                                                        </Fragment>
                                                                                    )
                                                                                    :
                                                                                    (
                                                                                        <Fragment key={itemIn.id}>
                                                                                            <td className="detail-box" data-label="3D列印設計需求">
                                                                                                {
                                                                                                    itemIn.item.map((text)=>{
                                                                                                        return(
                                                                                                            <Fragment key={text.id}>
                                                                                                                <p className="text-set">{text.text}</p>
                                                                                                            </Fragment>
                                                                                                        )
                                                                                                    })
                                                                                                }
                                                                                            </td>
                                                                                        </Fragment>
                                                                                    )
                                                                                )
                                                                            })
                                                                        }
                                                                    </tr>
                                                                </Fragment>
                                                            )
                                                        })
                                                    }
                                                </tbody>
                                            </table>
                                        </motion.div>
                                        {/* 桌面板 */}

                                        {/* 手機板 */}
                                        {
                                            QAMain2Data?.filter( (item)=> item.key === "mbType").map((item)=>{
                                                return(
                                                    
                                                    <motion.div key={item.id} 
                                                                className="QAMain2-mb-table-box"
                                                                variants={fadeUp}
                                                    >
                                                        <div className="table-mb-set">
                                                            {
                                                                item.rowTitle.map((title)=>{
                                                                    return(
                                                                        <Fragment key={title.id}>
                                                                            <p className='text-mb-set'>{title.title}</p>
                                                                        </Fragment>
                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                        <div className="table-mb-content-set">
                                                            {
                                                                item.content.map((itemIn)=>{
                                                                    return(
                                                                        itemIn.img?
                                                                        (
                                                                            <div key={itemIn.id} className="detail-mb-Img-box">
                                                                                <img className="detail-mb-Img-set" 
                                                                                    src={itemIn.img} 
                                                                                    alt="qP-main1-img1" />
                                                                            </div>
                                                                        )
                                                                        :
                                                                        (
                                                                            <div key={itemIn.id} className='detail-mb-box'>
                                                                                {
                                                                                    itemIn.item.map((text)=>{
                                                                                        return(
                                                                                            <Fragment key={text.id}>
                                                                                                <p className='text-mb-set'>{text.text}</p>
                                                                                            </Fragment>
                                                                                        )
                                                                                    })
                                                                                }
                                                                            </div>
                                                                        )
                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                    </motion.div>
                                                    
                                                )
                                            })
                                        }
                                        {/* 手機板 */}
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
export default QAMain2;



