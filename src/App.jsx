import React, { useState } from "react";
import { Password } from "primereact/password";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  return (
    <>
      <div className="border-left-2 border-right-2 w-9 m-auto surface-border">
        <div className="card flex justify-content-center">
          <Password
            value={value}
            onChange={(e) => setValue(e.target.value)}
            toggleMask
          />
        </div>
      </div>
    </>
  );
}

export default App;
