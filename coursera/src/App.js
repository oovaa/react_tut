import "./App.css";
import linux from "./components/gnu-linux.png";

import React from "react";

const Logo = (props) => {
  const userPic = <img src={linux}></img>;
  return userPic;
};

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <Logo />
    </div>
  );
}

export default App;
