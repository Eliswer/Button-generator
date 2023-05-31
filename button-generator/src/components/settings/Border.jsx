import { useState } from "react";
import Title from "../Title";

import { borderActions } from "../../store/border";
import { useDispatch } from "react-redux";

function Border() {
  const [isChecked, setIsChecked] = useState(false);
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const checkHandler = (e) => {
    setIsChecked(!isChecked);
  };

  const handleBorderStyleChange = (e) => {
    setValue(e.target.value);
    dispatch(borderActions.changeType({ borderType: e.target.value }));
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
                <option value="dotted">Dotted</option>
                <option value="solid">Solid</option>
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
                defaultValue={"#f1404b"}
              ></input>
            </div>
          </div>
          <div className={"line"}>
            <p>Width:</p>
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
            <p>Radius:</p>
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
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Border;
