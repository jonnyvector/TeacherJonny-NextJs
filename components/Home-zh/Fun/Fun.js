import ExportedImage from "next-image-export-optimizer";
import classes from "./Fun.module.css";

function Fun() {
  return (
    <div className="flex-container">
      <ExportedImage
        alt="One-on-one class with a young boy"
        src="/images/FunBoyBlob.png"
        className={classes["img-kid"]}
        width="350"
        height="350"
      ></ExportedImage>
      <p className={classes.text}>一对一课程趣味无穷!</p>

      <ExportedImage
        alt="Jonny teaching and smiling."
        src="images/FunJonnyBlob.png"
        width="350"
        height="350"
        className={classes["img-jonny"]}
      ></ExportedImage>
    </div>
  );
}

export default Fun;
