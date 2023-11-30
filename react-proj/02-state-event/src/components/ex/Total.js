import { useState } from "react";

function Total() {
  
  const [backgroundColor, setBackgroundColor] = useState("black");
  const [color, setColor] = useState("white");
  const [img, setImg] = useState("./apple.webp");
  const [text, setText] = useState("text");

  function handleFruitChange(e) {
    setImg(e.target.value);
  }

  function handleBackgroundColorChange(e) {
    setBackgroundColor(e.target.value);
  }

  function handleColorChange(e) {
    setColor(e.target.value);
  }

  function handleTextChange(e) {
    setText(e.target.value);
  }

  

  return (
    <>
      <div>
        과일:
        <select value={img} onChange={handleFruitChange}>
          <option value={"./apple.webp"}>사과</option>
          <option value={"./peach.jpg"}>복숭아</option>
          <option value={"./banana.jpg"}>바나나</option>
        </select>
      </div>
      <div>
        배경색:
        <select value={backgroundColor} onChange={handleBackgroundColorChange}>
          <option value={"black"}>검정</option>
          <option value={"red"}>빨강</option>
          <option value={"blue"}>파랑</option>
        </select>
      </div>
      <div>
        글자색:
        <select value={color} onChange={handleColorChange}>
          <option value={"white"}>하양</option>
          <option value={"yellow"}>노랑</option>
          <option value={"green"}>초록</option>
        </select>
      </div>
      <div>
        내용:
        <input
          type="text"
          value={text}
          onChange={handleTextChange}
        />
      </div>
      <div>
        <img src={img} width={200} />
      </div>
      <div style={{ backgroundColor: backgroundColor, color: color }}>
        {text}
      </div>
    </>
  );
}

export default Total;
