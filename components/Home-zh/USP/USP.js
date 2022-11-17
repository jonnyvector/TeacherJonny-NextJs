import SectionHeading from "../../ui/SectionHeading";
import classes from "./USP.module.css";
import USPBlock from "./USPBlock";

function USP(props) {
  return (
    <div>
      <SectionHeading>
        <span className={classes["word-first"]}>为什么是</span>
        <span className={classes.word}>Jonny老师？</span>
      </SectionHeading>
      <div className={classes["usp-container"]}>
        <USPBlock
          image={"/images/ExperienceGreen.svg"}
          heading={"八年教学经验"}
          text={"我已经形成了完美教学体系来帮助我的学生。"}
        ></USPBlock>
        <USPBlock
          image={"/images/TaughtGreen.svg"}
          heading={"已讲授14,000课时"}
          text={
            "我有足够的技术和经验来确保您的孩子将会像英语为母语的人一样说话。"
          }
        ></USPBlock>
        <USPBlock
          image={"/images/TrophyGreen.svg"}
          heading={"4,000 条 5 星评价"}
          text={"我不断努力为我的学生提供一个最佳的学习环境，充满学习和乐趣"}
        ></USPBlock>
      </div>
    </div>
  );
}

export default USP;
