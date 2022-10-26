import ExportedImage from "next-image-export-optimizer";
import classes from "./HiwBlock.module.css";

function HiwBlock(props) {
  return (
    <div className={classes.container} style={{ whiteSpace: "pre-line" }}>
      <ExportedImage
        src={props.image}
        alt="How it works with Teacher Jonny."
        width="175"
        height="175"
        unoptimized={true}
      ></ExportedImage>
      <h3>{props.heading}</h3>
      <p>{props.text}</p>
    </div>
  );
}

export default HiwBlock;
