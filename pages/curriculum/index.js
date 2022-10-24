import MainNavigation from "../../components/layout/Nav/MainNavigation";
import CallToAction from "../../components/ui/CallToAction";
import Wrapper from "../../components/ui/Wrapper";
import CurrBlock from "./CurrBlock";
import Head from "next/head";
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
          <h2>
            I strive to provide the highest quality education and most modern
            teaching materials to ensure that your child's learning goals are
            met!
          </h2>
          <img
          src={"/images/CurrHero.svg"} className={classes["hero-image"]} />
          <h2>In Teacher Jonny's classroom your child will learn to:</h2>
          <div className={classes["flex-container"]}>
            <CurrBlock
              image={"/images/CurrBrain.svg"}
              heading={"Think and Communicate"}
              text={
                "Children will learn to think in English and communicate solely in English while in the classroom. Jonny’s classes follow a total English immersion strategy."
              }
            />
            <CurrBlock
              image={"/images/CurrBooks.svg"}
              heading={"Analyze and Interpret"}
              text={
                "Children will learn to analyze the information presented in class and interpret the meaning based on their exisiting skills and knowldedge."
              }
            />
            <CurrBlock
              image={"/images/CurrExpress.svg"}
              heading={"Respond and Express"}
              text={
                "Children will learn how to respond and express themselves like a Native English speaker. This includes using proper intonation, pronunciation, and facial expressions."
              }
            />
          </div>
        </div>
        <CallToAction />
      </Wrapper>
    </div>
  );
}
