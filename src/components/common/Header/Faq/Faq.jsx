

"use client";


import { useState } from 'react';
import FaqCss from "./_Faq.module.scss";
import { Dropdown, Nav } from 'react-bootstrap';
import { clsx } from 'clsx';
import Link from 'next/link';


function Faq() {
  
  const [show, setShow] = useState(false);//紀錄是否開啟視窗

  return (
    <>
      
      <Dropdown show={show} onToggle={(isOpen) => setShow(isOpen)} className={FaqCss.FaqCssDropdown}>
        
        <Dropdown.Toggle className={clsx(FaqCss.FaqDropdownToggle, show && FaqCss.active)}>  
            新手指南
            <span className={clsx(FaqCss.icon, "material-symbols-outlined")}>
                arrow_drop_down
            </span>
        </Dropdown.Toggle>
        
        <Dropdown.Menu className={FaqCss.FaqDropdownListWrapper}>

            <Link className={FaqCss.dropdownItemSet} href="/QaPage" onClick={()=>{setShow(false)}}>客製化流程</Link>
            <Link className={FaqCss.dropdownItemSet} href="/QaPage" onClick={()=>{setShow(false)}}>設計需求介紹</Link>
            <Link className={FaqCss.dropdownItemSet} href="/QaPage" onClick={()=>{setShow(false)}}>運費說明</Link>
            <Link className={FaqCss.dropdownItemSet} href="/QaPage" onClick={()=>{setShow(false)}}>常見問題</Link>

        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default Faq;
