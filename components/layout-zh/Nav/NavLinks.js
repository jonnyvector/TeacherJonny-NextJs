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
            <Link href="/about-me-zh">预约课程</Link>
          </li>
          <li>
            <Link href="/curriculum-zh">课程</Link>
          </li>
          <li>
            <Link href="/#faq-zh">常见问题</Link>
          </li>
          <li>
            {" "}
            <Link
              href="/#book
            "
            >
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
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavLinks;
