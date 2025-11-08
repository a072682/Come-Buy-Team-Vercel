

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MODALS, open } from '@/store/slice/modalSlice';
import EstimateMain1Css from "./_EstimatePageMain1.module.scss";


function EstimatePageMain1(){

    //#region 讀取中央函式前置宣告
        //讀取中央函式前置宣告
        const dispatch = useDispatch();
    //#endregion

    return(
        <>
            {/* 元件最外圍 */}
            <div className={EstimateMain1Css.EstimatePageMain1}>
                {/* 元件背景 */}
                <div className={EstimateMain1Css.EstimatePageMain1Bg}>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                {/* 元件本體 */}
                                <div className={EstimateMain1Css.EstimatePageMain1Content}>
                                    {/* 標題外框 */}
                                    <div className={EstimateMain1Css.EstimatePageMain1Title}>
                                        {/* 標題 */}
                                        <h2 className={EstimateMain1Css.titleSet}>線上估價</h2>
                                    </div>
                                    {/* 標題外框 */}

                                    {/* 圖片上傳欄位外框 */}
                                    <div className={EstimateMain1Css.EstimatePageMain1ImgUpLordBox}>
                                        {/* 左邊外框 */}
                                        <div className={EstimateMain1Css.leftBox}>
                                            {/* 左邊標題外框 */}
                                            <div className={EstimateMain1Css.textTitleBox}>
                                                {/* 左邊標題 */}
                                                <h3 className={EstimateMain1Css.textTitleSet}>圖檔上傳</h3>
                                                {/* 左邊標題 */}
                                            </div>
                                            {/* 左邊標題外框 */}

                                            {/* 左邊文字外框 */}
                                            <div className={EstimateMain1Css.textBox}>
                                                {/* 左邊文字設定 */}
                                                <p className={EstimateMain1Css.textSet}>請上傳檔案或將檔案拖曳至此</p>
                                                <p className={EstimateMain1Css.textSet}>最多上傳10個檔案</p>
                                                <p className={EstimateMain1Css.textSet}>格式：.stl | 大小: &lt; 30MB</p>
                                                {/*格式：.stl | 大小： < 30MB*/}
                                                {/* 左邊文字設定 */}
                                            </div>
                                            {/* 左邊文字外框 */}
                                        </div>
                                        {/* 左邊外框 */}

                                        {/* 中間外框 */}
                                        <div className={EstimateMain1Css.middleBox}> 

                                            {/*lg以上內容*/}
                                            {/* LGUP按鈕最外框 */}
                                            <button className={`${EstimateMain1Css.upLordBtnSet} d-none d-lg-block`}>
                                                {/* 圖片外框 */}
                                                <div className={EstimateMain1Css.upLordImgBox}>
                                                    
                                                        {/* 圖片 */}
                                                        <img    className={EstimateMain1Css.upLordImgSet} 
                                                                src={"/images/EstimatePage/main1/EstimatePage-main1-upLord-btn.png"} 
                                                                alt="upLord-img"
                                                        />
                                                        {/* 圖片 */}

                                                        {/* 動態圖片外框 */}
                                                        <div className={`${EstimateMain1Css.upLordTipImgBox} ${EstimateMain1Css.addAnimation}`}>
                                                            {/* 動態圖片 */}
                                                            <img className={EstimateMain1Css.upLordTipImgSet} 
                                                                src={"/images/EstimatePage/tipImg.png"} 
                                                                alt="upLordTipImg"
                                                            />
                                                            {/* 動態圖片 */}
                                                            {/* 文字設定 */}
                                                            <p className={EstimateMain1Css.upLordTipTextSet}>請點加號<br />上傳圖片<br />或修改圖片</p>
                                                            {/* 文字設定 */}
                                                        </div>
                                                        {/* 動態圖片外框 */}

                                                </div>
                                                {/* 圖片外框 */}
                                                
                                                
                                            </button>
                                            {/* <input type="file" id="fileInput" accept="image/*" className="d-none" onChange={(event)=>{orderImgSelect(event)}}/> */}
                                            {/* LGUP按鈕最外框 */}
                                            {/*lg以上內容*/}

                                            {/*lg以下內容*/}
                                            {/* LGDOWN按鈕最外框 */}
                                            <button 
                                                className={`${EstimateMain1Css.noteBtnMbSet} d-blcok d-lg-none`} 
                                                data-bs-toggle="modal" 
                                                data-bs-target="#oEstimate-main1-Modal"
                                                onClick={()=>{dispatch(open(MODALS.OestimateModal))}}
                                            >
                                                <span className="material-symbols-outlined">
                                                    error 
                                                </span>
                                                檔案格式說明
                                            </button>
                                            {/* LGDOWN按鈕最外框 */}
                                            {/*lg以下內容*/}

                                        </div>
                                        {/* 中間外框 */}

                                        {/* 下邊外框 */}
                                        <div className={EstimateMain1Css.bottomBox}>

                                            {/*lg以上內容*/}
                                            {/* LGUP按鈕最外框 */}
                                            <button 
                                                className={`${EstimateMain1Css.noteBtnSet} d-none d-lg-flex`} 
                                                data-bs-toggle="modal" 
                                                data-bs-target="#oEstimate-main1-Modal"
                                                onClick={()=>{dispatch(open(MODALS.OestimateModal))}}
                                            >
                                                <span className="material-symbols-outlined">
                                                    error 
                                                </span>
                                                檔案格式說明
                                            </button>
                                            {/* LGUP按鈕最外框 */}
                                            {/*lg以上內容*/}

                                            {/*lg以下內容*/}
                                            {/* LGDOWN按鈕最外框 */}
                                            <button className={`${EstimateMain1Css.upLordBtnMbSet} d-blcok d-lg-none`} >
                                                {/* 圖片外框 */}
                                                <div className={EstimateMain1Css.upLordImgBox}>
                                                    {/* 圖片 */}
                                                    <img className={EstimateMain1Css.upLordImgSet} 
                                                        src={"/images/EstimatePage/main1/EstimatePage-main1-upLord-btn-sm.png"} 
                                                        alt="upLord-img" 
                                                    />
                                                    {/* 圖片 */}
                                                </div>
                                                {/* 圖片外框 */}
                                            </button>
                                            {/* LGDOWN按鈕最外框 */}
                                            <input type="file" id="fileInput" accept="image/*" className="d-none"/>
                                            {/* 文字外框 */}
                                            <div className={`${EstimateMain1Css.upLordTipTextSmBox} d-blcok d-lg-none`}>
                                                {/* 文字 */}
                                                <p className={EstimateMain1Css.upLordTipTextSet}>請點加號<br />上傳圖片或修改圖片</p>
                                                {/* 文字 */}
                                            </div>
                                            {/* 文字外框 */}
                                            
                                            {/*lg以下內容*/}
                                        </div>
                                        {/* 下邊外框 */}
                                            
                                    </div>
                                    {/* 圖片上傳欄位外框 */}

                                    {/* 下半部區塊外框 */}
                                    <div className={EstimateMain1Css.EstimatePageMain1BelowBox}>
                                        {/* 預覽圖最外框 */}
                                        <div className={EstimateMain1Css.ImagePreviewBox}>
                                            {/* 標題外框 */}
                                            <div className={EstimateMain1Css.ImagePreviewTitle}>
                                                {/* 標題 */}
                                                <h3 className={EstimateMain1Css.titleSet}>圖檔上傳預覽</h3>
                                                {/* 標題 */}
                                            </div> 
                                            {/* 標題外框 */}

                                            {/* 預覽圖外框 */}
                                            <div className={EstimateMain1Css.ImagePreviewSet}>
                                                {/* 圖片外框 */}
                                                <div className={EstimateMain1Css.ImagePreviewImgBox}>
                                                    {/* 圖片 */}
                                                    <img className={EstimateMain1Css.ImagePreviewImgSet} 
                                                        src={"/images/EstimatePage/main1/EstimatePage-main1-Image.png"} 
                                                        alt="index-main1-Image" 
                                                    />
                                                    {/* 圖片 */}
                                                </div>
                                                {/* 圖片外框 */}
                                                {/* 文字外框 */}
                                                <div className={EstimateMain1Css.ImagePreviewTextBox}>
                                                    {/* 文字 */}
                                                    <p className={EstimateMain1Css.textSet}>
                                                        目前無檔案<span className="d-none">，</span><span className="d-block"></span>請上傳圖檔進行估價確認
                                                    </p>
                                                    {/* 文字 */}
                                                </div>
                                                {/* 文字外框 */}
                                            </div>
                                            {/* 預覽圖外框 */}
                                            

                                            {/* {
                                                previewUrl?
                                                (
                                                    <div className="ImagePreview-set imgActive">
                                                        <img className="ImagePreview-img-set" 
                                                            src={previewUrl} 
                                                            alt="index-main1-Image" 
                                                        />
                                                    </div>
                                                )
                                                :
                                                (
                                                    <>
                                                        <div className="ImagePreview-set">
                                                            <div className="ImagePreview-img-box">
                                                                <img className="ImagePreview-img-set" 
                                                                    src={`${import.meta.env.BASE_URL}assets/images/EstimatePage/main1/EstimatePage-main1-Image.png`} 
                                                                    alt="index-main1-Image" 
                                                                />
                                                            </div>
                                                            <div className="ImagePreview-text-box">
                                                                <p className="text-set">
                                                                    目前無檔案<span className="d-none">，</span><span className="d-block"></span>請上傳圖檔進行估價確認
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </>
                                                )
                                            } */}
                                            
                                        </div>
                                        {/* 預覽圖最外框 */}
                                        
                                        {/* 預覽圖細節最外框 */}
                                        <div className={EstimateMain1Css.detailBox}>
                                            {/* 標題外框 */}
                                            <div className={EstimateMain1Css.detailTitle}>
                                                {/* 標題 */}
                                                <h3 className={EstimateMain1Css.titleSet}>圖檔資料</h3>
                                                {/* 標題 */}
                                            </div>
                                            {/* 標題外框 */}

                                            {/* 細節表格外框 */}
                                            <div className={EstimateMain1Css.detailTableBox}>
                                                {/* 表格標頭 */}
                                                <div className={EstimateMain1Css.titleRow}>
                                                    {/* 標頭設定 */}
                                                    <div className={EstimateMain1Css.titleTextSet}>檔案縮圖</div>
                                                    <div className={EstimateMain1Css.titleTextSet}>數量</div>
                                                    {/* 標頭設定 */}
                                                </div>
                                                {/* 表格標頭 */}
                                                
                                                {/* 表格內容外框 */}
                                                <div className={EstimateMain1Css.tableContentBox}>
                                                    {/* 縮圖外框 */}
                                                    <div className={EstimateMain1Css.tableImgItem}>
                                                        {/* 縮圖設定 */}
                                                        <img    className={EstimateMain1Css.tableImgSet} 
                                                                src={`/images/EstimatePage/main1/EstimatePage-main1-Image.png`}
                                                                alt="table-img" 
                                                        />
                                                        {/* 縮圖設定 */}
                                                        {/* {
                                                            previewUrl?
                                                            (
                                                                <>
                                                                    <img className="table-img-set imgActive" 
                                                                    src={previewUrl}
                                                                    alt="table-img" />
                                                                </>
                                                            )
                                                            :
                                                            (
                                                                <>
                                                                    <img className="table-img-set" 
                                                                    src={`${import.meta.env.BASE_URL}assets/images/EstimatePage/main1/EstimatePage-main1-Image.png`}
                                                                    alt="table-img" />
                                                                </>
                                                            )
                                                        } */}
                                                        
                                                    </div>
                                                    {/* 縮圖外框 */}

                                                    {/* 控制鈕外框 */}
                                                    <div className={EstimateMain1Css.tableItem}>
                                                        {/* 加號按鈕 */}
                                                        <button className={EstimateMain1Css.itemAddBtnSet}>
                                                            {/* 加號圖片 */}
                                                            <img className={EstimateMain1Css.itemAddBtnImgSet}
                                                                src={`/images/EstimatePage/main1/EstimatePage-main1-input-minus-plus.png`}
                                                                alt="itemAddBtn-img" />
                                                            {/* 加號圖片 */}
                                                        </button>
                                                        {/* 加號按鈕 */}

                                                        {/* <p className="item-set">{orderData.num}</p> */}
                                                        {/* 顯示數量 */}
                                                        <p className={EstimateMain1Css.itemSet}>0</p>
                                                        {/* 顯示數量 */}

                                                        {/* 減號按鈕 */}
                                                        <button className={EstimateMain1Css.itemSubBtnSet}>
                                                            {/* 減號圖片 */}
                                                            <img className={EstimateMain1Css.itemSubBtnImgSet} 
                                                                src={`/images/EstimatePage/main1/EstimatePage-main1-input-minus.png`} 
                                                                alt="itemSubBtn-img" />
                                                            {/* 減號圖片 */}
                                                        </button>
                                                        {/* 減號按鈕 */}
                                                    </div>
                                                    {/* 控制鈕外框 */}
                                                </div>
                                                {/* 表格內容外框 */}
                                            </div>
                                            {/* 細節表格外框 */}
                                        </div>
                                        {/* 預覽圖細節最外框 */}

                                    </div>
                                    {/* 下半部區塊外框 */}
                                    
                                    {/* 下一頁按鈕外框 */}
                                    <div className={EstimateMain1Css.EstimatePageMain1NextBtn}>
                                        <button type='button' className="pagination-btn01">
                                            <img className="pagination-img01-set"
                                                src={`/images/EstimatePage/main3/EstimatePage-main3-Vector15.png`} 
                                                alt="Vector 15" 
                                            />
                                        </button>
                                        <div className={EstimateMain1Css.EstimatePageMain1NextBtnBox}>
                                            <p className={EstimateMain1Css.nextBtnTipTextSet}><span className='d-none d-sm-inline'>前往下一頁</span>選擇材料</p>
                                        </div>
                                    </div>
                                    {/* 下一頁按鈕外框 */}

                                </div>
                                {/* 元件本體 */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* 元件背景 */}
            </div>
            {/* 元件最外圍 */}
        </>
    )
}
export default EstimatePageMain1;

