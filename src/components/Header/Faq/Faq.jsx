import { useState } from 'react';
import './_Faq.scss';
import { Dropdown } from 'react-bootstrap';
import Link from 'next/link';
import NavLink from '@/components/NavLink/NavLink';





function Faq() {
  
  const [show, setShow] = useState(false);//紀錄是否開啟視窗

  return (
    <>
      
      <Dropdown show={show} onToggle={(isOpen) => setShow(isOpen)}>
        
        <Dropdown.Toggle as="div" className='Faq-dropdown-toggle'>

            <div className={`FaqItem-set ${show ? 'active' : ''}`}>
                新手指南
                <span className="material-symbols-outlined">
                  arrow_drop_down
                </span>
            </div>

        </Dropdown.Toggle>
        
        <Dropdown.Menu className="FaqDropdown-list-wrapper" popperConfig={{
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [-80, 13], // X, Y（px）
              },
            },
          ],
        }}>

            <Link className="dropdown-item-set" href={{ pathname: "/QAPage", query: { tab: "客製化流程" } }} onClick={()=>{setShow(false)}}>客製化流程</Link>
            <Link className="dropdown-item-set" href={{ pathname: "/QAPage", query: { tab: "設計需求介紹" } }} onClick={()=>{setShow(false)}}>設計需求介紹</Link>
            <Link className="dropdown-item-set" href={{ pathname: "/QAPage", query: { tab: "運費說明" } }} onClick={()=>{setShow(false)}}>運費說明</Link>
            <Link className="dropdown-item-set" href={{ pathname: "/QAPage", query: { tab: "常見問題" } }} onClick={()=>{setShow(false)}}>常見問題</Link>

        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default Faq;
