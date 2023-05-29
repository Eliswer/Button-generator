import { useState } from "react";
import Title from "../Title";
import classes from "../../styles/settings/text-shadow.module.css";

function TextShadow() {
  const [isChecked, setIsChecked] = useState(false);

  const checkHandler = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className={"section"}>
      <Title title={"Text Shadow"} />
      <div className={"line"}>
        <p>Enable:</p>
        <div className={"line-flex"}>
          <input type="checkbox" checked={isChecked} onChange={checkHandler} />
        </div>
      </div>
      {isChecked ? (
        <div className={classes.enabled}>
          <div className={"line"}>
            <p>Colour:</p>
            <div className={"line-flex"}>
              <input
                type="color"
                className={classes["colour-choice"]}
                defaultValue={"#f1404b"}
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
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default TextShadow;
