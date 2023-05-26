import { useState } from "react";
import Title from "../Title";
import classes from "../../styles/settings/border.module.css";

function Border() {
  const [isChecked, setIsChecked] = useState(false);

  const checkHandler = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className={classes.s3}>
      <Title title={"Border"} />
      <div className={classes.line}>
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
                className={classes["colour-choice"]}
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
                value="50"
                className={classes.slider}
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
                value="50"
                className={classes.slider}
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
