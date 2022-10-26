import SectionHeading from "../../ui/SectionHeading";
import HiwBlock from "./HiwBlock";
import classes from "./Hiw.module.css";

function Hiw() {
  return (
    <div>
      <SectionHeading>
        <span className={classes["word-first"]}> 课程流程</span>
        <span className={classes.word}> 是怎样的</span>
      </SectionHeading>
      <div className={classes.container}>
        <HiwBlock
          image={"/images/PreClass.svg"}
          heading={"课前预习"}
          text={"预习课堂材料有助于最大化课堂体验"}
        ></HiwBlock>
        <HiwBlock
          image={"/images/OneOnOne.svg"}
          heading={"一对一课程"}
          text={
            "我的教学方法是 80-20: \n80%是学生发言交流时间  \n 20%是老师讲授时间"
          }
        ></HiwBlock>
        <HiwBlock
          image={"/images/PostClass.svg"}
          heading={"回顾复习"}
          text={"复习课程可以确保学生们掌握吸收他们所学的内容"}
        ></HiwBlock>
      </div>
    </div>
  );
}

export default Hiw;
