"use client";

import { useSelector } from "react-redux";
import "./_PageMask.scss";
import { useEffect } from "react";

export default function PageMask() {

    //#region 讀取連線狀態
        const linkState = useSelector((state)=>{
            return(
                state.test.linkState
            )
        })

        useEffect(()=>{
            //console.log("連線狀態:",linkState);
        },[linkState])
    //#endregion

    return (
        <div className={linkState ? "d-none" : "pageMask"}>
            <div className="loader">
                <p className="loader-text" aria-live="polite" aria-busy="true">
                    網站載入中，請稍後
                    <span className="dots">
                        <span>.</span><span>.</span><span>.</span>
                    </span>
                </p>
            </div>
        </div>
    );
}
