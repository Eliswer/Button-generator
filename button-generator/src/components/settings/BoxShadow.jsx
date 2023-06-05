import { useState } from "react";
import Title from "../Title";

import { boxShadowActions } from "../../store/boxShadow";
import { useDispatch } from "react-redux";

function BoxShadow() {
  const [isChecked, setIsChecked] = useState(false);
  const [type, setType] = useState("");
  const [colourValue, setColourValue] = useState("#f1404b");
  const [horizontalValue, setHorizontalValue] = useState("");
  const [verticalValue, setVerticalValue] = useState("");
  const [blurValue, setBlurValue] = useState("");
  const [spreadValue, setSpreadValue] = useState("");

  const dispatch = useDispatch();

  const checkHandler = () => {
    setIsChecked(!isChecked);
  };

  const handleBoxShadowTypeChange = (e) => {
    setType(e.target.value);
    dispatch(boxShadowActions.changeType({ newType: e.target.value }));
  };

  const handleColourChange = (e) => {
    setColourValue(e.target.value);
    dispatch(boxShadowActions.changeColour({ newColour: e.target.value }));
  };

  const handleHorizontalChange = (e) => {
    setHorizontalValue(e.target.value);
    dispatch(
      boxShadowActions.changeHorizontal({ newHorizontalValue: e.target.value })
    );
  };

  const handleVerticalChange = (e) => {
    setVerticalValue(e.target.value);
    dispatch(
      boxShadowActions.changeVertical({ newVerticalValue: e.target.value })
    );
  };

  const handleBlurChange = (e) => {
    setBlurValue(e.target.value);
    dispatch(boxShadowActions.changeBlur({ newBlurValue: e.target.value }));
  };

  const handleSpreadChange = (e) => {
    setSpreadValue(e.target.value);
    dispatch(boxShadowActions.changeSpread({ newSpreadValue: e.target.value }));
  };

  return (
    <div className={"section"}>
      <Title title={"Box Shadow"} />
      <div className={"line"}>
        <p>Enable:</p>
        <div className={"line-flex"}>
          <input type="checkbox" checked={isChecked} onChange={checkHandler} />
        </div>
      </div>
      {isChecked ? (
        <div>
          <div className={"line"}>
            <p>Type:</p>
            <div className={"line-flex"}>
              <select
                name="box-shadow-type"
                value={type}
                onChange={handleBoxShadowTypeChange}
              >
                <option>Choose</option>
                <option value="none">None</option>
                <option value="">Outset</option>
                <option value="inset">Inset</option>
              </select>
            </div>
          </div>
          <div className={"line"}>
            <p>Colour:</p>
            <div className={"line-flex"}>
              <input
                type="color"
                className={"colour-choice"}
                value={colourValue}
                onChange={handleColourChange}
              ></input>
            </div>
          </div>
          <div className={"line"}>
            <p>Horizontal:</p>
            <div className={"line-flex"}>
              <input
                type="range"
                min="-40"
                max="40"
                value={horizontalValue}
                onChange={handleHorizontalChange}
                className={"slider"}
              />
            </div>
          </div>
          <div className={"line"}>
            <p>Vertical:</p>
            <div className={"line-flex"}>
              <input
                type="range"
                min="-40"
                max="40"
                value={verticalValue}
                onChange={handleVerticalChange}
                className={"slider"}
              />
            </div>
          </div>
          <div className={"line"}>
            <p>Blur:</p>
            <div className={"line-flex"}>
              <input
                type="range"
                min="1"
                max="50"
                value={blurValue}
                onChange={handleBlurChange}
                className={"slider"}
              />
            </div>
          </div>
          <div className={"line"}>
            <p>Spread:</p>
            <div className={"line-flex"}>
              <input
                type="range"
                min="1"
                max="50"
                value={spreadValue}
                onChange={handleSpreadChange}
                className={"slider"}
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

export default BoxShadow;
