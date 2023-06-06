import Title from "../Title";
import classes from "../../styles/settings/general.module.css";

import { useState } from "react";

import { useDispatch } from "react-redux";
import { generalActions } from "../../store/general";

function General() {
  const [disabled, setDisabled] = useState(true);
  const [colourValue, setColourValue] = useState("#7a7a7a");
  const [colourValueSolid, setColourValueSolid] = useState("#f1404b");

  const [heightValue, setHeightValue] = useState("");
  const [widthValue, setWidthValue] = useState("");

  const [paddingTop, setPaddingTop] = useState("");
  const [paddingBottom, setPaddingBottom] = useState("");
  const [paddingLeft, setPaddingLeft] = useState("");
  const [paddingRight, setPaddingRight] = useState("");

  const dispatch = useDispatch();

  const handleClassNameChange = (e) => {
    dispatch(generalActions.changeClassName({ newClassName: e.target.value }));
  };

  const handleColourChoice = (e) => {
    if (e.target.value === "solid") {
      setDisabled(true);
      setColourValue("#7a7a7a");
    } else if (e.target.value === "gradient") {
      setDisabled(false);
      setColourValue("#f1404b");
    }

    dispatch(
      generalActions.changeBackgroundType({ newColour: e.target.value })
    );
  };

  const handleWidthChange = (e) => {
    setWidthValue(e.target.value);
    dispatch(generalActions.changeWidth({ newWidth: e.target.value }));
  };

  const handleHeightChange = (e) => {
    setHeightValue(e.target.value);
    dispatch(generalActions.changeHeight({ newHeight: e.target.value }));
  };

  const handlePaddingTopChange = (e) => {
    setPaddingTop(e.target.value);
    dispatch(
      generalActions.changePaddingTop({ newPaddingTop: e.target.value })
    );
  };

  const handlePaddingBottomChange = (e) => {
    setPaddingBottom(e.target.value);
    dispatch(
      generalActions.changePaddingBottom({
        newPaddingBottom: e.target.value,
      })
    );
  };

  const handlePaddingLeftChange = (e) => {
    setPaddingLeft(e.target.value);
    dispatch(
      generalActions.changePaddingLeft({ newPaddingLeft: e.target.value })
    );
  };

  const handlePaddingRightChange = (e) => {
    setPaddingRight(e.target.value);
    dispatch(
      generalActions.changePaddingRight({ newPaddingRight: e.target.value })
    );
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
              <option>Solid / Gradient</option>
              <option value="solid">Solid</option>
              <option value="gradient">Gradient</option>
            </select>
            <input
              type="color"
              className={"colour-choice"}
              value={colourValueSolid}
              onChange={(e) => {
                setColourValueSolid(e.target.value);
                dispatch(
                  generalActions.changeBgColourSolid({
                    solidColour: e.target.value,
                  })
                );
              }}
            ></input>
            <input
              type="color"
              className={"colour-choice"}
              value={colourValue}
              onChange={(e) => {
                setColourValue(e.target.value);
                dispatch(
                  generalActions.changeBgColourGradient({
                    gradientColour: e.target.value,
                  })
                );
              }}
              disabled={disabled}
            ></input>
          </div>
        </div>
        <div className={"line"}>
          <p>Width:</p>
          <div className={"line-flex"}>
            <input
              type="range"
              min="100"
              max="500"
              onChange={handleWidthChange}
              value={widthValue}
              className={"slider"}
            />
          </div>
        </div>
        <div className={"line"}>
          <p>Height:</p>
          <div className={"line-flex"}>
            <input
              type="range"
              min="50"
              max="300"
              onChange={handleHeightChange}
              value={heightValue}
              className={"slider"}
            />
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
                max="20"
                value={paddingTop}
                onChange={handlePaddingTopChange}
                className={"slider"}
              />
            </div>
            <div className={classes.padding}>
              <p className={classes["padding-header"]}>Bottom:</p>
              <input
                type="range"
                min="1"
                max="20"
                value={paddingBottom}
                onChange={handlePaddingBottomChange}
                className={"slider"}
              />
            </div>
            <div className={classes.padding}>
              <p className={classes["padding-header"]}>Left:</p>
              <input
                type="range"
                min="1"
                max="20"
                value={paddingLeft}
                onChange={handlePaddingLeftChange}
                className={"slider"}
              />
            </div>
            <div className={classes.padding}>
              <p className={classes["padding-header"]}>Right:</p>
              <input
                type="range"
                min="1"
                max="20"
                value={paddingRight}
                onChange={handlePaddingRightChange}
                className={"slider"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default General;
