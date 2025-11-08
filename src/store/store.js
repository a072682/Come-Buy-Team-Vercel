'use client';

import { configureStore } from '@reduxjs/toolkit';
import loginReducer  from './slice/loginSlice';
import modalReducer  from './slice/modalSlice';



export const store = configureStore({
  reducer: {
    login:loginReducer,
    modal:modalReducer,
  },
});