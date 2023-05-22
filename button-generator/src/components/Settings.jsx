import Header from "./Header";
import classes from "../styles/settings.module.css";
import drawing from "../icons/Drawing.svg";
import General from "./settings/General";
import Title from "./Title";
import TextInside from "./settings/TextInside";

function Settings() {
  return (
    <div>
      <Header icon={drawing} title={"Style your button"} />
      <div className={classes["settings-wrapper"]}>
        <General />
        <TextInside />
      </div>
    </div>
  );
}

export default Settings;
