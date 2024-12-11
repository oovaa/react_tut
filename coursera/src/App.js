import "./App.css";

import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

function App() {
  return (
    <div>
      <Header />
      <Main content="omar" />
      <Footer />
    </div>
  );
}

export default App;
