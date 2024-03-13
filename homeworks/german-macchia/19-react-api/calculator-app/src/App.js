import { Compute } from "./components/Compute";
import { Keypad } from "./components/Keypad";
import React, { useCallback, useState } from "react";
import "./App.css";

function App() {
  const [command, setCommand] = useState("");
  const [press, setPress] = useState(0);

  const handleOnPushKey = useCallback((key) => {
    setCommand(key);
    setPress((press) => press + 1);
  }, []);

  return (
    <div className="App">
      <Compute command={command} press={press} />
      <Keypad handleOnPushKey={handleOnPushKey} />
    </div>
  );
}

export default App;
