'use client';

import { configureStore } from '@reduxjs/toolkit';
import authReducer  from './slice/authSlice';
import modalReducer  from './slice/modalSlice';
import testReducer from './slice/testSlice';
import userReducer from './slice/userSlice';
import orderReducer from './slice/orderSlice';
import materialReducer from './slice/materialSlice';
import messageReducer from './slice/messageSlice';
import profileReducer from './slice/profileSlice';

export const store = configureStore({
  reducer: {
    auth:authReducer,
    modal:modalReducer,
    test:testReducer,
    user:userReducer,
    order:orderReducer,
    material:materialReducer,
    message:messageReducer,
    profile:profileReducer,
  },
});