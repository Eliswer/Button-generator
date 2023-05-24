import { useState } from "react";
import Title from "../Title";
import classes from "../../styles/settings/text-shadow.module.css";

function TextShadow() {
  const [isChecked, setIsChecked] = useState(false);

  const checkHandler = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className={classes.s4}>
      <Title title={"Text Shadow"} />
      <div className={classes.line}>
        <p>Enable:</p>
        <input type="checkbox" checked={isChecked} onChange={checkHandler} />
      </div>
      {isChecked ? (
        <div className={classes.enabled}>
          <div className={classes.line}>
            <p>Colour:</p>
            <input
              type="color"
              className={classes["colour-choice"]}
              style={{ backgroundColor: "black" }}
            ></input>
          </div>
          <div className={classes.line}>
            <p>Horizontal:</p>
            <input
              type="range"
              min="1"
              max="100"
              value="50"
              className={classes.slider}
              id="myRange"
            />
          </div>
          <div className={classes.line}>
            <p>Vertical:</p>
            <input
              type="range"
              min="1"
              max="100"
              value="50"
              className={classes.slider}
              id="myRange"
            />
          </div>
          <div className={classes.line}>
            <p>Blur:</p>
            <input
              type="range"
              min="1"
              max="100"
              value="50"
              className={classes.slider}
              id="myRange"
            />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default TextShadow;
