import { useState } from "react";
import Title from "../Title";

import { textInsideActions } from "../../store/textInside";
import { useDispatch } from "react-redux";

function TextInside() {
  const defaultItim = "(default)";
  const [value, setValue] = useState("");
  const [font, setFont] = useState("Itim");
  const [size, setSize] = useState("16px");
  const [fontWeight, setfontWeight] = useState("");
  const [fontColour, setfontColour] = useState("black");

  const dispatch = useDispatch();

  const handleTextChange = (e) => {
    setValue(e.target.value);

    dispatch(
      textInsideActions.changeDisplayedText({ newText: e.target.value })
    );
  };

  const handleFontChange = (e) => {
    setFont(e.target.value);
    dispatch(textInsideActions.changeFont({ newFont: e.target.value }));
  };

  const handleResize = (e) => {
    setSize(e.target.value);
    dispatch(textInsideActions.changeSize({ newSize: e.target.value }));
  };

  const handleFontWeightChange = (e) => {
    setfontWeight(e.target.value);
    dispatch(
      textInsideActions.changeWeight({ newWeightValue: e.target.value })
    );
  };

  const handleFontColourChange = (e) => {
    setfontColour(e.target.value);
    dispatch(textInsideActions.changeColour({ newColour: e.target.value }));
  };

  return (
    <div className={"section"}>
      <Title title={"Text inside"} />
      <div className={"line"}>
        <p>Displayed text:</p>
        <input
          type="text"
          className={"input"}
          value={value}
          onChange={handleTextChange}
        ></input>
      </div>
      <div className={"line"}>
        <p>Size:</p>
        <div className={"line-flex"}>
          <input
            type="range"
            min="1"
            max="50"
            value={size}
            onChange={handleResize}
            className={"slider"}
          />
        </div>
      </div>
      <div className={"line"}>
        <p>Font:</p>
        <div className={"line-flex"}>
          <select name="fonts" value={font} onChange={handleFontChange}>
            <option value="Itim">Itim {defaultItim}</option>
            <option value="sans-serif">Sans Serif</option>
            <option value="Arial">Arial</option>
            <option value="Arial-black">Arial Black</option>
            <option value="Arial narrow">Arial Narrow</option>
            <option value="Calibri">Calibri</option>
            <option value="Helvetica">Helvetica</option>
            <option value="Candara">Candara</option>
            <option value="Futara">Futara</option>
            <option value="Times New Roman">Times New Roman</option>
          </select>
        </div>
      </div>
      <div className={"line"}>
        <p>Weight:</p>
        <div className={"line-flex"}>
          <select
            name="font-weight"
            value={fontWeight}
            onChange={handleFontWeightChange}
          >
            <option>Choose</option>
            <option value="400">Normal</option>
            <option value="500">Medium</option>
            <option value="600">Semi-bold</option>
            <option value="700">Bold</option>
          </select>
        </div>
      </div>
      <div className={"line"}>
        <p>Colour:</p>
        <div className={"line-flex"}>
          <input
            type="color"
            className={"colour-choice"}
            defaultValue={fontColour}
            onChange={handleFontColourChange}
          ></input>
        </div>
      </div>
    </div>
  );
}

export default TextInside;
