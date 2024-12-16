import React from "react";

function Toggler() {
  let darkModeOn = true;
  const darkMode = <h1>dark mode is on</h1>;
  const lightMode = <h1>light mode is on</h1>;

  const handelClick = () => {
    darkModeOn = !darkModeOn;
    if (darkModeOn) console.log("dark mode is on");
    else console.log("light mode is on");
  };

  return (
    <div>
      {darkModeOn ? darkMode : lightMode}
      <button onClick={handelClick}>click me</button>
    </div>
  );
}

export default Toggler;
