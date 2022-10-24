import { useState, useEffect } from "react";
import classes from "./MainNavigation.module.css";
import Link from "next/link";

function NavLinks(props) {
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
    <div className={classes["nav-links"]}>
      <nav>
        <ul
          className={
            props.isOpen
              ? `${classes["nav-menu"]}  ${classes.active}`
              : `${classes["nav-menu"]}`
          }
        >
          <li>
            <Link href="/about-me">About Me</Link>
          </li>
          <li>
            <Link href="/curriculum">Curriculum</Link>
          </li>
          <li>
            {" "}
            <Link href="/#book
            ">
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
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavLinks;
