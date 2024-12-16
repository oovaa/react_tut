import { useState } from "react";
import "./App.css";
import Login from './components/Login'
import { LoginContext } from "./Context/LoginContext";
import Profile from "./components/Profile";

function App() {
  const [showProfile, setShowProfile] = useState(false);
  const [username, setUsername] = useState("");



  return (
    <div>
      <LoginContext.Provider value={{ username, setUsername, setShowProfile }}>
        {showProfile ? <Profile /> : <Login />}
      </LoginContext.Provider>
    </div>
  );
}

export default App;
