import Link from "next/link";
import classes from "./MainNavigation.module.css";
import { useState, useEffect } from "react";
import NavWrapper from "../../ui/NavWrapper";
import MobileNavigation from "./MobileNavigation";
import DesktopNav from "./DesktopNav";
function MainNavigation() {
  const [scrolling, setIsScrolling] = useState(false);

  const setFixedNav = () => {
    if (window.scrollY > 0) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", setFixedNav);
  });

  return (
    <header
      className={
        scrolling ? `${classes.header} ${classes.fixed}` : `${classes.header}`
      }
    >
      <NavWrapper>
        <div className={classes["nav-left"]}>
          <Link href="/">
            <a className={classes.logo}>Teacher Jonny</a>
          </Link>
          <span className={classes["language-bar"]}>|</span>
          <Link href="/">
            <a>English</a>
          </Link>
        </div>
        <DesktopNav />
        <MobileNavigation />
      </NavWrapper>
    </header>
  );
}

export default MainNavigation;
