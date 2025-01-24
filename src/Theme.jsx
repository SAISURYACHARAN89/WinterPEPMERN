import React from "react";

function Whitebg() {
  return <h1>White Background</h1>;
}

function Blackbg() {
  return <h1>Black Background</h1>;
}

function Whitebtn() {
  return <h1 >White Button</h1>;
}

function Blackbtn() {
  return <h1>Black Button</h1>;
}

function Changetheme({val}) {
//   const isWhite = val;

  if (val) {
    return (
      <>
        <Whitebg />
        <Blackbtn />
      </>
    );
  } else {
    return (
      <>
        <Blackbg />
        <Whitebtn />
      </>
    );
  }
    
}

const Theme = { Changetheme, Whitebg, Blackbg, Whitebtn, Blackbtn };

export { Theme };
