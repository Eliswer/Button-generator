import Header from "./Header";
import classes from "../styles/code-to-copy.module.css";

import sourceCode from "../icons/Source-code.svg";

import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function CodeToCopy() {
  /* General */
  const className = useSelector(
    (state) => state.general.className
  )?.newClassName;

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

  const [paddingShow, setPaddingShow] = useState(true);

  useEffect(() => {
    if (
      newPaddingBottom ||
      newPaddingLeft ||
      newPaddingRight ||
      newPaddingTop === undefined
    ) {
      setPaddingShow(true);
    } else {
      setPaddingShow(false);
    }
  }, [newPaddingBottom, newPaddingLeft, newPaddingRight, newPaddingTop]);

  /* Text inside */
  const newTextSize = useSelector((state) => state.textInside.size)?.newSize;

  const newFont = useSelector((state) => state.textInside.font)?.newFont;

  const newFontWeight = useSelector(
    (state) => state.textInside.weight
  )?.newWeightValue;

  /* Border */
  const borderType = useSelector((state) => state.border.type)?.borderType;
  const borderColour = useSelector(
    (state) => state.border.colour
  )?.borderColour;
  const borderWidth = useSelector((state) => state.border.width)?.borderWidth;
  const borderRadius = useSelector(
    (state) => state.border.radius
  )?.borderRadius;

  /* Text shadow */
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

  const [textShadowShow, setTextShadowShow] = useState(false);

  useEffect(() => {
    if (newTextShadowColour === undefined) {
      setTextShadowShow(false);
    } else {
      setTextShadowShow(true);
    }
  }, [newTextShadowColour]);

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

  const [boxShadowShow, setBoxShadowShow] = useState(false);

  useEffect(() => {
    if (newBoxShadowColour === undefined) {
      setBoxShadowShow(false);
    } else {
      setBoxShadowShow(true);
    }

    if (newBoxShadowType === "none") {
      setBoxShadowShow(false);
    }
  }, [newBoxShadowColour, newBoxShadowType]);

  return (
    <div>
      <Header icon={sourceCode} title={"Code to copy"} margin={"-40px"} />
      <div style={{ marginTop: "40px" }} className={classes["code-wrapper"]}>
        <pre>
          .{className}{" "}
          {`{
          text-align: center;
          align-items: center;
          cursor: pointer;
          background: ${background};
          width: ${newWidth || "100"}px;
          height: ${newHeight || "50"}px;
          ${
            paddingShow
              ? "padding: 0px"
              : `padding-top: ${newPaddingTop || "0"}px;
          padding-left: ${newPaddingLeft || "0"}px;
          padding-right: ${newPaddingRight || "0"}px;
          padding-bottom: ${newPaddingBottom || "0"}px;`
          }
          font-size: ${newTextSize || "16"}px;
          font-family: ${newFont || "sans-serif"}
          font-weight: ${newFontWeight || "400"}px
          border: ${borderWidth || "1"}px ${borderType || "solid"} ${
            borderColour || "black"
          };
          border-radius: ${borderRadius || "7"}px;
          ${
            textShadowShow
              ? `textShadow: ${newTextShadowColour} ${
                  newHorizontalValue || "5"
                }px ${newVerticalValue || "5"}px ${newBlurValue || "5"}px;`
              : "text-shadow: none;"
          }
          ${
            boxShadowShow
              ? `boxShadow: ${newBoxShadowType || ""} ${
                  newBoxShadowHorizontalValue || "10"
                }px ${newBoxShadowVerticalValue || "5"}px ${
                  newBoxShadowBlur || "5"
                }px ${newBoxShadowSpread || "5"}px ${newBoxShadowColour};`
              : "box-shadow: none;"
          }          
        }`}
        </pre>
      </div>
    </div>
  );
}

export default CodeToCopy;
