'use client'; // 這個元件會使用 Redux，因此要加這行

import { close, MODALS, open } from '@/store/slice/modalSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import Login from '../Modal/Login/Login';
import Register from '../Modal/Register/Register';
import RegisterSuccessModel from '../Modal/Register/RegisterSuccessModel/RegisterSuccessModel';
import OestimateModal from '@/singlePages/EstimatePage/EstimatePageMain1/OestimateModal/OestimateModal';
import OrderModel from '@/singlePages/EstimatePage/EstimatePageMain5/OrderModel/OrderModel';
import OrderCheckModel from '@/singlePages/EstimatePage/EstimatePageMain5/OrderCheckModel/OrderCheckModel';  
import MaterialPageModal from '@/singlePages/MaterialPage/MaterialPageModal/MaterialPageModal';
import AboutUsModal from '@/singlePages/AboutUsPage/AboutUsModal/AboutUsModal';
import ImgCheckModal from '@/singlePages/EstimatePage/EstimatePageMain1/ImgCheckModal/ImgCheckModal';
import OrderDetailModal from '@/singlePages/UserPages/MyOrder/orderDetailModal/OrderDetailModal';


export default function ModalRoot() {

    //#region 讀取中央函式前置宣告
        const dispatch = useDispatch();
    //#endregion

    //#region 讀取中央登入資料
        //讀取中央資料
        const active = useSelector((state)=>{
            return(
                state.modal.activeModal
            )
        })
        useEffect(()=>{
            console.log("目前開啟視窗",active);
        },[active]);
    //#endregion

    //#region 有開任何一個 modal 時，鎖 body 滾動
    useEffect(() => {
        const prev = document.body.style.overflow;
        if (active) {
            document.body.style.overflow = "hidden";
            //console.log("滾動鎖住");
        }else{
            document.body.style.overflow = prev || "auto";
            //console.log("滾動解除");
        } 
        return () => { 
            document.body.style.overflow = prev || "auto";
        };
    }, [active]);
    //#endregion

    //#region ⎋ 按 ESC 關閉（可選）
      useEffect(() => {
          //如果modal為關閉則跳出
          if (!active) return;
          //如果modal為關閉則跳出

          //如果目標案件為esc則關閉
          const onKey = (event) => {
              if (event.key === "Escape") {
                  dispatch(close());
              }
          };
          //如果目標案件為esc則關閉

          //案鍵被按下的那一刻觸發(addEventListener)
          window.addEventListener("keydown", onKey);
          //案鍵被按下的那一刻觸發(addEventListener)

          //組件卸載時觸發(removeEventListener)
          return () => window.removeEventListener("keydown", onKey);
          //組件卸載時觸發(removeEventListener)
      }, [active, dispatch]);
    //#endregion

    // 依名稱決定要渲染哪個 modal 內容
    const content = useMemo(() => {
        //如果狀態名稱是LOGIN
        //會員登入
        if (active === MODALS.LOGIN) {
            return (
            <Login
                //如果要關閉就使用 onClose?()即可並不是onClose執行完就會執行onSwitch
                onClose={() => dispatch(close())}
                //如果要關閉就使用 onClose?()即可並不是onClose執行完就會執行onSwitch
                onSwitch={() => dispatch(open(MODALS.REGISTER))}
            />
            );
        }
        //會員註冊
        if (active === MODALS.REGISTER) {
            return (
                <Register
                    onClose={() => dispatch(close())}
                    onSwitch={() => dispatch(open(MODALS.LOGIN))}
                />
            );
        }
        //會員註冊結果
        if (active === MODALS.RegisterSuccessModel) {
            return (
                <RegisterSuccessModel
                    onClose={() => dispatch(close())}
                />
            );
        }
        //線上估價檔案格式說明
        if (active === MODALS.OestimateModal) {
            return (
                <OestimateModal
                    onClose={() => dispatch(close())}
                />
            );
        }
        //線上估價圖片上傳等待視窗
        if (active === MODALS.ImgCheckModal) {
            return (
                <ImgCheckModal
                    onClose={() => dispatch(close())}
                />
            );
        }
        //線上估價訂單詳細資料
        if (active === MODALS.OrderModel) {
            return (
            <OrderModel
                onClose={() => dispatch(close())}
            />
            );
        }
        //線上估價訂單上傳確認視窗
        if (active === MODALS.OrderCheckModel) {
            return (
            <>
                <OrderModel />
                <OrderCheckModel
                    onClose={() => dispatch(close())}
                />
            </>
            );
        }
        //材料選擇材料說明
        if (active === MODALS.MaterialPageModal) {
            return (
            <MaterialPageModal
                onClose={() => dispatch(close())}
            />
            );
        }
        //關於我們留言視窗
        if (active === MODALS.AboutUsModal) {
            return (
            <AboutUsModal
                onClose={() => dispatch(close())}
            />
            );
        }
        //我的訂單細節視窗
        if (active === MODALS.OrderDetailModal) {
            return (
            <OrderDetailModal
                onClose={() => dispatch(close())}
            />
            );
        }
        return null;
    }, [active, dispatch]);

    // 沒有任何 modal，要回傳 null（不渲染）
    if (!active) return null;

    // 透過 Portal 掛到 body，避免被父層 overflow/z-index 影響
    return createPortal(
        content,
        document.body
    );
}
