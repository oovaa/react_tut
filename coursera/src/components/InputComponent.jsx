import React, { useState } from "react";
import TextInputWithFocusButton from "./TextInputWithFocusButton";

const InputComponent = () => {
  const [text, setText] = useState("hii");
  function handelChange(e) {
    setText(e.target.value);
  }

  return (
    <div>
      <input value={text} onChange={handelChange}></input>
      <p>you typed : {text}</p>
      <button onClick={() => setText("hii")}>reset</button>
      <TextInputWithFocusButton />
    </div>
  );
};

export default InputComponent;
