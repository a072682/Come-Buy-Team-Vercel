'use client';

import axios from 'axios';

// 請求攔截器(全域)：每次發送 request 前執行
axios.interceptors.request.use((config) => {
    //確認是否在前端執行
    if (typeof window !== 'undefined') {
        // 從 localStorage 取得 token
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 請求攔截器(全域)：每次收到 request 執行
axios.interceptors.response.use(
    (response) => {

        // 從 header 取得續期 token
        // axios 會把 header key 轉成小寫
        const renewedToken = response.headers['x-renewed-token'];

        //如果有新token，就覆蓋localStorage
        if (renewedToken && typeof window !== 'undefined') {
            localStorage.setItem('token', renewedToken);
        }

        return response;
    },
    (error) => {
        // 如果 token 失效（401），你也可以在這裡統一處理
        return Promise.reject(error);
    }
);
