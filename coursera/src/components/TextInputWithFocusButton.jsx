import React, { useRef } from "react";

const TextInputWithFocusButton = () => {
  const inputEL = useRef(null);
  const onButtonClick = () => {
    inputEL.current.focus();
  };

  return (
    <div>
      <input ref={inputEL} type="text"></input>
      <button onClick={onButtonClick}>Focus the button</button>
    </div>
  );
};

export default TextInputWithFocusButton;
