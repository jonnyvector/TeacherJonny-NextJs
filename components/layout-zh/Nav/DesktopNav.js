import { useState, useEffect } from "react";
import Link from "next/link";
import classes from "./MainNavigation.module.css";

function DesktopNav() {
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
    <div className={classes.DesktopNav}>
      <nav>
        <ul className={classes.ul}>
          <li>
            <Link href="/about-me-zh">关于我</Link>
          </li>
          <li>
            <Link href="/curriculum-zh">课程</Link>
          </li>
          <li></li>
        </ul>
      </nav>
      <Link href="/home-zh#book">
        <button
          className={
            scrolling
              ? `${classes["nav-button"]} ${classes.fixed}`
              : `${classes["nav-button"]}`
          }
        >
          预约课程!
        </button>
      </Link>
    </div>
  );
}

export default DesktopNav;
