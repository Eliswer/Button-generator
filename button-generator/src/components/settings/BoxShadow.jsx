import { useState } from "react";
import Title from "../Title";
import classes from "../../styles/settings/box-shadow.module.css";

function BoxShadow() {
  const [isChecked, setIsChecked] = useState(false);

  const checkHandler = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className={"section"}>
      <Title title={"Box Shadow"} />
      <div className={"line"}>
        <p>Enable:</p>
        <div className={"line-flex"}>
          <input type="checkbox" checked={isChecked} onChange={checkHandler} />
        </div>
      </div>
      {isChecked ? (
        <div className={classes.enabled}>
          <div className={"line"}>
            <p>Type:</p>
            <div className={"line-flex"}>
              <select name="cars" id="cars">
                <option value="volvo">Outset</option>
                <option value="saab">**</option>
              </select>
            </div>
          </div>
          <div className={"line"}>
            <p>Colour:</p>
            <div className={"line-flex"}>
              <input
                type="color"
                className={classes["colour-choice"]}
                value={"#f1404b"}
              ></input>
            </div>
          </div>
          <div className={"line"}>
            <p>Horizontal:</p>
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
            <p>Vertical:</p>
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
            <p>Blur:</p>
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
            <p>Spread:</p>
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

export default BoxShadow;
