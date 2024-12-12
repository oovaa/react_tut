import React from "react";

const Main = ({ content = "main" }) => {
  const styleMain = {
    background: "gray",
    width: "calc(50% - 10px)",
    marginLeft: "10px",
  };
  return <div style={styleMain}>{content}</div>;
};

export default Main;
