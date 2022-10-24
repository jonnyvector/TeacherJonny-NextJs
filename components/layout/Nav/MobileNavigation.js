import NavLinks from "./NavLinks";
import classes from "./MainNavigation.module.css";
import { useState } from "react";
import Hamburger from "hamburger-react";
import {
  Transition,
  CSSTransition,
  SwitchTransition,
  TransitionGroup,
} from "react-transition-group";

const duration = 300;
const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
  padding: 20,
  display: "inline-block",
  backgroundColor: "#b3d0ff",
};
const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
  exiting: { opacity: 1 },
  exited: { opacity: 0 },
};

function MobileNavigation() {
  const [open, setOpen] = useState(false);

  return (
    <div className={classes.MobileNav}>
      <nav>
        <Hamburger toggled={open} toggle={setOpen} />
        <Transition in={open} timeout={300}>
          {(state) => (
            <NavLinks
              style={{
                ...defaultStyle,
                ...transitionStyles[state],
              }}
              isOpen={open}
            ></NavLinks>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default MobileNavigation;
