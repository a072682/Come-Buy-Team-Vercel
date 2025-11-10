

import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
//google登入相關
import { signIn } from "next-auth/react";

axios.defaults.withCredentials = true;

//此區塊為測試開發用內容
    // import axios from "axios";
    // axios.defaults.withCredentials = true; 

    // const BASE_URL = import.meta.env.VITE_BASE_URL;
    // const API_PATH = import.meta.env.VITE_API_PATH;
//此區塊為測試開發用內容

export const loginSlice = createSlice({
    name: "login",
    initialState: {
        linkState:false,//連線狀態
        isLogin: false,  // 是否登入
        avatar_url:null,//會員頭像內容
        username:null,//會員名稱
        auth_provider:null,//登入來源
    },
    reducers: {
        linkStateTrue: (state, action) => {
            state.linkState = true;
        },
        linkStateFalse: (state, action) => {
            state.linkState = false;
        },
        login: (state, action) => {
            state.isLogin = true;
            state.user = action.payload; // 儲存登入的使用者資訊
        },
        logout: (state) => {
            state.isLogin = false;
            state.user = null;
        },
        avatarDataUp:(state,action) => {
            state.avatar_url = action.payload;
        },
        usernameDataUp:(state,action) => {
            state.username = action.payload;
        },
        auth_providerDataUp:(state,action) => {
            state.auth_provider = action.payload;
        },
    },
  });

  export const { login, logout, avatarDataUp, usernameDataUp, auth_providerDataUp, linkStateTrue, linkStateFalse, } = loginSlice.actions;

    //#region
    //#endregion

    //#region 測試連線
        //測試連線
        export const linkTest = createAsyncThunk(
            "login/linkTest",
            async (_,{ dispatch }) => {
                dispatch(linkStateFalse()); 
                try {
                    const response = await axios.get(`/testApi`);
                    console.log("連線成功",response.data);
                    dispatch(linkStateTrue()); 
                    return(response.data);
                } catch (error) {
                    console.log("連線失敗",error.response.data);
                    dispatch(linkStateFalse());
                    return(error.response.data);
                }
            }
        );
        //測試連線
    //#endregion

    //#region 建立會員api
        //建立會員api
        export const createUserData = createAsyncThunk(
            "login/createUserData",
            async (newUserDATA,{ dispatch, rejectWithValue }) => {
                try {
                    const createUserDataRef = await axios.post(`/api/registerUser`,newUserDATA);
                    console.log("創建會員成功",createUserDataRef.data);
                    dispatch(logout());
                } catch (error) {
                    console.log("創建會員失敗",error.response.data);
                    dispatch(logout());
                    return rejectWithValue(error.response.data);
                }
            }
        );
        //建立會員api
    //#endregion

    //#region 會員登入API
        //會員登入API
        export const loginUser = createAsyncThunk(
            "login/loginUser",
            async (account, { dispatch, rejectWithValue }) => {
                try {
                    const handleLoginRef = await axios.post(`/api/login`, account);
                    console.log("登入成功",handleLoginRef.data);
                    dispatch(login());
                    return({
                        login:handleLoginRef.data,
                    });
                } catch (error) {
                    console.log("登入失敗",error.response.data);
                    dispatch(logout());
                    return rejectWithValue(error.response.data);
                }
            }
        );
        //會員登入API
    //#endregion
  
    //#region 登入確認
        //登入確認 API 請求
        export const checkLogin = createAsyncThunk(
                "login/checkLogin",
                async (_,{ dispatch }) => {
                    try {
                        const checkLoginRef = await axios.post(`/api/logInCheck`);
                        console.log("登入確認成功",checkLoginRef.data);
                        //更新username內容
                        dispatch(usernameDataUp(checkLoginRef?.data.user.username));
                        //更新登入來源資料
                        dispatch(auth_providerDataUp(checkLoginRef?.data.user.auth_provider));
                        // const getUserProfileRef = await axiosWithCookie.get(`${BASE_URL}/userProfile/getUserProfile`);
                        // console.log("取得會員個人資料成功",getUserProfileRef.data);
                        // if(getUserProfileRef?.data.message !== "管理員帳戶無個人信息"){
                        //     dispatch(avatarDataUp(getUserProfileRef?.data.userData.avatar_url ?? getUserProfileRef?.data.userData.google_avatar_url));
                        // }
                        dispatch(login());
                } catch (error) {
                    console.log("登入確認失敗",error.response.data);
                    dispatch(logout());
                }
            }
        );
        //登入確認 API 請求
    //#endregion

    //#region 會員登入次數統計
    
        // export const userLoginCounter = createAsyncThunk(
        //         "login/userLoginCounter",
        //         async (_,{ dispatch, rejectWithValue }) => {
        //             try {
        //                 const userLoginCounterRef = await axiosWithCookie.post(`${BASE_URL}/user/userLoginCounter`);
        //                 // console.log("登入計數成功",userLoginCounterRef.data.message);
        //         } catch (error) {
        //             // console.log("登入計數失敗",error.response.data);
        //             return rejectWithValue(error.response.data);
        //         }
        //     }
        // );
    
    //#endregion
  
    //#region 登出
        //登出
        export const logoutUser = createAsyncThunk(
            "login/logoutUser",
            async (_, { dispatch }) => {
                try {
                    const handleLogoutRef = await axios.post(`/api/logout`);
                    console.log("登出成功",handleLogoutRef.data);
                    dispatch(logout());
                } catch (error) {
                    console.log("登出失敗");
                }
            }
        );
        //登出
    //#endregion  
    
    //#region google登入api
        export const userGoogleLogin = createAsyncThunk(
            "login/userGoogleLogin",
            async (_,{ dispatch, rejectWithValue }) => {
                try {
                    // 不帶 callbackUrl = 使用預設：回到呼叫登入的同一頁
                    await signIn("google", {
                        callbackUrl: "/api/auth/finalize",
                    });
                    return true; // 會跳轉，一般不會真的用到回傳值
                } catch (error) {
                    console.log("google登入失敗");
                    return rejectWithValue("google登入失敗");
                }
            }
        );
    //#endregion

export default loginSlice.reducer;