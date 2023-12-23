import "../styles/chat.css";
import { useCallback, useEffect, useMemo, useState } from "react";
import Chat from "./Chat";
import Notice from "./Notice";
import io from "socket.io-client";
import { useSelector } from 'react-redux';



export default function ChatRoom(props) {
const {number} = props; 
const socket = io.connect(`http://localhost:8000/chatRoom${number}`, { autoConnect: false });
const [msgInput, setMsgInput] = useState("");
 const Rnickname = useSelector((state) => state.nickname);
  const [chatList, setChatList] = useState([]);
  const [userId, setUserId] = useState(null);
  const [userList, setUserList] = useState({});
  const [dmTo, setDmTo] = useState("all");

  const initSocketConnect = () => {
    console.log("connected", socket.connected);
    if (!socket.connected) socket.connect();
  };

  useEffect(() => {
    socket.on("error", (res) => {
      alert(res.msg);
    });

    socket.on("entrySuccess", (res) => {
      setUserId(res.userId);
    });

    socket.on("userList", (res) => {
      setUserList(res);
    });
  }, []);

  // useMemo: 값을 메모라이징 한다.
  // 뒤에 있는 의존성 배열에 있는 값이 update 될 때마다 연산을 실행함.
  const userListOptions = useMemo(() => {
    // [<option></option>, <option></option>]
    const options = [];
    for (const key in userList) {
      // key : userList의 key값 (socket id)
      // userList[key] : userList의 value값 (사용자 id)
      if (userList[key] === userId) continue;
      options.push(
        <option key={key} value={key}>
          {userList[key]}
        </option>
      );
    }
    return options;
  }, [userList]);

  // useCallback: 함수를 메모라이징 한다
  // 뒤에 있는 의존성 배열에 있는 값이 update 될 때만 함수를 다시 선언함.
  const addChatList = useCallback(
    (res) => {
      const type = res.userId === userId ? "my" : "other";
      const content = `${res.dm ? "(속닥속닥) " : ""} ${res.userId}: ${
        res.msg
      }`;
      const newChatList = [...chatList, { type: type, content: content }];
      setChatList(newChatList);
    },
    [userId, chatList]
  );

  useEffect(() => {
    socket.on("chat", addChatList);
    return () => socket.off("chat", addChatList);
  }, [addChatList]);

  useEffect(() => {
    const notice = (res) => {
      const newChatList = [...chatList, { type: "notice", content: res.msg }];
      setChatList(newChatList);
    };

    socket.on("notice", notice);
    return () => socket.off("notice", notice);
  }, [chatList]);

  const sendMsg = () => {
    if (msgInput !== "") {
      socket.emit("sendMsg", { userId: userId, msg: msgInput, dm: dmTo });
      setMsgInput("");
    }
  };

  const entryChat = () => {
    initSocketConnect();
    socket.emit("entry", { userId:  Rnickname });
  };
  useEffect(() => {
    socket.on("error", (res) => {
      alert(res.msg);
    });
  
    socket.on("entrySuccess", (res) => {
      setUserId(res.userId);
    });
  
    socket.on("userList", (res) => {
      setUserList(res);
    });
  
    // 채팅방에 입장할 때 서버에 정보 전달
    entryChat();
  
  }, [])

  return (
    <>
      <h3>1번 채팅방</h3>
     
      {Rnickname ? (
        <>
          
          <div>{Rnickname}님 환영합니다.</div>
          <div className="chat-container">
            {chatList.map((chat, i) => {
              if (chat.type === "notice") return <Notice key={i} chat={chat} />;
              else return <Chat key={i} chat={chat} />;
            })}
          </div>
          <div className="input-container">
            <select value={dmTo} onChange={(e) => setDmTo(e.target.value)}>
              <option value="all">전체</option>
              {userListOptions}
            </select>
            <input
              type="text"
              value={msgInput}
              onChange={(e) => setMsgInput(e.target.value)}
            />
            <button onClick={sendMsg}>전송</button>
          </div>
        </>
      ) : {}}
    </>
  );
}
