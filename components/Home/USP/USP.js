import SectionHeading from "../../ui/SectionHeading";
import classes from "./USP.module.css";
import USPBlock from "./USPBlock";

function USP(props) {
  return (
    <div>
      <SectionHeading>
        <span className={classes["word-first"]}>Why Teacher</span>
        <span className={classes.word}> Jonny?</span>
      </SectionHeading>
      <div className={classes["usp-container"]}>
        <USPBlock
          image={"/images/ExperienceGreen.svg"}
          heading={"8 Years of Experience"}
          text={
            "I have developed the perfect skills and teaching methodologies to help my students."
          }
        ></USPBlock>
        <USPBlock
          image={"/images/TaughtGreen.svg"}
          heading={"14,000 Classes Taught"}
          text={
            "I have the techniques and experience to make sure your child learns to speak like a native English speaker."
          }
        ></USPBlock>
        <USPBlock
          image={"/images/TrophyGreen.svg"}
          heading={"4,000 5-Star Reviews"}
          text={
            "I constantly strive to provide my students with an optimal learning environment, full of learning and fun!"
          }
        ></USPBlock>
      </div>
    </div>
  );
}

export default USP;
