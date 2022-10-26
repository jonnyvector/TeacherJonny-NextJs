import classes from "./Book.module.css";
import Calendly from "./Calendly";
import SectionHeading from "../../ui/SectionHeading";

function Book() {
  return (
    <div id="book" className={classes.container}>
      <SectionHeading>
        <span className={classes["word-first"]}>预订</span>
        <span className={classes.word}>免费课程!</span>
      </SectionHeading>
      <Calendly />
    </div>
  );
}

export default Book;
