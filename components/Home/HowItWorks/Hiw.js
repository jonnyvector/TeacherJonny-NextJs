import SectionHeading from "../../ui/SectionHeading";
import HiwBlock from "./HiwBlock";
import classes from "./Hiw.module.css";

function Hiw() {
  return (
    <div>
      <SectionHeading>
        <span className={classes["word-first"]}> How it</span>
        <span className={classes.word}> Works</span>
      </SectionHeading>
      <div className={classes.container}>
        <HiwBlock
          image={"/images/PreClass.svg"}
          heading={"Pre-Class Preview"}
          text={
            "Previewing the class material helps maximize the classroom experience."
          }
        ></HiwBlock>
        <HiwBlock
          image={"/images/OneOnOne.svg"}
          heading={"One-on-One Class"}
          text={
            "My methodology is 80/20: \n80% student talking time \n 20% teacher talking time"
          }
        ></HiwBlock>
        <HiwBlock
          image={"/images/PostClass.svg"}
          heading={"Post-Class Review"}
          text={
            "Reviewing the lessons ensures students retain the information they've learned."
          }
        ></HiwBlock>
      </div>
    </div>
  );
}

export default Hiw;
