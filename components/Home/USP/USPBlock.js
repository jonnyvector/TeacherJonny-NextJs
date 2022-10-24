import classes from "./USPBlock.module.css";


function USPBlock(props) {
  return (
    <div className={classes["flex-box"]}>
      <img 
      alt="Reason for learning with Teacher Jonny" src={props.image}></img>
      <h3>{props.heading}</h3>
      <p>{props.text}</p>
    </div>
  );
}

export default USPBlock;
