import { useState } from "react";

import Button from "../../ui/Button";
import Wrapper from "../../ui/Wrapper";
import SimpleSlider from "./SimpleSlider";
import SectionHeading from "../../ui/SectionHeading";
import Modal from "../../ui/Modal";
import classes from "./Testimonial.module.css";

function Testimonial() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={classes.container}>
      <Wrapper>
        <SectionHeading>
          <span className={classes["word-first"]}>家长</span>
          <span className={classes.word}>反馈</span>
        </SectionHeading>
        <SimpleSlider />
        <div className={classes.button}>
          <Button
            onClick={() => {
              setIsOpen(true);
            }}
          >
            我们微信聊天吧
          </Button>
          <Modal open={isOpen} onClose={() => setIsOpen(false)}></Modal>
        </div>
      </Wrapper>
    </div>
  );
}

export default Testimonial;
