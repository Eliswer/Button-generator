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
        <input type="checkbox" checked={isChecked} onChange={checkHandler} />
      </div>
      {isChecked ? (
        <div className={classes.enabled}>
          <div className={classes.line}>
            <p>Type:</p>
            <select name="cars" id="cars">
              <option value="volvo">Solid</option>
              <option value="saab">**</option>
            </select>
          </div>
          <div className={classes.line}>
            <p>Colour:</p>
            <input
              type="color"
              className={classes["colour-choice"]}
              style={{ backgroundColor: "black" }}
            ></input>
          </div>
          <div className={classes.line}>
            <p>Width:</p>
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
            <p>Radius:</p>
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

export default Border;
