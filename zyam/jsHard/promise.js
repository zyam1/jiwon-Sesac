// promise 기본 예시
function promise1(flag) {
    return new Promise(function (resolve, reject) {
      if (flag) {
        resolve(`상태 fulfilled ! then으로 연결`);
      } else {
        reject(`상태 rejected ! catch으로 연결`);
      }
    });
  }
  
  // 특정 함수가 return 하는 값이 promise 객체일 경우,
  // chaining으로 then, catch 라는 메소드
  promise1(true)
    .then((result) => {
      // result 에는 resolve로 보낸 인자 값이 들어오게 된다.
      // 여기서는 `상태 fulfilled ! then으로 연결` 문자열
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
  
  promise1(false)
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
  
  // ----------------- 콜백 지옥 예시!!!! ------------------
  // function add(n1, n2, cb) {
  //   setTimeout(function () {
  //     let result = n1 + n2;
  //     cb(result);
  //   }, 1000);
  // }
  
  // function mul(n, cb) {
  //   setTimeout(function () {
  //     let result = n * 2;
  //     cb(result);
  //   }, 700);
  // }
  
  // function sub(n, cb) {
  //   setTimeout(function () {
  //     let result = n - 1;
  //     cb(result);
  //   }, 500);
  // }
  
  // add(4, 3, function (x) {
  //   console.log("1: ", x);
  //   mul(x, function (y) {
  //     console.log("2: ", y);
  //     sub(y, function (z) {
  //       console.log("3: ", z);
  //     });
  //   });
  // });
  
  // --------------- promise로 변경 ------------------
  function add(n1, n2) {
    return new Promise((resolve) => {
      setTimeout(function () {
        let result = n1 + n2;
        resolve(result);
      }, 1000);
    });
  }
  
  function mul(n) {
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        let result = n * 2;
        resolve(result);
        //   reject("오류 발생");
      }, 700);
    });
  }
  
  function sub(n) {
    return new Promise((resolve) => {
      setTimeout(function () {
        let result = n - 1;
        resolve(result);
      }, 500);
    });
  }
  
  add(4, 3)
    .then((result) => {
      console.log("1: ", result);
      return mul(result);
    })
    .then((result) => {
      console.log("2: ", result);
      return sub(result);
    })
    .then((result) => {
      console.log("3: ", result);
    })
    .catch((err) => {
      console.log(err);
    });
