import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";
import SectionHeading from "../../ui/SectionHeading";
import Wrapper from "../../ui/Wrapper";
import classes from "./FAQ.module.css";

const data = {
  rows: [
    {
      title: "How can we pay for classes?",
      content: `I accept all major credit cards, Alipay, and WeChat Pay.`,
    },
    {
      title: "What platform will we use to have class?",
      content: `Depending on the student we will use either <a href="https://www.zoom.us" target="_blank" style="color:blue">Zoom</a> or <a href="https://www.voovmeeting.com" target="_blank" style="color:blue">VooV</a>.`,
    },
    {
      title: "What if we need to cancel a class?",
      content: `I understand how busy life can be, therefore I do allow my students to cancel classes with at least 24-hours advance notice. `,
    },
  ],
};

const styles = {
  // bgColor: 'white',
  titleTextColor: "#000000d9",
  rowTitleColor: "#000000d9",
  titleTextSize: "16px",
  rowTitleTextSize: "16px",
  // rowContentColor: 'grey',
  // arrowColor: "red",
};

const config = {
  //   animate: true,
  //   arrowIcon: "V",
  tabFocus: true,
};

function FAQ() {
  return (
    <Wrapper>
      <SectionHeading>
        <span className={classes["word-first"]}>Frequently Asked</span>
        <span className={classes.word}> Questions</span>
      </SectionHeading>

      <Faq data={data} styles={styles} config={config} />
    </Wrapper>
  );
}

export default FAQ;
