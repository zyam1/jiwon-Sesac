 //리듀서:현재 상태와 액션을 받아 새로운 상태를 반환하는 함수. 
 //Reducer는 순수 함수로 작성되어야 하며 이전 상태를 변경하지 않고 새로운 상태를 반환.


import { createSlice } from '@reduxjs/toolkit';

const nicknameSlice = createSlice({
  name: 'nickname',
  initialState: '',
  reducers: {
    makeNickname: (state, action) => {
      return action.payload;
    },
  },
});

export const { makeNickname } = nicknameSlice.actions;
export default nicknameSlice.reducer;
