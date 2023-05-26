import Header from "./Header";
import classes from "../styles/settings.module.css";
import drawing from "../icons/Drawing.svg";
import General from "./settings/General";
import TextInside from "./settings/TextInside";
import Border from "./settings/Border";
import TextShadow from "./settings/TextShadow";
import BoxShadow from "./settings/BoxShadow";

function Settings() {
  return (
    <div className={classes["settings-wrapper"]}>
      <Header icon={drawing} title={"Style your button"} />
      <div className={classes["settings-container"]}>
        <General />
        <TextInside />
        <Border />
        <TextShadow />
        <BoxShadow />
      </div>
    </div>
  );
}

export default Settings;
