const http = require("http");
const express = require("express");
const app = express();
// 소켓이 http모듈로 생성된 서버에서만 동작
const server = http.createServer(app);
const PORT = 8000;

// cors 이슈 : 다른 서버에서 보내는 요청을 제한함
const cors = require("cors");
app.use(cors());

const io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});


const chatRoom2 = io.of("/chatRoom2");
const chatRoom3 = io.of("/chatRoom3");
//이런식으로 적으면 방 3개를 만든느낌 
const chatRoom1Users = {};

// chatRoom1 연결 처리
const chatRoom1 = io.of("/chatRoom1");//chatRoom1방생성
chatRoom1.on("connection", (socket) => {
  socket.on("entry", (res) => {
    if (Object.values(chatRoom1Users).includes(res.userId)) {
      socket.emit("error", {
        msg: "중복된 아이디가 존재하여 입장이 불가합니다.",
      });
    } else {
      io.emit("notice", { msg: `${res.userId}님이 입장하셨습니다.` });
      socket.emit("entrySuccess", { userId: res.userId });
      chatRoom1Users[socket.id] = res.userId;
      updateUserList("chatRoom1");
    }
    console.log(chatRoom1Users);

    socket.on("disconnect", () => {
      chatRoom1.emit("notice", { msg: `${chatRoom1Users[socket.id]}님이 퇴장하셨습니다.` });
      delete chatRoom1Users[socket.id];
      updateUserList("chatRoom1");
    });
  });

  socket.on("sendMsg", (res) => {
    if (res.dm === "all") io.emit("chat", { userId: res.userId, msg: res.msg });
    else {
      io.to(res.dm).emit("chat", {
        userId: res.userId,
        msg: res.msg,
        dm: true,
      });
      socket.emit("chat", { userId: res.userId, msg: res.msg, dm: true });
    }
  });
});

const updateUserList = (room) => {
  io.of(`/${room}`).emit("userList", chatRoom1Users);
};

let Message = {
    //메세지 라는 객체선언
    user:"사용자 이름",
    message:"내용",
    room:"방이름",
};

//io라고 정의된 객체들은 전체에 적용, chatRoom이라고 네임스페이스를 만들었기때문에 chatRoom.메소드는 특정 채팅방에서 작동하는 로직(이벤트 핸들러 사용)을 만들 수있다.

//나중에 프론트에서 특정div를 눌렀을때 특정 방에 join 할 수 있게 만들기.(파일을 나눠야 하나...)

 const userIdArr = {};
// // { "socket.id": "userIda", "socket.id": "userIdb" ,"socket.id": "userIdc"  }

// const updateUserList = () => {
//   io.emit("userList", userIdArr);
// };

io.on("connection", (socket) => {
  console.log("socket id", socket.id);
  // abcdjfkladjflaksjrlew
  // [실습 3번] socket id를 이용해 입장 공지
  // io.emit("notice", { msg: `${socket.id}님이 입장하셨습니다.` });
  // [실습 3-3번] 퇴장시키키 -> 누가 입장하고 있는지 알아야 하고, 해당 정보를 전체적으로 저장할 필요가 있었다.
  // userIdArr[socket.id] = res.userId;

  // [실습 3-1번] 입장 시에 받은 user id로 입장 공지
  socket.on("entry", (res) => {
    // [실습 3-2]z
    // Object.values(userIdArr) => ["userIda", "userIdb", "userIdc"]
    // includes : 문자열이나 배열에서 인자로 넘겨준 값이 존재하는지 안하는 지 찾을 수 있음.
    // indexOf : 배열에서 인자로 넘겨준 값의 인덱스를 추출, 없다면 -1을 반환
    if (Object.values(userIdArr).includes(res.userId)) {
      //닉네임이 중복될 경우에
      socket.emit("error", {
        msg: "중복된 아이디가 존재하여 입장이 불가합니다.",
      });
    } else {
      //중복되지 않을 경우에
      io.emit("notice", { msg: `${res.userId}님이 입장하셨습니다.` });
      socket.emit("entrySuccess", { userId: res.userId });
      userIdArr[socket.id] = res.userId;
      updateUserList();
    }
    console.log(userIdArr);
    // 중복된다는 오류 메세지를 보내주던지
  });

  // const obj = { abc: "aaa", "cd-e": "bbb" };
  // obj.abc;
  // obj["cd-e"];

  // [실습 3-3] 퇴장시키기
  socket.on("disconnect", () => {
    io.emit("notice", { msg: `${userIdArr[socket.id]}님이 퇴장하셨습니다.` });
    delete userIdArr[socket.id];
    console.log(userIdArr);
    updateUserList();
  });

  socket.on("sendMsg", (res) => {
    if (res.dm === "all") io.emit("chat", { userId: res.userId, msg: res.msg });
    else {
      // io.to(소켓아이디).emit()
      io.to(res.dm).emit("chat", {
        userId: res.userId,
        msg: res.msg,
        dm: true,
      });
      socket.emit("chat", { userId: res.userId, msg: res.msg, dm: true });
    }
  });
});

server.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});