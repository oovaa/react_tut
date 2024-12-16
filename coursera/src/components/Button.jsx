import React from "react";

function Button() {
  const clickHandler = () => {
    console.log("clicked");
  };
  const MouseOverHandler = () => {
    console.log("mouse over");
  };
  return (
    <div>
      <button
        onMouseOver={MouseOverHandler}
        style={{
          backgroundColor: "blue",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        key={"submit"}
      >
        Submit
      </button>
    </div>
  );
}

export default Button;
