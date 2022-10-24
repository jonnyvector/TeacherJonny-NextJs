import classes from "./USPBlock.module.css";
import ExportedImage from "next-image-export-optimizer";

function USPBlock(props) {
  return (
    <div className={classes["flex-box"]}>
      <ExportedImage
        src={props.image}
        alt="Reason for learning with Teacher Jonny"
        width="100"
        height="100"
      ></ExportedImage>
      <h3>{props.heading}</h3>
      <p>{props.text}</p>
    </div>
  );
}

export default USPBlock;
