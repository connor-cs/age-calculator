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
            <li>12 years</li>
            <li>11 months</li>
            <li>10 days</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
