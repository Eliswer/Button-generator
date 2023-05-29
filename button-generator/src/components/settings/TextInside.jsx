import Title from "../Title";
import classes from "../../styles/settings/text-inside.module.css";

function TextInside() {
  return (
    <div className={"section"}>
      <Title title={"Text inside"} />
      <div className={"line"}>
        <p>Displayed text:</p>
        <input type="text" className={classes.input}></input>
      </div>
      <div className={"line"}>
        <p>Font:</p>
        <div className={"line-flex"}>
          <select name="cars" id="cars">
            <option value="volvo">Itim</option>
            <option value="saab">sans serif</option>
          </select>
        </div>
      </div>
      <div className={"line"}>
        <p>Size:</p>
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
        <p>Weight:</p>
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
        <p>Colour:</p>
        <div className={"line-flex"}>
          <input
            type="color"
            className={"colour-choice"}
            value={"#f1404b"}
          ></input>
        </div>
      </div>
    </div>
  );
}

export default TextInside;
