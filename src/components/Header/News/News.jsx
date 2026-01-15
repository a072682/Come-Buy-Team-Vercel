import { useState } from 'react';
import './_News.scss';
import { Dropdown } from 'react-bootstrap';
import Link from 'next/link';
import { useRouter } from 'next/navigation';





function News() {
  
  const [show, setShow] = useState(false);//紀錄是否開啟視窗

  const router = useRouter();//頁面跳轉宣告

  return (
    <>
      
      <Dropdown show={show} onToggle={(isOpen) => setShow(isOpen)}>
        
        <Dropdown.Toggle as="div" className='News-dropdown-toggle'>

            <div className={`NewsItem-set ${show ? 'active' : ''}`}>
                最新消息
                <span className="material-symbols-outlined">
                  arrow_drop_down
                </span>
            </div>

        </Dropdown.Toggle>
        
        <Dropdown.Menu className="NewsDropdown-list-wrapper" popperConfig={{
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [-80, 13], // X, Y（px）
              },
            },
          ],
        }}>

            <Link className="dropdown-item-set" href={{ pathname: "/", hash: "#news" }} 
                  onClick={()=>{
                    setShow(false);
                  }}>
                    最新消息
            </Link>
            <Link className="dropdown-item-set" href={{ pathname: "/AboutUsPage", hash: "#contactUs" }} 
                  onClick={()=>{
                    setShow(false)
                  }}>
                    聯絡我們
            </Link>

        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default News;
