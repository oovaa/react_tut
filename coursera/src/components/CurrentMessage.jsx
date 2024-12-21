import React from "react";

function CurrentMessage() {
  const date = new Date().getDay();
  console.log(date);

  return <div>{false ? <p>work</p> : <p>rest</p>}</div>;
}

export default CurrentMessage;
