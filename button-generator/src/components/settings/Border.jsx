import { useState } from "react";
import Title from "../Title";

function Border() {
  const [isChecked, setIsChecked] = useState(false);

  const checkHandler = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className={"section"}>
      <Title title={"Border"} />
      <div className={"line"}>
        <p>Enable:</p>
        <div className={"line-flex"}>
          <input type="checkbox" checked={isChecked} onChange={checkHandler} />
        </div>
      </div>
      {isChecked ? (
        <div>
          <div className={"line"}>
            <p>Type:</p>
            <div className={"line-flex"}>
              <select name="cars" id="cars">
                <option value="volvo">Solid</option>
                <option value="saab">**</option>
              </select>
            </div>
          </div>
          <div className={"line"}>
            <p>Colour:</p>
            <div className={"line-flex"}>
              <input
                type="color"
                className={"colour-choice"}
                value={"#f1404b"}
              ></input>
            </div>
          </div>
          <div className={"line"}>
            <p>Width:</p>
            <div className={"line-flex"}>
              <input
                type="range"
                min="1"
                max="100"
                defaultValue="50"
                className={"slider"}
                id="myRange"
              />
            </div>
          </div>
          <div className={"line"}>
            <p>Radius:</p>
            <div className={"line-flex"}>
              <input
                type="range"
                min="1"
                max="100"
                defaultValue="50"
                className={"slider"}
                id="myRange"
              />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Border;
