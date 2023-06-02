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

  const newTextSize = useSelector((state) => state.textInside.size)?.newSize;

  const newFont = useSelector((state) => state.textInside.font)?.newFont;

  const newFontWeight = useSelector(
    (state) => state.textInside.weight
  )?.newWeightValue;

  /* General changes */
  const newBackgroundType = useSelector(
    (state) => state.general.backgroundType
  )?.newColour;

  const newSolidColour = useSelector(
    (state) => state.general.backgroundColourSolid
  )?.solidColour;

  const newGradientColour = useSelector(
    (state) => state.general.backgroundColourGradient
  )?.gradientColour;

  let background = "white";

  if (newBackgroundType === "solid") {
    background = newSolidColour;
  } else if (newBackgroundType === "gradient") {
    background = `linear-gradient(${newSolidColour}, ${newGradientColour})`;
  }

  const newHeight = useSelector((state) => state.general.height)?.newHeight;
  const newWidth = useSelector((state) => state.general.width)?.newWidth;

  const newPaddingTop = useSelector(
    (state) => state.general.paddingTop
  )?.newPaddingTop;

  const newPaddingBottom = useSelector(
    (state) => state.general.paddingBottom
  )?.newPaddingBottom;

  const newPaddingLeft = useSelector(
    (state) => state.general.paddingLeft
  )?.newPaddingLeft;

  const newPaddingRight = useSelector(
    (state) => state.general.paddingRight
  )?.newPaddingRight;

  /* Text shadow changes */
  const newTextShadowColour = useSelector(
    (state) => state.textShadow.colour
  )?.newColour;

  const newHorizontalValue = useSelector(
    (state) => state.textShadow.horizontal
  )?.newHorintalValue;

  const newVerticalValue = useSelector(
    (state) => state.textShadow.vertical
  )?.newVerticalValue;

  const newBlurValue = useSelector(
    (state) => state.textShadow.blur
  )?.newBlurValue;

  /* Box shadow changes */
  const newBoxShadowType = useSelector(
    (state) => state.boxShadow.type
  )?.newType;

  const newBoxShadowColour = useSelector(
    (state) => state.boxShadow.colour
  )?.newColour;

  const newBoxShadowHorizontalValue = useSelector(
    (state) => state.boxShadow.horizontal
  )?.newHorizontalValue;

  const newBoxShadowVerticalValue = useSelector(
    (state) => state.boxShadow.vertical
  )?.newVerticalValue;

  const newBoxShadowBlur = useSelector(
    (state) => state.boxShadow.blur
  )?.newBlurValue;

  const newBoxShadowSpread = useSelector(
    (state) => state.boxShadow.spread
  )?.newSpreadValue;

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
            fontSize: newTextSize + "px",
            fontWeight: newFontWeight,
            fontFamily: newFont + " " + "sans-serif",
            background: background,
            height: newHeight + "px",
            width: newWidth + "px",
            paddingTop: newPaddingTop + "px",
            paddingBottom: newPaddingBottom + "px",
            paddingLeft: newPaddingLeft + "px",
            paddingRight: newPaddingRight + "px",
            textShadow: `${newTextShadowColour} ${
              newHorizontalValue || "5"
            }px ${newVerticalValue || "5"}px ${newBlurValue || "5"}px`,
            boxShadow: `${newBoxShadowType || ""} ${
              newBoxShadowHorizontalValue || "10"
            }px ${newBoxShadowVerticalValue || "5"}px ${
              newBoxShadowBlur || "5"
            }px 
            ${newBoxShadowSpread || "5"}px ${newBoxShadowColour}`,
          }}
        >
          {newDisplayedText || "Style me !"}
        </button>
      </div>
    </div>
  );
}

export default ButtonPreview;
