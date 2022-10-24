import MainNavigation from "../../components/layout/Nav/MainNavigation";
import classes from "./AboutMe.module.css";
import Wrapper from "../../components/ui/Wrapper";
import { Fragment } from "react";
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
        <h1 className={classes.heading}>
          Empowering students to be their best is my passion.
        </h1>
        <div className={classes.container}>
          <img 
          alt="Jonny teaching a class." src="/images/MissionBlob.png"></img>
          <div className={classes["text-container"]}>
            <h2>
              <span className={classes["section-heading-my"]}>My</span>
              <span className={classes["section-heading"]}> Mission</span>
            </h2>
            <p>
              Enabling students to fulfill their full potential is what drives
              me as a teacher. Growth happens when students are pushed to their
              limit. Therefore, each class I make sure students are challenged
              to speak in complete sentences using all of the concepts and
              vocabulary that we've previously learned.
            </p>
          </div>
        </div>
        <div className={classes["reverse-block"]}>
          <img 
          alt="Jonny's diploma." src="/images/EducationBlob.png"></img>
          <div className={classes["text-container"]}>
            <h2>
              <span className={classes["section-heading-my"]}>My</span>
              <span className={classes["section-heading"]}> Education</span>
            </h2>
            <p>
              I have a bachelors degree in Business Administration from the
              University of Alabama where I graduated with honors in the 2010
              class. I also have a 120-hour in class TEFL certificate. In the
              past 8 years I have taught myself to speak, read and write the
              Thai language, so I know first-hand what it takes to learn a new
              language. This gives me the skills and patience required to be the
              best possible teacher.
            </p>
          </div>
        </div>
        <div className={classes.container}>
          <img
            alt="A picture of Jonny's experience."
            src="/images/ExperienceBlob.png"
          ></img>
          <div className={classes["text-container"]}>
            <h2>
              <span className={classes["section-heading-my"]}>My</span>
              <span className={classes["section-heading"]}> Experience</span>
            </h2>
            <p>
              I've taught more than 14,000 online online classes and thousands
              of in-person classes at the university level as well. I started my
              teaching journey 8 years ago and have been a full-time teacher
              ever since. I've taught students from all over Asia and am a
              student of Asian languages myself!
            </p>
          </div>
        </div>
        <CallToAction />
      </Wrapper>
    </Fragment>
  );
}
