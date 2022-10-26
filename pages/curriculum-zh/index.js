import Head from "next/head";
import ExportedImage from "next-image-export-optimizer";
import MainNavigation from "../../components/layout-zh/Nav/MainNavigation";
import CallToAction from "../../components/ui/CallToAction";
import Wrapper from "../../components/ui/Wrapper";
import CurrBlock from "./CurrBlock";
import classes from "./Curriculum.module.css";

export default function Curriculum() {
  return (
    <div>
      <Head>
        <title>Curriculum</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <MainNavigation />
      <Wrapper>
        <div className={classes.container}>
          <h2>高质量的教材确保您孩子的学习目标得以实现。</h2>
          <ExportedImage
            src={"/images/CurrHero.svg"}
            className={classes["hero-image"]}
            width="700"
            height="700"
          />
          <h2>在 Jonny 老师的课堂上，您的孩子将学会</h2>
          <div className={classes["flex-container"]}>
            <CurrBlock
              image={"/images/CurrBrain.svg"}
              heading={"思考与交流"}
              text={
                "您的孩子在课堂上将学会用英语思考，并完全用英语交流。Jonny的课程遵循完全的英语沉浸式策略。"
              }
            />
            <CurrBlock
              image={"/images/CurrBooks.svg"}
              heading={"分析和解释"}
              text={
                "您的孩子将学会分析课堂上提出的信息，并根据他们现有的技能和知识来解释其含义。"
              }
            />
            <CurrBlock
              image={"/images/CurrExpress.svg"}
              heading={"回应和表达"}
              text={
                "您的孩子将学习如何通过使用正确的语调、发音和面部表情，像英语母语者一样回应和表达自己。"
              }
            />
          </div>
        </div>
        <CallToAction />
      </Wrapper>
    </div>
  );
}
