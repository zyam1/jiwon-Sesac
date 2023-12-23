// src/redux/index.js
//import {  combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import nickNameReducer from './nickNameReducers';

const store = configureStore({
    reducer: {
        nickname: nickNameReducer,
       
      },
});



export default store;
