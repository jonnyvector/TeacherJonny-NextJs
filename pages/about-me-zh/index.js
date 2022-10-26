import { Fragment } from "react";
import ExportedImage from "next-image-export-optimizer";
import MainNavigation from "../../components/layout-zh/Nav/MainNavigation";
import classes from "./AboutMe.module.css";
import Wrapper from "../../components/ui/Wrapper";
import CallToAction from "../../components/ui/CallToAction";

import Head from "next/head";

export default function AboutMe() {
  return (
    <Fragment>
      <Head>
        <title>About Me</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <MainNavigation />

      <Wrapper>
        <h1 className={classes.heading}>让学生做到最好是我的热情所在</h1>
        <div className={classes.container}>
          <ExportedImage
            src="/images/MissionBlob.png"
            alt="Jonny teaching a class."
            width="350"
            height="300"
            useWebp={process.env.nextImageExportOptimizer_storePicturesInWEBP}
          ></ExportedImage>
          <div className={classes["text-container"]}>
            <h2>
              <span className={classes["section-heading-my"]}>我的</span>
              <span className={classes["section-heading"]}> 初衷与使命</span>
            </h2>
            <p>
              使学生能够充分发挥他们的潜力是我作为教师的动力。当学生被推到他们的极限时，他们就会获得成长。因此，每堂课我都要确保学生挑战使用我们之前学过的所有概念和词汇说出完整的句子。
            </p>
          </div>
        </div>
        <div className={classes["reverse-block"]}>
          <ExportedImage
            src="/images/EducationBlob.png"
            alt="Jonny's diploma."
            width="350"
            height="300"
            useWebp={process.env.nextImageExportOptimizer_storePicturesInWEBP}
          ></ExportedImage>
          <div className={classes["text-container"]}>
            <h2>
              <span className={classes["section-heading-my"]}>我的</span>
              <span className={classes["section-heading"]}> 教育背景</span>
            </h2>
            <p>
              我拥有阿拉巴马大学的工商管理学士学位，并以 2010 级的优异成绩毕业。
              我还有一个 120 小时的 TEFL 课程证书。 在过去的 8
              年里，我自学了泰语的说、读和写，因此我亲身了解了学习一门新语言需要什么。
              这给了我成为最好的老师所需的技能和耐心
            </p>
          </div>
        </div>
        <div className={classes.container}>
          <ExportedImage
            src="/images/ExperienceBlob.png"
            alt="Jonny's 5-star ratings."
            width="350"
            height="300"
            useWebp={process.env.nextImageExportOptimizer_storePicturesInWEBP}
          ></ExportedImage>
          <div className={classes["text-container"]}>
            <h2>
              <span className={classes["section-heading-my"]}>我的</span>
              <span className={classes["section-heading"]}> 教学经验</span>
            </h2>
            <p>
              我已经教了超过14000个在线网络课程，也教了数千个大学级别面对面的课程。在8年前，我开始了我的教学之旅，从那时起，我一直是一名全职教师。我教过来自亚洲各地的学生，我自己也是一名亚洲语言的学生！
            </p>
          </div>
        </div>
        <CallToAction />
      </Wrapper>
    </Fragment>
  );
}
