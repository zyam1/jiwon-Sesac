import "./App.css";
import {BrowserRouter,Routes, Route } from "react-router-dom";
import ChatRoom from "./components/ChatRoom";
import MainPage from "./components/pages/MainPage";
// import Chatting1 from "./components/Chatting1";
// import Chatting2 from "./components/Chatting2";
// import Practice1 from "./components/Practice1";

function App() {
  return (
    <BrowserRouter> 
     <div className="App">
      <Routes>
        {/* <Route path="/" element={<GoChatRoom color="#C549F9"/>}/> */}

        <Route path="/" element={<MainPage/>}/>
        <Route path="/chatRoom1" element={<ChatRoom number="1"/>}/>
        <Route path="/chatRoom2" element={<ChatRoom number="2"/>}/>
        <Route path="/chatRoom3" element={<ChatRoom number="3"/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  
  );
}

export default App;
