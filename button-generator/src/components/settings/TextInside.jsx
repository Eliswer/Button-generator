import Title from "../Title";
import classes from "../../styles/settings/text-inside.module.css";

function TextInside() {
  return (
    <div className={classes.s2}>
      <Title title={"Text inside"} />
      <div className={classes.line}>
        <p>Displayed text:</p>
        <input type="text"></input>
      </div>
      <div className={classes.line}>
        <p>Font:</p>
        <select name="cars" id="cars">
          <option value="volvo">Itim</option>
          <option value="saab">sans serif</option>
        </select>
      </div>
      <div className={classes.line}>
        <p className={classes["padding-header"]}>Size:</p>
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
        <p className={classes["padding-header"]}>Weight:</p>
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
        <p>Colour:</p>
        <input
          type="color"
          className={classes["colour-choice"]}
          style={{ backgroundColor: "black" }}
        ></input>
      </div>
    </div>
  );
}

export default TextInside;
