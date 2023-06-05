import classes from "../styles/header.module.css";

function Header({ icon, title, margin }) {
  return (
    <div
      className={`${classes["header-wrapper"]} ${classes.header}`}
      style={{ marginTop: margin }}
    >
      <img className={classes.icon} src={icon} alt="icon"></img>
      <h1 className={classes.title}>{title}</h1>
    </div>
  );
}

export default Header;
