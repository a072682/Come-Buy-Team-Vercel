import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MaterialModalCss from "./_MaterialPageModal.module.scss";


function MaterialPageModal({onClose}){

    //#region 讀取中央資料
        //讀取中央資料
        // const materialData = useSelector((state)=>{
        //     return(
        //         state.material.materialData
        //     )
        // })
        // useEffect(()=>{console.log("materialData資料:",materialData);},[materialData]);
    //#endregion

    

    return(
        <>
            <div className={`${MaterialModalCss.modal} ${MaterialModalCss.MaterialPageModalSet}`} style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
                <div className={`${MaterialModalCss.modalDialog}`}>
                    <div className={`${MaterialModalCss.modalContent} border-0 shadow`}>
                        <div className={`${MaterialModalCss.modalHeader} ${MaterialModalCss.MaterialPageModalHeaderBgSet}`}>
                            <h5 className={MaterialModalCss.titleSet}>
                                忽略
                                {/* {materialData?.title} */}
                            </h5>
                            <button onClick={()=>{onClose?.()}} type="button" className={`${MaterialModalCss.materialPageModalBtnClose} p-0 ms-auto border-0`} aria-label="Close">
                                <img className={MaterialModalCss.materialPageModalBtnCloseImgSet} src={`/images/MateriaPage/btn-close.png`} alt="Close" width="48" height="48" />
                            </button>
                        </div>
                        <div className={`${MaterialModalCss.materialPageModalBodySet} p-10 p-lg-58`}>
                            <div className="row">
                                <div className="col-12 mb-16">
                                    {/* 上半部區域 */}
                                    <div className="row">
                                        <div className={MaterialModalCss.bodyContentBox}>
                                            <div className="col-10 col-lg-6">
                                                <div className={MaterialModalCss.materialPageModalImgBox}>
                                                    <img className={MaterialModalCss.materialPageModalImgSet} 
                                                    src=""
                                                    // {materialData?.img} 
                                                    alt="" />
                                                </div>
                                            </div>
                                            <div className="col-10 col-lg-6">
                                                <div className={MaterialModalCss.titleBox}>
                                                    <h3 className={MaterialModalCss.titleSet}>
                                                        先忽略
                                                        {/* {`${materialData?.title}材料簡介`} */}
                                                    </h3>
                                                    <p className={MaterialModalCss.textSet}>
                                                        先忽略
                                                        {/* {materialData?.MaterialIntroduction} */}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* 上半部區域 */}  
                                </div>
                                <div className="col-12">
                                    {/* 下半部區域 */}
                                    <div className="row">
                                        <div className="col-10 col-lg-12 mx-auto">
                                            <div className={MaterialModalCss.textBox}>
                                                <div className={MaterialModalCss.textItem}>
                                                    <h4 className={MaterialModalCss.textSet}>環保特性</h4>
                                                    <p className={MaterialModalCss.textSet}>
                                                        先忽略
                                                        {/* {materialData?.content01} */}
                                                    </p>
                                                </div>
                                                <div className={MaterialModalCss.textItem}>
                                                    <h4 className={MaterialModalCss.textSet}>加工特性</h4>
                                                    <p className={MaterialModalCss.textSet}>
                                                        先忽略
                                                        {/* {materialData?.content02} */}
                                                    </p>
                                                </div>
                                                <div className={MaterialModalCss.textItem}>
                                                    <h4 className={MaterialModalCss.textSet}>使用注意事項</h4>
                                                    <p className={MaterialModalCss.textSet}>
                                                        先忽略
                                                        {/* {materialData?.content03} */}
                                                    </p>
                                                </div>
                                                <div className={MaterialModalCss.textItem}>
                                                    <h4 className={MaterialModalCss.textSet}>應用範圍廣泛</h4>
                                                    <p className={MaterialModalCss.textSet}>
                                                        先忽略
                                                        {/* {materialData?.content04} */}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* 下半部區域 */}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default MaterialPageModal;