//여기는 사용자의 이름과 색상을 정한다(상단에 표시도 한다.).그 정보를  props를 통해 GoChatRoom 컴포넌트로 전달 한다. 간단.
//입력창과 정보들을 확정짓는 버튼이 필요하다.
//실시간으로 상단에 나의 정보가 뜬다 
// src/components/NicknameInput.js
import React, { useState } from 'react';
import {useSelector, useDispatch } from 'react-redux';
import { makeNickname } from '../store/nickNameReducers';
//setNickname이라는 액션 가져오기

const NicknameInput = () => {
  const Rnickname = useSelector((state) => state.nickname);//store에 저장된 변수를 사용하기위해 useSelector를 씀.
  const [nickname, setNickname] = useState('');
  const dispatch = useDispatch();

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handleNicknameSubmit = () => {
    dispatch(makeNickname(nickname));
    setNickname('');
  };

  return (<>   
  <div>
      <input
        type="text"
        placeholder="닉네임을 입력해 주세요"
        value={nickname}
        onChange={handleNicknameChange}
      />
      <button onClick={handleNicknameSubmit}>저장</button>
    </div>
    {Rnickname? <div>{Rnickname}님 환영합니다</div> :<div>익명님</div>}
    {/* 디폴트 값을 익명으로 하고 익명은 중복이 되게 합시다 */}
   
</>);
 
 
};

export default NicknameInput;




