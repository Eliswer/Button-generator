import classes from "../styles/button-preview.module.css";

import Header from "./Header";

import preview from "../icons/Preview.svg";

function ButtonPreview() {
  return (
    <div>
      <Header icon={preview} title={"Preview"} />
      <div className={classes["bg-change-wrapper"]}>
        <p className={classes.paragraph}>change BG:</p>
        <div
          className={classes["bg-change-block"]}
          style={{ backgroundColor: "#171716" }}
        ></div>
        <div
          className={classes["bg-change-block"]}
          style={{ backgroundColor: "#f4f5f9" }}
        ></div>
        <div
          className={classes["bg-change-block"]}
          style={{ backgroundColor: "#7d7d7d" }}
        ></div>
        <div
          className={classes["bg-change-block"]}
          style={{ backgroundColor: "#f1404b" }}
        ></div>
      </div>
    </div>
  );
}

export default ButtonPreview;
