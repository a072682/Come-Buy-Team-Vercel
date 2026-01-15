import { useState } from 'react';
import './_OffcanvasFaq.scss';
import { Collapse } from 'react-bootstrap';
import Link from 'next/link';



function OffcanvasFaq({handleClose}) {
  
  const [openDefault, setOpenDefault] = useState(false);

  return (
    <>
      
        <button className={`offcanvasItem-set ${openDefault ? 'active' : ''}`} onClick={() => setOpenDefault(!openDefault)}>
            新手指南QA
            <span className="material-symbols-outlined">
                arrow_drop_down
            </span>
        </button>
        <Collapse in={openDefault}>
            <div className='Collapse-box'>
                <Link className="Collapse-item-set" href={{ pathname: "/QAPage", query: { tab: "客製化流程" } }} onClick={()=>{handleClose()}}>客製化流程</Link>
                <Link className="Collapse-item-set" href={{ pathname: "/QAPage", query: { tab: "設計需求介紹" } }} onClick={()=>{handleClose()}}>設計需求介紹</Link>
                <Link className="Collapse-item-set" href={{ pathname: "/QAPage", query: { tab: "運費說明" } }} onClick={()=>{handleClose()}}>運費說明</Link>
                <Link className="Collapse-item-set" href={{ pathname: "/QAPage", query: { tab: "常見問題" } }} onClick={()=>{handleClose()}}>常見問題</Link>
            </div>
        </Collapse>
    </>
  );
}

export default OffcanvasFaq;
