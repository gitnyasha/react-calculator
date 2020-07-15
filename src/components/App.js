import React from "react";
import "../App.css";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";

function App() {
  return (
    <div>
      <header className="App-header">
        <Display />
        <ButtonPanel />
      </header>
    </div>
  );
}

export default App;
