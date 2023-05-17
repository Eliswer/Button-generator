import { useState } from "react";

import "./styles/app.css";

import drawing from "./icons/Drawing.svg";
import preview from "./icons/Preview.svg";
import sourceCode from "./icons/Source-code.svg";

import Header from "./components/Header";
import Settings from "./components/Settings";
import ButtonPreview from "./components/ButtonPreview";
import CodeToCopy from "./components/CodeToCopy";

function App() {
  const [bottomComponent, setShowBottomComponent] = useState({
    showCode: false,
    showSettings: true,
  });

  const showCode = () => {
    setShowBottomComponent({
      ...bottomComponent,
      showCode: true,
      showSettings: false,
    });
  };

  const showSettings = () => {
    setShowBottomComponent({
      ...bottomComponent,
      showCode: false,
      showSettings: true,
    });
  };

  return (
    <div className="app">
      <div className="btn-prev">
        <Header icon={preview} title={"Button preview"} />
        <ButtonPreview />
        <button onClick={showCode}>Show Code</button>
        <button onClick={showSettings}>Show Settings</button>
      </div>
      <div className="bottom-wrapper">
        {bottomComponent.showCode ? <CodeToCopy /> : ""}
        {bottomComponent.showSettings ? <Settings /> : ""}
      </div>
    </div>
  );
}

export default App;
