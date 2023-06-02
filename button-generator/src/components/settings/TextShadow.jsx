import { useState } from "react";
import Title from "../Title";

import { textShadowActions } from "../../store/textShadow";
import { useDispatch } from "react-redux";

function TextShadow() {
  const [isChecked, setIsChecked] = useState(false);
  const [colour, setColour] = useState("#f1404b");
  const [horizontal, setHorizontal] = useState("5px");
  const [vertical, setVertical] = useState("5px");
  const [blur, setBlur] = useState("5px");

  const dispatch = useDispatch();

  const checkHandler = () => {
    setIsChecked(!isChecked);
  };

  const handleColourChange = (e) => {
    setColour(e.target.value);
    dispatch(textShadowActions.changeColour({ newColour: e.target.value }));
  };

  const handleHorizontalChange = (e) => {
    setHorizontal(e.target.value);
    dispatch(
      textShadowActions.changeHorizontal({ newHorintalValue: e.target.value })
    );
  };

  const handleVerticalChange = (e) => {
    setVertical(e.target.value);
    dispatch(
      textShadowActions.changeVertical({ newVerticalValue: e.target.value })
    );
  };

  const handleBlurChange = (e) => {
    setBlur(e.target.value);
    dispatch(textShadowActions.changeBlur({ newBlurValue: e.target.value }));
  };

  return (
    <div className={"section"}>
      <Title title={"Text Shadow"} />
      <div className={"line"}>
        <p>Enable:</p>
        <div className={"line-flex"}>
          <input type="checkbox" checked={isChecked} onChange={checkHandler} />
        </div>
      </div>
      {isChecked ? (
        <div>
          <div className={"line"}>
            <p>Colour:</p>
            <div className={"line-flex"}>
              <input
                type="color"
                className={"colour-choice"}
                onChange={handleColourChange}
                value={colour}
              ></input>
            </div>
          </div>
          <div className={"line"}>
            <p>Horizontal:</p>
            <div className={"line-flex"}>
              <input
                type="range"
                min="-20"
                max="20"
                value={horizontal}
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
                min="-20"
                max="20"
                value={vertical}
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
                min="0"
                max="50"
                value={blur}
                onChange={handleBlurChange}
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

export default TextShadow;
