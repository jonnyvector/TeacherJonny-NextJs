import classes from "./SectionHeading.module.css";

function SectionHeading(props) {
  return <span className={classes["section-heading"]}>{props.children}</span>;
}

export default SectionHeading;
