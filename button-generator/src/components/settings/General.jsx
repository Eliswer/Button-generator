import Title from "../Title";
import classes from "../../styles/settings/general.module.css";

function General() {
  return (
    <>
      <div className={"section"}>
        <Title title={"General"} />
        <div className={"line"}>
          <p>CSS class name:</p>
          <input type="text" className={classes.input}></input>
        </div>
        <div className={"line"}>
          <p>BG colour:</p>
          <div className={"line-flex"}>
            <select name="cars" id="cars">
              <option value="volvo">Solid</option>
              <option value="saab">Gradient</option>
            </select>
            <input
              type="color"
              className={classes["colour-choice"]}
              value={"#f1404b"}
            ></input>
            <input
              type="color"
              className={classes["colour-choice"]}
              value={"#f1404b"}
            ></input>
          </div>
        </div>
        <div className={classes["extended-line"]}>
          <p>Padding:</p>
          <div className={classes["extended-wrapper"]}>
            <div className={classes.padding}>
              <p className={classes["padding-header"]}>Top:</p>
              <input
                type="range"
                min="1"
                max="100"
                defaultValue="50"
                className={"slider"}
                id="myRange"
              />
            </div>
            <div className={classes.padding}>
              <p className={classes["padding-header"]}>Bottom:</p>
              <input
                type="range"
                min="1"
                max="100"
                defaultValue="50"
                className={"slider"}
                id="myRange"
              />
            </div>
            <div className={classes.padding}>
              <p className={classes["padding-header"]}>Left:</p>
              <input
                type="range"
                min="1"
                max="100"
                defaultValue="50"
                className={"slider"}
                id="myRange"
              />
            </div>
            <div className={classes.padding}>
              <p className={classes["padding-header"]}>Right:</p>
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
      </div>
    </>
  );
}

export default General;
