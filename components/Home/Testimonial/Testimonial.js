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
          <span className={classes["word-first"]}>What Others Have</span>
          <span className={classes.word}> to Say</span>
        </SectionHeading>
        <SimpleSlider />
        <div className={classes.button}>
          <Button
            onClick={() => {
              setIsOpen(true);
            }}
          >
            Let's Chat on WeChat
          </Button>
          <Modal open={isOpen} onClose={() => setIsOpen(false)}></Modal>
        </div>
      </Wrapper>
    </div>
  );
}

export default Testimonial;
