import classes from "./NavWrapper.module.css";

function NavWrapper(props) {
  return <div className={classes.wrapper}> {props.children}</div>;
}

export default NavWrapper;
