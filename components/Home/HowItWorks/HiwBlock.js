import classes from "./HiwBlock.module.css";


function HiwBlock(props) {
  return (
    <div className={classes.container} style={{ whiteSpace: "pre-line" }}>
      <img
       alt="How it works with Teacher Jonny." src={props.image}></img>
      <h3>{props.heading}</h3>
      <p>{props.text}</p>
    </div>
  );
}

export default HiwBlock;
