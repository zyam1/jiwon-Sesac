import "./App.css";
import Chatting3 from "./components/Chatting3";
import {BrowserRouter,Routes, Route } from "react-router-dom";
import GoChatRoom from "./components/GoChatRoom";
import ChatRoom from "./components/ChatRoom";
// import Chatting1 from "./components/Chatting1";
// import Chatting2 from "./components/Chatting2";
// import Practice1 from "./components/Practice1";

function App() {
  return (
    <BrowserRouter> 
     <div className="App">

      <Chatting3 />
      <hr/>
      <GoChatRoom color="#C549F9" link="1"/>
      <GoChatRoom color="#F9E749" link="2"/>
      <GoChatRoom color="#C549F9" link="3"/>

      <Routes>
        {/* <Route path="/" element={<GoChatRoom color="#C549F9"/>}/> */}
        <Route path="/chatRoom1" element={<ChatRoom />}/>
      </Routes>
    </div>
    </BrowserRouter>
  
  );
}

export default App;
