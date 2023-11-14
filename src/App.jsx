import { useState } from "react";
import Input from "./Input";

import "./App.css";

function App() {
  return (
    <>
      <div className="main">
        <Input />
        <hr></hr>
        <div className="display-section">
          <ul>
            <li><span>--</span> years</li>
            <li><span>--</span> months</li>
            <li><span>--</span> days</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
