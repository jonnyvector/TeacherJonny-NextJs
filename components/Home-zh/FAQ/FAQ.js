import Faq from "react-faq-component";
import SectionHeading from "../../ui/SectionHeading";
import Wrapper from "../../ui/Wrapper";
import classes from "./FAQ.module.css";

const data = {
  rows: [
    {
      title: "上课前我需要准备什么？",
      content: `一台带摄像头的电脑或Ipad，并保持良好的网络环境`,
    },
    {
      title: "我应该如何约课？",
      content: `一旦报名后，会限定在每周固定的时间段上课，无需多次预约。`,
    },
    {
      title: "我可以选择何种支付方式？",
      content: `您可以使用VISA、Master信用卡或, 支付宝和微信支付
      `,
    },
    {
      title: "我们将使用什么平台上课？      ",
      content: `
      根据学生所在的位置，我们将使用 <a href="https://www.zoom.us" target="_blank" style="color:blue">Zoom</a> 或<a href="https://www.voovmeeting.com" target="_blank" style="color:blue">VooV</a>.`,
    },
    {
      title: "如果我们需要取消课程怎么办？",
      content: `我知道生活有多忙，所以我允许我的学生在至少提前 24 小时通知的情况下取消课程。 `,
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
