import { useState } from "react";
import Header from "./Header";
import classes from "../styles/settings.module.css";
import drawing from "../icons/Drawing.svg";
import General from "./settings/General";
import Title from "./Title";
import TextInside from "./settings/TextInside";

function Settings() {
  const [isChecked, setIsChecked] = useState(false);

  const checkHandler = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <Header icon={drawing} title={"Style your button"} />
      <div className={classes["settings-wrapper"]}>
        <General />
        <TextInside />
        <div className={classes.s3}>
          <Title title={"Border"} />
          <div className={classes.line}>
            <p>Enable:</p>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={checkHandler}
            />
          </div>
          {isChecked ? (
            <div className={classes.enabled}>
              <div className={classes.line}>
                <p>Font:</p>
                <select name="cars" id="cars">
                  <option value="volvo">Solid</option>
                  <option value="saab">**</option>
                </select>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default Settings;
