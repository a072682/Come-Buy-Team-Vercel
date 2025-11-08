

import { useEffect, useState } from 'react';
import EstimateMain3Css from "./_EstimatePageMain3.module.scss";


function EstimatePageMain3(){

    const main3GroupData = [
        {
            id:"supportMaterial",
            labelTitle:"支撐材",
            unit:"mm",
        },
        {
            id:"wallThickness",
            labelTitle:"壁厚",
            unit:"%",
        },
        {
            id:"supportDensity",
            labelTitle:"支撐材密度",
            unit:"mm",
        },
    ]

    return(
        <>
            <div className={EstimateMain3Css.EstimatePageMain3}>
                <div className={EstimateMain3Css.EstimatePageMain3Bg}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className={EstimateMain3Css.EstimatePageMain3Content}>
                                    <div className={EstimateMain3Css.EstimatePageMain3Title}>
                                        <h3 className={EstimateMain3Css.titleSet}>規格設置</h3>
                                    </div>

                                    <div className={EstimateMain3Css.EstimatePageMain3NoteBox}>
                                        <span className={`${EstimateMain3Css.noteIconSet} material-symbols-outlined`}>
                                            error
                                        </span>
                                        <div className={EstimateMain3Css.noteTextBox}>
                                            <p className={EstimateMain3Css.textSet}>
                                                若無法確定規格，可點擊預設配置<span className='d-none d-lg-inline'>，</span><span className='d-block d-lg-none'></span>系統會自動帶出適合的規格設置。
                                            </p>
                                        </div>
                                    </div>
                                    <form className={EstimateMain3Css.EstimatePageMain3FormBox}>
                                        <div className={EstimateMain3Css.EstimatePageMain3FormGroupBox}>
                                        {
                                            main3GroupData?.map((item,index)=>{
                                                return(
                                                    
                                                    <div key={item.id} className={EstimateMain3Css.EstimatePageMain3GroupBox}>
                                                        <label htmlFor={`EstimatePageMain3-input${index}`} className={EstimateMain3Css.labelSet}>
                                                            {item.labelTitle}
                                                        </label>

                                                        <div className={EstimateMain3Css.groupBodyBox}>
                                                            <input
                                                                className={EstimateMain3Css.inputSet}
                                                                type="text" 
                                                                id={`EstimatePageMain3-input${index}`} 
                                                                placeholder="1mm" 
                                                                value="1mm"
                                                            />
                                                            {/* 上下按鈕 */}
                                                            <div className={EstimateMain3Css.groupBtnBox}>
                                                                <button onClick={()=>{handleIncrement(item.id)}}
                                                                        className={EstimateMain3Css.addBtnSet} type="button">
                                                                    <picture>
                                                                        <source srcSet={`/images/EstimatePage/main3/EstimatePage-main3-arrowUP.png`}   
                                                                                media="(min-width:1200px)" />
                                                                        <img className={EstimateMain3Css.addBtnImgSet} 
                                                                            src={`/images/EstimatePage/main3/EstimatePage-main3-sm-arrowUP.png`} alt="home-section2-1" />
                                                                    </picture>
                                                                </button>
                                                                <button onClick={()=>{handleDecrement(item.id)}} 
                                                                        className={EstimateMain3Css.subBtnSet} type="button">
                                                                    <picture>
                                                                        <source srcSet={`/images/EstimatePage/main3/EstimatePage-main3-arrowDOWN.png`}
                                                                                media="(min-width:1200px)" />
                                                                        <img className={EstimateMain3Css.subBtnImgSet} 
                                                                            src={`/images/EstimatePage/main3/EstimatePage-main3-sm-arrowDOWN.png`}
                                                                            alt="home-section2-1" />
                                                                    </picture>
                                                                </button>
                                                            </div>
                                                            {/* 上下按鈕 */}
                                                        </div>
                                                    </div>
                                                    
                                                )
                                            })
                                        }
                                        </div>

                                        <div className={EstimateMain3Css.EstimatePageMain3GroupCheckBtnBox}>
                                            <button onClick={()=>{handleMaterialDefault()}} className={`${EstimateMain3Css.groupCheckBtnSet} btn01Set`} type="button">
                                                預設配置
                                            </button>
                                        </div>
                                        
                                    </form>
                                    <div className={EstimateMain3Css.EstimatePageMain3NextBtn}>
                                        <button type='button' className='pagination-btn01'>
                                            <img className="pagination-img01-set" 
                                                src={`/images/EstimatePage/main3/EstimatePage-main3-Vector15.png`} 
                                                alt="Vector 15" 
                                            />
                                        </button>
                                        <div className={EstimateMain3Css.EstimatePageMain3NextBtnBox}>
                                            <p className={EstimateMain3Css.nextBtnTipTextSet}><span className='d-none d-sm-inline'>前往下一頁</span>選擇日期</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default EstimatePageMain3;



