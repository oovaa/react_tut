import React, { useState, useContext } from "react";
import { LoginContext } from "../Context/LoginContext";

function Login() {
  const { setUsername, setShowProfile } = useContext(LoginContext);
  return (
    <div>
      <input
        type="text"
        placeholder="username..."
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      ></input>
      <input type="text" placeholder="password..."></input>
      <button onClick={() => setShowProfile(true)}>Login</button>
    </div>
  );
}

export default Login;
