import Title from "../Title";
import classes from "../../styles/settings/general.module.css";

import { useState } from "react";

import { useDispatch } from "react-redux";
import { generalActions } from "../../store/general";

function General() {
  const [disabled, setDisabled] = useState(true);
  const dispatch = useDispatch();

  const handleClassNameChange = (e) => {
    dispatch(generalActions.changeClassName(e.target.value));
  };

  const handleColourChoice = (e) => {
    if (e.target.defaultValue === "solid") {
      setDisabled(true);
    } else if (e.target.value === "gradient") {
      setDisabled(false);
    }
  };

  return (
    <>
      <div className={"section"}>
        <Title title={"General"} />
        <div className={"line"}>
          <p>CSS class name:</p>
          <input
            type="text"
            className={"input"}
            onChange={handleClassNameChange}
          ></input>
        </div>
        <div className={"line"}>
          <p>BG colour:</p>
          <div className={"line-flex"}>
            <select name="color" onChange={handleColourChoice}>
              <option defaultValue="solid">Solid</option>
              <option defaultValue="gradient">Gradient</option>
            </select>
            <input
              type="color"
              className={"colour-choice"}
              defaultValue={"#f1404b"}
            ></input>
            <input
              type="color"
              className={"colour-choice"}
              defaultValue={"#f1404b"}
              disabled={disabled}
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
