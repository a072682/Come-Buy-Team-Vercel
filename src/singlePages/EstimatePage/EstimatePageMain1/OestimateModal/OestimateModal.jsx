"use client";

import Link from "next/link";
import './_OestimateModal.scss';


function OestimateModal({onClose}){

    const oestimateModalData = [
        {
            title:"檔案格式",
            answer:"",
        },
        {
            title:"檔案大小",
            answer:"30MB(如檔案過大請去背再上傳)",
        },
        {
            title:"列印須知",
            answer:"30MB(如檔案過大請去背再上傳)",
        },
        {
            title:"複數物件",
            answer:"如有多個物件需要列印,請務必分成不同檔案及分別點選數量",
        },
        {
            title:"檔案破面、無法列印",
            answer:"如有檔案破面等無法列印之情形,將由專人與您聯繫",
        },
    ]

    return(
        <>  
            <div className="modalSet oestimateModal" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
                <div className="modal-dialog modal-dialog-centered modal-xl OestimateModal-dialog">
                    <div className="modal-content border-0 shadow OestimateModal-content">
                        <div className="modal-header OestimateModal-header">
                            <h5 className="modal-title fs-32 text-nautral-white">檔案格式說明</h5>
                            <button onClick={()=>{onClose?.()}} type="button" className="OestimateModalBtnCloseSet p-0 ms-auto border-0" aria-label="Close">
                                <img className="CloseImgSet" src={`/images/MateriaPage/btn-close.png`} alt="Close" />
                            </button>
                        </div>
                        <div className="OestimateModal-body-set p-10 p-lg-50">
                            <div className="row">
                                <div className="col-12 d-flex flex-column gap-24">
                                        {
                                            oestimateModalData?.map((item,index)=>{
                                                return(
                                                    
                                                        <div key={index} className="OestimateModal-item-box d-flex flex-column row-gap-6 row-gap-lg-12">
                                                            <div className="fs-24 fw-700 lh-12 text-primary3 d-flex align-items-center">
                                                                    <span className="material-symbols-outlined text-nautral-white me-12">
                                                                        error 
                                                                    </span>
                                                                    {item.title}
                                                            </div>
                                                            <div className="fs-16 fw-500 lh-15 text-nautral-white">
                                                                {item.answer}
                                                            </div>
                                                            <div className="secondary-btn1-box">
                                                                <button className="secondary-btn1-set">
                                                                    <Link   href="/QAPage" 
                                                                            className="fw-500 lh-15 text-primary4 d-flex align-items-center"
                                                                            onClick={()=>{onClose?.()}}
                                                                    >
                                                                        詳閱常見問題
                                                                    
                                                                        <span className="material-symbols-outlined sec-btn1-img-set">
                                                                            chevron_right
                                                                        </span>
                                                                    </Link>
                                                                </button>
                                                            </div>
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
        </>
    )
}
export default OestimateModal;