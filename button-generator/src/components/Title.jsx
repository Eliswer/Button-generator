import classes from "../styles/title.module.css";

function Title({ title }) {
  return (
    <>
      <h2 className={classes.main}>{title}</h2>
    </>
  );
}

export default Title;
