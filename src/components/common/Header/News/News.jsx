"use client";
//告訴 Next.js：「這個檔案只在前端執行」，不在 Server 端執行。

import { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import clsx from "clsx";
import Link from "next/link";
import NewCss from "./_News.module.scss";



function News() {
  
  const [show, setShow] = useState(false);//紀錄是否開啟視窗

  return (
    <>
      
      <Dropdown show={show} onToggle={(isOpen) => setShow(isOpen)} className={NewCss.newsDropdown}>
        
        <Dropdown.Toggle className={clsx( NewCss.newsDropdownToggle, show && NewCss.active, "d-lg-flex")}>
            最新消息
            <span className={clsx(NewCss.icon, "material-symbols-outlined")}>
                  arrow_drop_down
            </span>
        </Dropdown.Toggle>
        
        <Dropdown.Menu className={NewCss.newsDropdownListWrapper}>

            <Dropdown.Item  as={Link} className={NewCss.dropdownItemSet} 
                                      href={{ pathname: '/', hash: 'news' }}
                            onClick={()=>{
                                setShow(false);
                            }}>
                            最新消息
            </Dropdown.Item>

            <Dropdown.Item  as={Link} className={NewCss.dropdownItemSet} 
                                      href={{ pathname: '/', hash: 'top' }}
                            onClick={()=>{
                                setShow(false);
                            }}>
                            聯絡我們
            </Dropdown.Item>

        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default News;
