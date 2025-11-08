"use client";


import IndexPageMain1 from "./IndexPageMain1/IndexPageMain1";
import IndexPageMain2 from "./IndexPageMain2/IndexPageMain2";
import IndexPageMain3 from "./IndexPageMain3/IndexPageMain3";
import IndexPageMain4 from "./IndexPageMain4/IndexPageMain4";
import IndexPageMain5 from "./IndexPageMain5/IndexPageMain5";
import IndexPageCss from "./_IndexPage.module.scss";
function IndexPage(){
    
    return (
        <>
        <div id="top" className="main1-box">
            <IndexPageMain1 />
        </div>

        <div className="main2-box">
            <IndexPageMain2 />
        </div>

        <div className="main3-box">
            <IndexPageMain3 />
        </div>

        <div className="main4-box">
            <IndexPageMain4 />
        </div>

        {/* 重要：給錨點一個 id（取代原來的 useRef/hash 判斷） */}
        <div id="news" className="main5-box">
            <IndexPageMain5 />
        </div>
        </>
    );
}
export default IndexPage;