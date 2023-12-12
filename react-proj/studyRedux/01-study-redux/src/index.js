import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider, useSelector, useDispatch} from "react-redux";
import { composeWithDevTools} from "redux-devtools-extension";
const number =useSelector(state => state.number);//인자로 함수를 넘겨줌->리턴값을 변수값으로.
// useSelector : 리덕스 store상태 값을 조회하기 위한 hook함수 , 인자로 함수를 넘겨줘야 함, 그함수는 state를 매개변수로 받을 수 있고 return값은 원하는 state변수 값 설정
//store에 저장한 값을 사용하기 위해서 쓰는 hook함수?
const dispatch =useDispatch();
//dispatch 라는 것은 action을 발생시키는 dispatch 함수를 실행하는 hook 함수 인자로 원하는 action객체를 넘겨줘야한다.
//action이라는 것을 전달할때 사용 

const store = configureStore({reducer:reducer}, composeWithDevTools());
//store정의 크롬으로 스토어에 저장된 상태를 알아볼 수 있게한다.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    
  </React.StrictMode>
);

