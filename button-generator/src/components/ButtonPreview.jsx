import classes from "../styles/button-preview.module.css";
import Header from "./Header";
import preview from "../icons/Preview.svg";

import { useSelector } from "react-redux";

function ButtonPreview({ bg, setBG }) {
  /* Border changes */
  const borderType = useSelector((state) => state.border.type)?.borderType;
  const borderColour = useSelector(
    (state) => state.border.colour
  )?.borderColour;
  const borderWidth = useSelector((state) => state.border.width)?.borderWidth;
  const borderRadius = useSelector(
    (state) => state.border.radius
  )?.borderRadius;

  /* Text inside changes */
  const newDisplayedText = useSelector(
    (state) => state.textInside.displayedText
  )?.newText;

  const newFont = useSelector((state) => state.textInside.font)?.newFont;

  /*const className = useSelector(
    (state) => state.general.className
  )?.newClassName;

  console.log(className);*/

  return (
    <div>
      <Header icon={preview} title={"Preview"} />
      <div
        className={`${classes["button-preview-wrapper"]} ${classes.wrapper}`}
      >
        <div className={classes["bg-change-wrapper"]}>
          <p className={classes.paragraph}>change BG:</p>
          <div
            className={classes["bg-change-block"]}
            style={{ backgroundColor: "#171716" }}
            onClick={() => {
              setBG("#171716");
            }}
          ></div>
          <div
            className={classes["bg-change-block"]}
            style={{ backgroundColor: "#DDDFE6" }}
            onClick={() => {
              setBG("#DDDFE6");
            }}
          ></div>
          <div
            className={classes["bg-change-block"]}
            style={{ backgroundColor: "#7d7d7d" }}
            onClick={() => {
              setBG("#7d7d7d");
            }}
          ></div>
          <div
            className={classes["bg-change-block"]}
            style={{ backgroundColor: "#f1404b" }}
            onClick={() => {
              setBG("#f1404b");
            }}
          ></div>
        </div>
        <button
          className={classes["main-btn"]}
          style={{
            borderStyle: borderType,
            borderColor: borderColour,
            borderWidth: borderWidth + "px",
            borderRadius: borderRadius + "px",
            fontFamily: newFont + "" + "sans-serif",
          }}
        >
          Style me !{newDisplayedText}
        </button>
      </div>
    </div>
  );
}

export default ButtonPreview;
