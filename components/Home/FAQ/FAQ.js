import Faq from "react-faq-component";
import SectionHeading from "../../ui/SectionHeading";
import Wrapper from "../../ui/Wrapper";
import classes from "./FAQ.module.css";

const data = {
  rows: [
    {
      title: "What do I need to prepare before the class?",
      content: `A computer or tablet with a camera and a stable network connection during the class.`,
    },
    {
      title: "How can I schedule a class?",
      content: `Once you subscribe, class will be scheduled per week in fixed time slots based on your availability.  There is no worry to arrange the lesson each lesson every time.`,
    },
    {
      title: "What kind of payment method can I use?",
      content: `Currently, Teacher Jonny supports several different payment methods, depending on your account country and location. `,
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
    <div id="faq">
      <Wrapper>
        <SectionHeading>
          <span className={classes["word-first"]}>Frequently Asked</span>
          <span className={classes.word}> Questions</span>
        </SectionHeading>

        <Faq data={data} styles={styles} config={config} />
      </Wrapper>
    </div>
  );
}

export default FAQ;
