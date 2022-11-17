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
            <Link href="/about-me">About Me</Link>
          </li>
          <li>
            <Link href="/curriculum">Curriculum</Link>
          </li>
          <li>
            <Link href="/#faq">FAQ</Link>
          </li>
        </ul>
      </nav>
      <Link href="/#book">
        <button
          className={
            scrolling
              ? `${classes["nav-button"]} ${classes.fixed}`
              : `${classes["nav-button"]}`
          }
        >
          Book a Class!
        </button>
      </Link>
    </div>
  );
}

export default DesktopNav;
