//여기는 그냥 페이지를 채팅방으로 보내는 div 박스가 있는 곳 
//NameColort에서 사용자의 이름과 이용자의 색을 받아온다.
//props로 어느 채팅방인지 div박스의 색은 무엇인지 , 채팅방 번호가 무엇인지 정보를 받아서 리다이랙트 시킨다. 
//동시에 서버로 NameColort에서받은 사용자의 이름과 색을 전달한다.
import "../styles/chat.css";
import { Link } from "react-router-dom";
import Chat from "./Chat";
import Notice from "./Notice";
import io from "socket.io-client";
import { useSelector } from 'react-redux';

//중복체크 이쪽에서 해줘야할듯. 아니면 닉네임 만들때부터 안되게 하던지


const socket = io.connect("http://localhost:8000/chatRoom1", { autoConnect: false });



//props를 사용할것인지 아니면 redux를 사용해서 관리할것인지 생각해보기
export default function GoChatRoom(props){
    const Rnickname = useSelector((state) => state.nickname);
    const { color, link } = props;
    const initSocketConnect = () => {
        console.log("connected", socket.connected);
        if (!socket.connected) socket.connect();
      };
    const entryChat = () => {
    initSocketConnect();
    socket.emit("entry", { userId:  Rnickname });
  };

   return(<>
            <Link to={`chatRoom${link}`} className="go-chat-room" style={{backgroundColor:color}} ></Link>
        </>);
}

