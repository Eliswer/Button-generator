import classes from "../styles/header.module.css";

function Header({ icon, title }) {
  return (
    <div className={`header-wrapper ${classes.header}`}>
      <img className={classes.icon} src={icon} alt="icon"></img>
      <h1 className={classes.title}>{title}</h1>
    </div>
  );
}

export default Header;
