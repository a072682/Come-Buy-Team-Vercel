import React, { useEffect, useState } from "react";
import './_Calendar.scss';

const Calendar = ({ handleWorkTimeData,setSelectedDate,setCalendarShow,calendarShow }) => {

  //#region
  //#endregion 

  //#region 建立時間物件代表現在
    const today = new Date();
  //#endregion 

  //#region 建立一個時間狀態，預設為現在
    const [currentDate, setCurrentDate] = useState(new Date());
    useEffect(()=>{},[currentDate]);
  //#endregion 

  // const [selected, setSelected] = useState(null); 
  // useEffect(()=>{},[selected]);

  //#region 寫入函數year/month/day並轉換為xxxx/xx/xx格式資料並更新時間函數
    const updateSelectedDate = (year, month, day) => {

      const today = new Date();
      today.setHours(0, 0, 0, 0);
      //.setHours() 是一個 設定「小時、分鐘、秒、毫秒」的函式。
      //.setHours(0, 0, 0, 0) 把今天的時間設為 「00:00:00.000」也就是「零點整」

      const chosenDate = new Date(year, month, day);
      chosenDate.setHours(0, 0, 0, 0);

      // 如果比今天小，就改成今天
      if (chosenDate < today) {
        year = today.getFullYear();
        month = today.getMonth();
        day = today.getDate();
      }

      const formattedDate = `${year}/${month + 1}/${day}`;
      // setSelected({ year, month, day });
      setSelectedDate(formattedDate); // 將日期回傳給父組件
      handleWorkTimeData(formattedDate);
      setCalendarShow(!calendarShow);
    };
  //#endregion 

  const generateCalendar = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const lastDateOfMonth = new Date(year, month + 1, 0).getDate();

    const daysArray = Array(firstDayOfMonth).fill(null);
    for (let i = 1; i <= lastDateOfMonth; i++) {
      daysArray.push(i);
    }

    return { year, month, daysArray };
  };

  //#region 對generateCalendar解構，取出year, month, daysArray讓外部使用
    const { year, month, daysArray } = generateCalendar();
  //#endregion 

  // 3)（可選）決定「上一月」是否應被禁用（整月都比今天早）
  const prevMonthStart = new Date(year, month - 1, 1);
  prevMonthStart.setHours(0, 0, 0, 0);
  const prevMonthEnd = new Date(year, month, 0); // 上月最後一天
  prevMonthEnd.setHours(0, 0, 0, 0);
  const prevDisabled = prevMonthEnd < today;

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button onClick={() => setCurrentDate(new Date(year, month - 1, 1))}>
          &lt;
        </button>
        <span>{year} 年 {new Date(year, month, 1).toLocaleString('zh-TW', { month: 'long' })}</span>
        <button onClick={() => setCurrentDate(new Date(year, month + 1, 1))}>
          &gt;
        </button>
      </div>

      <div className="weekdays">
        {["日", "一", "二", "三", "四", "五", "六"].map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      <div className="days">
        {daysArray.map((day, index) =>
          day === null ? (
            <div key={index}></div>
          ) : (
            <div
              key={index}
              className={`day ${day === today.getDate() && year === today.getFullYear() && month === today.getMonth() ? "today" : ""}`}
              onClick={() => updateSelectedDate(year, month, day)}
            >
              {day}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Calendar;
