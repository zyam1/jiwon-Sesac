
import { useState } from 'react';
import './App.css';
// import LifeCycle from './components/LifeCycleFunc';
import LifeCycleClass from './components/LifeCycleClass';
import AxiosPostList from './components/AxiosPostList';
// import PostList from './components/PostList';

function App() {
  const [number,setNumber] = useState(0);
  const [isShow,setIsShow] = useState(true);
  return (
    <div>
      <button onClick={()=>{return setNumber(number+1)}}>plus</button>
      <button onClick={()=>setIsShow(!isShow)}>{isShow? 'off':'on'}</button>
      {/* {isShow && <LifeCycle number={number}/>} */}
      <hr />
      {isShow && <LifeCycleClass number={number}/>}
      <hr />
      {/* <PostList/> */}
      <AxiosPostList/>
    </div>
  );
}


export default App;
