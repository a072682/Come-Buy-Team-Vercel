


// src/store/modalSlice.js
import { createSlice } from '@reduxjs/toolkit';

// 初始狀態：目前沒有任何 modal 被打開
const initialState = {
  activeModal: null,
};

//#region 方便之後表達更語意化像是open(MODALS.LOGIN) 比 open("login") 更清楚
    export const MODALS = {
      LOGIN: "login",
      REGISTER: "register",
      RegisterSuccessModel: "registersuccessmodel",
      OestimateModal:"OestimateModal",
      OrderModel:"OrderModel",
      OrderCheckModel:"OrderCheckModel",
      OrderDetailModal:"OrderDetailModal",
      MaterialPageModal:"MaterialPageModal",
      AboutUsModal:"AboutUsModal",
      ImgCheckModal:"ImgCheckModal",
    };
//#endregion

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    open: (state, action) => {
        const name = action.payload;
        //如果不是字串就回null
        state.activeModal = typeof name === "string" ? name : null;
    },
    close: (state) => {
        state.activeModal = null;
    },
    switchTo: (state, action) => {
        const name = action.payload;
        //如果不是字串就回null
        state.activeModal = typeof name === "string" ? name : null;
    },
  },
});

export const { open, close, switchTo } = modalSlice.actions;


export default modalSlice.reducer;
