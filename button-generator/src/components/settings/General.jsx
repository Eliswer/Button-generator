import Title from "../Title";
import classes from "../../styles/settings/general.module.css";

function General() {
  return (
    <>
      <div className={classes.s1}>
        <Title title={"General"} />
        <div className={classes.line}>
          <p>CSS class name:</p>
          <input type="text"></input>
        </div>
        <div className={classes.line}>
          <p>BG colour:</p>
          <select name="cars" id="cars">
            <option value="volvo">Solid</option>
            <option value="saab">Gradient</option>
          </select>
          <input
            type="color"
            className={classes["colour-choice"]}
            style={{ backgroundColor: "black" }}
          ></input>
          <input
            type="color"
            className={classes["colour-choice"]}
            style={{ backgroundColor: "black" }}
          ></input>
        </div>
        <div className={classes["extended-line"]}>
          <p>Padding:</p>
          <div>
            <div className={classes.padding}>
              <p className={classes["padding-header"]}>Top:</p>
              <input
                type="range"
                min="1"
                max="100"
                value="50"
                className={classes.slider}
                id="myRange"
              />
            </div>
            <div className={classes.padding}>
              <p className={classes["padding-header"]}>Bottom:</p>
              <input
                type="range"
                min="1"
                max="100"
                value="50"
                className={classes.slider}
                id="myRange"
              />
            </div>
            <div className={classes.padding}>
              <p className={classes["padding-header"]}>Left:</p>
              <input
                type="range"
                min="1"
                max="100"
                value="50"
                className={classes.slider}
                id="myRange"
              />
            </div>
            <div className={classes.padding}>
              <p className={classes["padding-header"]}>Right:</p>
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
      </div>
    </>
  );
}

export default General;
