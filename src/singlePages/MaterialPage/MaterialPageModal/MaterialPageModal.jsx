"use client";

import { useEffect } from "react";
import './_MaterialPageModal.scss';
import { useSelector } from "react-redux";



function MaterialPageModal({onClose}){

    //#region 讀取中央資料
        //讀取中央資料
        const materialData = useSelector((state)=>{
            return(
                state.material.materialData
            )
        })
        useEffect(()=>{
            //console.log("materialData資料:",materialData);
        },[materialData]);
    //#endregion

    

    return(
        <>
            <div className="modalSet MaterialPageModalSet" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
                <div className="modal-dialog modal-dialog-centered modal-xl">
                    <div className="modal-content border-0 shadow">
                        <div className="modal-header MaterialPageModalHeaderBgSet">
                            <h5 className="title-set">{materialData?.title}</h5>
                            <button onClick={()=>{onClose?.()}} type="button" className="materialPageModalBtnClose p-0 ms-auto border-0" aria-label="Close">
                                <img className="materialPageModalBtnCloseImgSet" src={`/images/MateriaPage/btn-close.png`} alt="Close" width="48" height="48" />
                            </button>
                        </div>
                        <div className="materialPageModal-body-set p-10 p-lg-58">
                            <div className="row">
                                <div className="col-12 mb-16">
                                    {/* 上半部區域 */}
                                    <div className="row">
                                        <div className="bodyContent-box">
                                            <div className="col-10 col-lg-6">
                                                <div className="materialPageModal-Img-box">
                                                    <img className="materialPageModal-Img-set" 
                                                    src={materialData?.img} alt="" />
                                                </div>
                                            </div>
                                            <div className="col-10 col-lg-6">
                                                <div className="title-box">
                                                    <h3 className="title-set">{`${materialData?.title}材料簡介`}</h3>
                                                    <p className="title-set">{materialData?.MaterialIntroduction}</p>
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
                                            <div className="text-box">
                                                <div className="text-item">
                                                    <h4 className="text-set">環保特性</h4>
                                                    <p className="text-set">{materialData?.content01}</p>
                                                </div>
                                                <div className="text-item">
                                                    <h4 className="text-set">加工特性</h4>
                                                    <p className="text-set">{materialData?.content02}</p>
                                                </div>
                                                <div className="text-item">
                                                    <h4 className="text-set">使用注意事項</h4>
                                                    <p className="text-set">{materialData?.content03}</p>
                                                </div>
                                                <div className="text-item">
                                                    <h4 className="text-set">應用範圍廣泛</h4>
                                                    <p className="text-set">{materialData?.content04}</p>
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