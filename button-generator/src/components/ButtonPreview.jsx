import classes from "../styles/button-preview.module.css";
import Header from "./Header";
import preview from "../icons/Preview.svg";

function ButtonPreview({ bg, setBG }) {
  return (
    <div>
      <Header icon={preview} title={"Preview"} />
      <div className={classes.wrapper}>
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
        <button className={classes["main-btn"]}>Style me !</button>
      </div>
    </div>
  );
}

export default ButtonPreview;
