import { useEffect, useState } from 'react';
import UserDropdownCss from "./_UserDropdown.module.scss";
import { Dropdown, Nav } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '@/store/slice/loginSlice';
import Link from 'next/link';
import { useRouter } from 'next/router';




function UserDropdown() {

  const dispatch = useDispatch();

  //#region 讀取中央會員頭像資料
      //讀取中央資料
      const avatarUrl = useSelector((state)=>{
          return(
              state.login.avatar_url
          )
      })

      useEffect(()=>{
          console.log("頭像資料:",avatarUrl);
      },[avatarUrl])
  //#endregion

  //#region 讀取中央會員名稱資料
      //讀取中央資料
      const userName = useSelector((state)=>{
          return(
              state.login.username
          )
      })

      useEffect(()=>{
          // console.log("會員名稱資料:",userName);
      },[userName])
  //#endregion
  
  const [show, setShow] = useState(false);//紀錄是否開啟視窗

  const handleLogoutUser = async()=>{
    try{
      await dispatch(logoutUser()).unwrap();
      // console.log("登出成功");
      setShow(false);
    }catch(error){
      console.log("登出失敗:",error);
    }
  }

  return (

    

    <>
      
      <Dropdown show={show} onToggle={(isOpen) => setShow(isOpen)} className={UserDropdownCss.userDropdown}>
        
        <Dropdown.Toggle as="div" className={UserDropdownCss.userDropdownToggle}>

            <Nav.Link as="div" className={UserDropdownCss.userItemSet}>
              {
                avatarUrl?
                (
                  <img className={UserDropdownCss.userItemImgSet} src={avatarUrl} alt={userName} />
                )
                :
                (
                  <div className={`${UserDropdownCss.userItemImgSet} ${UserDropdownCss.textVer}`}>{(userName?.trim()?.charAt(0) || '?').toUpperCase()}</div>
                )
              }
            </Nav.Link>

        </Dropdown.Toggle>
        
        <Dropdown.Menu className={UserDropdownCss.userDropdownListWrapper}>

            <Link className={UserDropdownCss.dropdownItemSet} href="UserPages"
                  onClick={()=>{
                    setShow(false);
                  }}>
                    會員中心
            </Link>
            <Link className={UserDropdownCss.dropdownItemSet} href="/"
                  onClick={()=>{
                    handleLogoutUser()
                  }}>
                    登出
            </Link>

        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default UserDropdown;
