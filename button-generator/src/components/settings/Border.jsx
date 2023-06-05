import { useState } from "react";
import Title from "../Title";

import { borderActions } from "../../store/border";
import { useDispatch } from "react-redux";

function Border() {
  const [isChecked, setIsChecked] = useState(false);
  const [value, setValue] = useState("");
  const [colourValue, setColourValue] = useState("#f1404b");
  const [widthValue, setWidthValue] = useState("");
  const [radiusValue, setRadiusValue] = useState("");

  const handleReset = () => {};

  const dispatch = useDispatch();

  const checkHandler = (e) => {
    setIsChecked(!isChecked);
  };

  const handleBorderStyleChange = (e) => {
    setValue(e.target.value);
    dispatch(borderActions.changeType({ borderType: e.target.value }));
  };

  const handleBorderColourChange = (e) => {
    setColourValue(e.target.value);
    dispatch(borderActions.changeColour({ borderColour: e.target.value }));
  };

  const handleBorderWidthChange = (e) => {
    setWidthValue(e.target.value);
    dispatch(borderActions.changeWidth({ borderWidth: e.target.value }));
  };

  const handleBorderRadiusChange = (e) => {
    setRadiusValue(e.target.value);
    dispatch(borderActions.changeRadius({ borderRadius: e.target.value }));
  };

  return (
    <div className={"section"}>
      <Title title={"Border"} />
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
                name="border-style"
                onChange={handleBorderStyleChange}
                value={value}
              >
                <option>Choose</option>
                <option value="solid">Solid</option>
                <option value="dotted">Dotted</option>
                <option value="dashed">Dashed</option>
                <option value="double">Double</option>
                <option value="none">None</option>
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
                onChange={handleBorderColourChange}
              ></input>
            </div>
          </div>
          <div className={"line"}>
            <p>Width:</p>
            <div className={"line-flex"}>
              <input
                type="range"
                min="1"
                max="50"
                value={widthValue}
                className={"slider"}
                onChange={handleBorderWidthChange}
              />
            </div>
          </div>
          <div className={"line"}>
            <p>Radius:</p>
            <div className={"line-flex"}>
              <input
                type="range"
                min="1"
                max="50"
                value={radiusValue}
                className={"slider"}
                onChange={handleBorderRadiusChange}
              />
            </div>
          </div>
          <div className="line">
            <p>Reset Borderto default</p>
            <div className={"line-flex"}>
              <button className="reset-button" onClick={handleReset}>
                Reset
              </button>
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
