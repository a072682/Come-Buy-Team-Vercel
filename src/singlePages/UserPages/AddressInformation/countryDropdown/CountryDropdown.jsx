"use client";


import { useEffect, useState } from 'react';
import './_CountryDropdown.scss';
import { Dropdown } from 'react-bootstrap';




function CountryDropdown ({userData,setUserData,countryErrorsMsg}){

    //#region
    //#endregion

    //#region 控制開關
    const [countryShow, setCountryShow] = useState(false);
    //#endregion

    //#region 顯示內容
    const [countryValue, setCountryValue] = useState("國家／地區");
    useEffect(()=>{},[countryValue]);
    //#endregion

    //#region 下拉選單顯示內容
    const countryData = [
        {
            country:"Taiwan",
            key:"TW",
        },
        {
            country:"Japan",
            key:"JP",
        },
        {
            country:"United States",
            key:"US",
        },
        {
            country:"Hong Kong",
            key:"HK",
        },
        {
            country:"Singapore",
            key:"SG",
        },
    ]
    //#endregion

    //#region 讓countryValue跟userProfileData.country_code資料同步
    useEffect(() => {
        if (userData?.country_code) {
            // 從 countryData 找到對應的物件
            const matched = countryData.find((item) => item.key === userData.country_code);
            if (matched) {setCountryValue(matched.country);}
        }
    }, [userData]);
    //#endregion

    return(
        <>
            <div className='countryGroup'>
                {/* 國家/地區 */}
                <Dropdown show={countryShow} onToggle={(isOpen) => setCountryShow(isOpen)}>
                    <h3 className='countryTitle'>國家/地區</h3>
                    <Dropdown.Toggle as="div" onClick={() => {setCountryShow(!countryShow);}}> 
                        <div className='title-dropdown form-item'>{countryValue}</div>
                    </Dropdown.Toggle>
                    {countryErrorsMsg && <div className="text-danger mt-1">{countryErrorsMsg}</div>}

                    <Dropdown.Menu  className="triple-dropdown-menu" 
                                    popperConfig={{
                                        modifiers: [
                                            { name: 'offset', options: { offset: [0, 0] } }, // [skid, distance]
                                        ],
                                    }}>
                        <div className="menu-column main-menu">
                        {
                            countryData.map((main, i) => (
                                <span key={i} className='menu-btn' onClick={() => {
                                    setCountryValue(main.country); 
                                    setUserData({ ...userData, country_code: main.key }); 
                                    setCountryShow(!countryShow)
                                }}>
                                    {main.country}
                                </span>
                            ))
                        }
                        </div>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </>
    )
}
export default CountryDropdown;