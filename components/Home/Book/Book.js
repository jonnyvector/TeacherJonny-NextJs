import classes from "./Book.module.css";
import Calendly from "./Calendly";
import SectionHeading from "../../ui/SectionHeading";

function Book() {
  return (
    <div id="book" className={classes.container}>
      <SectionHeading>
        <span className={classes["word-first"]}>Book a </span>
        <span className={classes.word}>FREE Class!</span>
      </SectionHeading>
      <Calendly />
    </div>
  );
}

export default Book;
