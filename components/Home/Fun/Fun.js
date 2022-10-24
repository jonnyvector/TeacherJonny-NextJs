import classes from "./Fun.module.css";

function Fun() {
  return (
    <div className="flex-container">
      <img
        alt="One-on-one class with a young boy"
        src="/images/FunBoyBlob.png"
        className={classes["img-kid"]}
      ></img>
      <p className={classes.text}>
        One-on-One classes are <span className={classes.fun}>FUN!</span>
      </p>

      <img
        alt="Jonny teaching and smiling."
        src="images/FunJonnyBlob.png"
        className={classes["img-jonny"]}
      ></img>
    </div>
  );
}

export default Fun;
